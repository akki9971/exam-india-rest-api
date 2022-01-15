import { getRepository, createQueryBuilder, getConnection, getManager, Brackets } from 'typeorm';

// entities
import { Exam } from '../entity/Exam';
import { Answer } from '../entity/Answer';
import { Result } from '../entity/Result';
import { Payment } from '../entity/Payment';
import { Question } from '../entity/Question';
import { Institute } from '../entity/Institute';
import { University } from '../entity/University';
import { Scholarship } from '../entity/Scholarship';
import { ExamAttempt } from '../entity/ExamAttempt';
import { User } from '../entity/User';
import { compareSync } from 'bcryptjs';

class ExamService {

    private examRepository;
    private resultRepository;
    private answerRepository;
    private questionRepository;
    private instituteRepository;
    private universityRepository;
    private scholarshipRepository;
    private examAttemptRepository;
    private static instance: ExamService;

    constructor() {
        this.examRepository = getRepository(Exam);
        this.resultRepository = getRepository(Result);
        this.answerRepository = getRepository(Answer);
        this.questionRepository = getRepository(Question);
        this.instituteRepository = getRepository(Institute);
        this.universityRepository = getRepository(University);
        this.scholarshipRepository = getRepository(Scholarship);
        this.examAttemptRepository = getRepository(ExamAttempt);
    }

    public static getInstance(): ExamService {
        if (!ExamService.instance) {
            ExamService.instance = new ExamService();
        }

        return ExamService.instance;
    }

    /**
    * get users result for specific exam
    * @param examId, userId
    * @return result
    */
    getResult = async (userId: number, examId: number) => {
        return await getManager()
            .createQueryBuilder(Answer, 'answer')
            .addSelect('answer.answerId', 'answerId')
            .addSelect('answer.examId', 'examId')
            .addSelect('answer.userId', 'userId')
            .addSelect('answer.questionId', 'questionId')
            .addSelect('answer.userAnswer', 'userAnswer')
            .addSelect('question.correctAnswer', 'correctAnswer')
            .addSelect('question.questionL1', 'questionL1')
            .addSelect('question.questionL2', 'questionL2')
            .addSelect('question.AL1', 'AL1')
            .addSelect('question.AL2', 'AL2')
            .addSelect('question.BL1', 'BL1')
            .addSelect('question.BL2', 'BL2')
            .addSelect('question.CL1', 'CL1')
            .addSelect('question.CL2', 'CL2')
            .addSelect('question.DL1', 'DL1')
            .addSelect('question.DL2', 'DL2')
            .addSelect('question.marks', 'marks')
            .innerJoin(Question, 'question', 'answer.questionId = question.questionId')
            .where('answer.examId = :examId', { examId: examId })
            .andWhere('answer.userId = :userId', { userId: userId })
            .getRawMany();
    }

    /**
    * get exam details by examId
    * @param examId
    * @return exam
    */
    getDetails = async (examId: number) => {
        return await this.examRepository.findOne(examId);
    }

    /**
    * checking if given exam id is valid
    * @param examId
    * @return boolean
    */
    isValid = async (examId: number) => {
        const exam = await this.examRepository.findOne(examId);
        if (exam) {
            return true;
        }
        return false;
    }

    /**
     * get answer count by userId and examId
     * @params userId, examId
     * @return boolean
     */
    getAnswersCount = async (userId, examId) => {
        const count = await this.answerRepository.count({
            where: {
                examId: examId,
                userId: userId
            }
        });
        return count;
    }

    /**
     * get questions count by examId
     * @params examId
     * @return boolean
     */
    getQuestionsCount = async (examId) => {
        return await this.questionRepository.count({
            where: { examId: examId }
        });
    }

    /**
     * save result
     * @params 
     */
    saveResult = async (result: Result) => {
        return await this.resultRepository.save(result);
    }

    /**
     * save answers
     * @params Answer[]
     */
    saveAnswers = async (answers: Answer[]) => {
        // return await this.answerRepository.save(answers);
        for (let i = 0; i < answers.length; i++) {
            const answer = answers[i];
            const oldAnswer = await this.answerRepository.findOne({
                where: {
                    examId: answer.examId,
                    userId: answer.userId,
                    questionId: answer.questionId
                }
            });
            if (oldAnswer) {
                oldAnswer.userAnswer = answer.userAnswer;
                return await this.answerRepository.save(oldAnswer);
            } else {
                return await this.answerRepository.save(answer);
            }
        }
    }

    /**
     * save exam
     * @params Exam
     */
    saveExam = async (exam: Exam) => {
        return await this.examRepository.save(exam);
    }

    /**
     * check if instant result
     * @param examId
     */
    isInstantResult = async (examId: number) => {
        const exam = await this.getDetails(examId);
        if (exam && exam.instantResult === true) {
            return true;
        }
        return false;
    }

    /**
     * preparing a list of user answers and correct answers
     * @param identifiers: where condiction checks
     */
    getMergedAnswers = async (identifiers) => {
        // return await this.answerRepository.find({
        //     where: identifiers
        // });
        const mergedAnswers = await this.answerRepository.createQueryBuilder()
            .innerJoinAndSelect(
                'answer.questionId',
                'question.questionId'
            )
            .where('answer.examId = :examId', { examId: identifiers.examId })
            .where('answer.userId = :userId', { userId: identifiers.userId })
            .getMany();
        return mergedAnswers;
    }

    /**
     * get user answers
     * @param selectors: what all columns to select
     * @params identifiers like userId, examId
     */
    getAnswers = async (selectors: string[], identifiers: object) => {
        let params = {
            where: identifiers
        }
        if (selectors.length > 0) {
            params['select'] = selectors;
        }
        // console.log('getAnswers:params', params);
        return await this.answerRepository.find(params);
    }

    // /**
    //  * get questions
    //  * @params examId
    //  */
    // getQuestions = async (examId) => {
    //     return await this.questionRepository.find({
    //         where: { examId: examId }
    //     });
    // }

    /**
    * get questions
    * @param selectors: what all columns to select
    * @param identifiers: where condiction checks
    */
    getQuestions = async (selectors: string[], identifiers: object) => {
        let params = {
            where: identifiers
        }
        if (selectors.length > 0) {
            params['select'] = selectors;
        }
        // console.log('getQuestions:params', params);
        return await this.questionRepository.find(params);
    }

    /**
    * get questions with user answers
    * @param exmaId: number
    * @param userId: number
    */
    getQuestionsWithUserAns = async (examId, userId) => {
        return await getManager()
            .createQueryBuilder(Question, 'question')
            .select('question.questionId', 'questionId')
            .addSelect('question.questionL1', 'questionL1')
            .addSelect('question.questionL2', 'questionL2')
            .addSelect('question.AL1', 'AL1')
            .addSelect('question.AL2', 'AL2')
            .addSelect('question.BL1', 'BL1')
            .addSelect('question.BL2', 'BL2')
            .addSelect('question.CL1', 'CL1')
            .addSelect('question.CL2', 'CL2')
            .addSelect('question.DL1', 'DL1')
            .addSelect('question.DL2', 'DL2')
            .addSelect('question.marks', 'marks')
            .addSelect('question.examId', 'examId')
            .addSelect('answer.userId', 'userId')
            .addSelect('answer.answerId', 'answerId')
            .addSelect('answer.userAnswer', 'userAnswer')
            .leftJoin(Answer, 'answer', 'answer.questionId = question.questionId AND answer.userId = :userId', { userId: userId })
            .where('question.examId = :examId', { examId: examId })
            .orderBy('question.questionId', 'ASC')
            .getRawMany();
    }

    /**
    * get questions with user answers
    * @param exmaId: number
    * @param userId: number
    */
    getQuestionsWithUserAndCorrectAns = async (examId, userId) => {
        return await getManager()
            .createQueryBuilder(Question, 'question')
            .select('question.questionId', 'questionId')
            .addSelect('question.questionL1', 'questionL1')
            .addSelect('question.questionL2', 'questionL2')
            .addSelect('question.AL1', 'AL1')
            .addSelect('question.AL2', 'AL2')
            .addSelect('question.BL1', 'BL1')
            .addSelect('question.BL2', 'BL2')
            .addSelect('question.CL1', 'CL1')
            .addSelect('question.CL2', 'CL2')
            .addSelect('question.DL1', 'DL1')
            .addSelect('question.DL2', 'DL2')
            .addSelect('question.marks', 'marks')
            .addSelect('question.examId', 'examId')
            .addSelect('answer.userId', 'userId')
            .addSelect('answer.answerId', 'answerId')
            .addSelect('answer.userAnswer', 'userAnswer')
            .addSelect('question.correctAnswer', 'correctAnswer')
            .leftJoin(Answer, 'answer', 'answer.questionId = question.questionId AND answer.userId = :userId', { userId: userId })
            .where('question.examId = :examId', { examId: examId })
            .orderBy('question.questionId', 'ASC')
            .getRawMany();
    }

    /**
    * get exams
    * @param selectors: what all columns to select
    * @param identifiers: where condiction checks
    * @param limit: number
    * @param offset: number
    */
    getExams = async (selectors: string[], identifiers: object, limit: number, offset: number) => {
        // let params = {};
        // if (selectors.length > 0) {
        //     params['select'] = selectors;
        // }
        // if (Object.keys(identifiers).length > 0) {
        //     params['where'] = identifiers;
        // }
        // // console.log('getQuestions:params', params);
        // return await this.examRepository.find(params);
        return await getManager()
            .createQueryBuilder(Exam, 'exam')
            .select(selectors)
            .where(identifiers)
            .limit(limit)
            .offset(offset)
            .getRawMany();
    }

    /**
    * get single exam
    * @param selectors: what all columns to select
    * @param identifiers: where condiction checks
    */
    getExam = async (selectors: string[], identifiers: object) => {
        let params = {};
        if (selectors.length > 0) {
            params['select'] = selectors;
        }
        if (Object.keys(identifiers).length > 0) {
            params['where'] = identifiers;
        }
        // console.log('getQuestions:params', params);
        return await this.examRepository.findOne(params);
    }

    /**
     * upload questions
     * @param question[]
     */
    saveQuestions = async (questions: Question[]) => {
        await this.questionRepository.save(questions);
    }

    /**
     * update exam
     * @param examId, update attributes
     */
    // udpateExam = async (examId, attributes: object) => {
    //     let exam = await this.examRepository.findOne({
    //         where: { examId: examId }
    //     });
    //     for (const [key, value] of Object.entries(attributes)) {
    //         exam[key] = value;
    //     }
    //     await this.examRepository.save(exam);
    // }

    /**
     * mark questions uploaded
     * @param examId, updated: boolean
     */
    markQuestionsUploaded = async (examId, uploaded: boolean) => {
        let exam = await this.examRepository.findOne({
            where: { examId: examId }
        });
        exam.questionsUploaded = uploaded;
        await this.examRepository.save(exam);
    }

    /**
    * get institutes
    * @param selectors: what all columns to select
    * @param identifiers: where condiction checks
    */
    getInstitutes = async (selectors: string[], identifiers: object) => {
        let params = {};
        if (selectors.length > 0) {
            params['select'] = selectors;
        }
        if (Object.keys(identifiers).length > 0) {
            params['where'] = identifiers;
        }
        // console.log('getInstitutes:params', params);
        return await this.instituteRepository.find(params);
    }

    /**
    * get institute by instituteId
    * @param selectors: what all columns to select
    * @param identifiers: where condiction checks
    */
    getInstitute = async (selectors: string[], identifiers: object) => {
        let params = {};
        if (selectors.length > 0) {
            params['select'] = selectors;
        }
        if (Object.keys(identifiers).length > 0) {
            params['where'] = identifiers;
        }
        // console.log('getInstitute:params', params);
        return await this.instituteRepository.findOne(params);
    }

    /**
     * get active exams by institute id and check if user applied using userId
     * @param:  userId, instituteId
     */
    getActiveExams = async (userId, instituteId) => {
        return await getManager()
            .createQueryBuilder(Exam, 'exam')
            .select('exam.examId', 'examId')
            .addSelect('exam.title', 'title')
            .addSelect('exam.subtitle', 'subtitle')
            .addSelect('exam.description', 'description')
            .addSelect('exam.feeAmount', 'feeAmount')
            .addSelect('exam.currency', 'currency')
            .addSelect('exam.date', 'date')
            .addSelect('exam.startTime', 'startTime')
            .addSelect('exam.endTime', 'endTime')
            .addSelect('exam.questionsUploaded', 'questionsUploaded')
            .addSelect('payment.status', 'paymentStatus')
            .addSelect('payment.amount', 'amount')
            .addSelect('payment.paymentId', 'paymentId')
            .addSelect('payment.userId', 'userId')
            .leftJoin(Payment, 'payment', 'payment.examId = exam.examId AND payment.userId = '+userId+'')
            .andWhere('exam.instituteId = :instituteId', { instituteId: instituteId })
            .andWhere('exam.status  = "1"')
            .groupBy('exam.examId')
            .getRawMany();
    }

    /**
     * get exams by userId which user has enrolled
     * @param: userId, instituteId
     */
    getEnrolledExams = async (userId, instituteId) => {
        return await getManager()
            .createQueryBuilder(Exam, 'exam')
            .select('exam.examId', 'examId')
            .addSelect('exam.title', 'title')
            .addSelect('exam.subtitle', 'subtitle')
            .addSelect('exam.description', 'description')
            .addSelect('exam.feeAmount', 'feeAmount')
            .addSelect('exam.currency', 'currency')
            .addSelect('exam.date', 'date')
            .addSelect('exam.startTime', 'startTime')
            .addSelect('exam.endTime', 'endTime')
            .addSelect('exam.questionsUploaded', 'questionsUploaded')
            .addSelect('payment.status', 'paymentStatus')
            .addSelect('payment.amount', 'amount')
            .addSelect('payment.paymentId', 'paymentId')
            .addSelect('payment.userId', 'userId')
            .innerJoin(Payment, 'payment', 'payment.examId = exam.examId')
            .where('payment.userId = :userId', { userId: userId })
            .andWhere('exam.instituteId = :instituteId', { instituteId: instituteId })            
            .groupBy('exam.examId')
            .getRawMany();
    }

    /**
     * get exams result userId which user has enrolled
     * @param: userId, instituteId
     */
    getEnrolledExamsResult = async (instituteId= null, userId= null, examId= null) => {
        return await getManager()
            .createQueryBuilder(Answer, 'answer')
            .select('exam.examId', 'examId')
            .addSelect('exam.title', 'exam_title')
            .addSelect('exam.subtitle', 'exam_subtitle')
            .addSelect('user.fullName', 'student')
            .addSelect('user.mobile', 'mobile')
            .addSelect('institute.name', 'institute')
            .addSelect('exam.date', 'date')
            .addSelect('exam.startTime', 'startTime')
            .addSelect('exam.endTime', 'endTime')             
            .addSelect('user.userId', 'userId')             
            .addSelect('SUM(IF(answer.userAnswer = question.correctAnswer, 2,0))', 'marks_obtained')
            .addSelect('(select SUM(question.marks) from question where question.examId = answer.examId)', 'total_marks')
            .leftJoin(User, 'user', 'answer.userId = user.userId')
            .leftJoin(Exam, 'exam', 'answer.examId = exam.examId')
            .leftJoin(Institute, 'institute', 'exam.instituteId = institute.instituteId')
            .leftJoin(Question, 'question', 'answer.questionId = question.questionId')
            .where(instituteId ? `exam.instituteId = :instituteId` : '1=1', { instituteId: instituteId })   
            .andWhere(examId ? `exam.examId = :examId` : '1=1', { examId }) 
            .andWhere(userId ? `user.userId = :userId` : '1=1', { userId })             
            .groupBy('answer.userId')
            .addGroupBy('answer.examId')
            .orderBy('exam.examId')
            .getRawMany();
    }

    /**
     * get exam attempts count
     * @param examId number
     * @param userId number
     */
    getAttemptsCount = async (examId: number, userId: number) => {
        return this.examAttemptRepository.count({
            where: {
                examId: examId,
                userId: userId
            }
        });
    }

    /**
     * mark exam as attempted
     */
    markAsAttempted = async (examId: number, userId: number) => {
        const examAttempt = { examId: examId, userId: userId };
        return this.examAttemptRepository.save(examAttempt);
    }
    
    /** ==== scholarship starts ==== */
    /**
    * get scholarship
    * @param selectors: what all columns to select
    * @param identifiers: where condiction checks
    */
    getScholarship = async (selectors: string[], identifiers: object) => {
        if (selectors.length > 0) {
            return await this.scholarshipRepository.findOne({
                select: selectors,
                where: identifiers
            });
        }

        return await this.scholarshipRepository.findOne({
            where: identifiers
        });
    }

    /**
     * save scholarship details
     * @params Scholarship
     */
    saveScholarship = async (scholarship: Scholarship) => {
        return await this.scholarshipRepository.save(scholarship);
    }
    /** ==== scholarship ends ==== */
    
    /** ==== university starts ==== */
    /**
    * get university
    * @param selectors: what all columns to select
    * @param identifiers: where condiction checks
    */
    getUniversity = async (selectors: string[], identifiers: object) => {
        if (selectors.length > 0) {
            return await this.universityRepository.findOne({
                select: selectors,
                where: identifiers
            });
        }

        return await this.universityRepository.findOne({
            where: identifiers
        });
    }

    /**
     * save university details
     * @params University
     */
    saveUniversity = async (university: University) => {
        return await this.universityRepository.save(university);
    }
    /** ==== university ends ==== */

}

export default ExamService;
