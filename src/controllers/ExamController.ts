import { Request, Response } from 'express';
import { validate } from 'class-validator';
import xlsx from 'node-xlsx';
import * as moment from 'moment';
import { getRepository } from 'typeorm';

// entities
import { Exam } from '../entity/Exam';
import { Answer } from '../entity/Answer';
import { Result } from '../entity/Result';
import { Address } from '../entity/Address';
import { Question } from '../entity/Question';
import { University } from '../entity/University';
import { Scholarship } from '../entity/Scholarship';

// services
import ExamService from '../services/Exam.service';
import UserService from '../services/User.service';
import PaymentService from '../services/Payment.service';

import config from "../config/config";
import HelperFunctions from '../helpers/HelperFunctions';

class ExamController {

    /**
     * get user result for specific exam
     */
    static getResult = async (req: any, res: Response) => {
        const examId: number = req.params.examId || req.body.examId;
        const userId: number = req.params.userId || req.body.userId;

        const examService = ExamService.getInstance();
        const answers = await examService.getResult(userId, examId);
        if (!answers) {
            return res.status(400).json({
                status: 'error',
                message: 'Unable to save answers!'
            });
        }

        return res.status(200).json({
            status: 'success',
            message: 'Your result is ready!',
            answers: answers
        });
    }

    /**
     * save user submitted answers
     */
    static saveAnswers = async (req: any, res: Response) => {
        const { userId } = req.params;
        let answers: Answer[] = req.body.answers;
        if (!answers) {
            return res.status(400).json({ status: 'error' });
        }

        // append user id to the answers
        answers = HelperFunctions.appendUserId(answers, userId);

        // save answers
        const examService = ExamService.getInstance();
        const saved = await examService.saveAnswers(answers);
        if (!saved) {
            return res.status(400).json({
                status: 'error',
                message: 'Unable to save answers!'
            });
        }

        const { examId } = req.params;

        const data = await examService.getResult(userId, examId);
        const result = await ExamController.generateResult(data);

        // setbind owner entities
        result.examId = examId;
        result.userId = userId;

        // save result
        await examService.saveResult(result);

        // check if instant result
        const instantResult = await examService.isInstantResult(examId);

        return res.status(200).json({
            status: 'success',
            instantResult: instantResult,
            message: 'Your answers are saved!'
        });
    }

    /**
     * mark as attempted
     */
    static markAsAttempted = async (req: any, res: Response) => {
        const { examId, userId } = req.params;
        const examService = ExamService.getInstance();
        await examService.markAsAttempted(examId, userId);

        // check if instant result
        const instantResult = await examService.isInstantResult(examId);

        return res.status(200).json({
            status: 'success',
            instantResult: instantResult,
            message: 'You have finished the exam!'
        });
    }

    /**
     * get user answers and questions, check for correct answers and return result
     * @params Answer[]
     * @returns Result
     */
    static generateResult = async (answers) => {
        const result = new Result();
        let correctAnswerCount = 0;
        let wrongAnswers = 0;
        for (let i = 0; i < answers.length; i++) {
            const userAnswer = answers[i].userAnswer.toString().toUpperCase();
            const correctAnswer = answers[i].correctAnswer.toString().toUpperCase();
            if (userAnswer === correctAnswer) {
                correctAnswerCount++;
            } else {
                wrongAnswers++;
            }
        }
        result.correctAnswers = correctAnswerCount;
        result.wrongAnswers = wrongAnswers;
        result.score = result.correctAnswers;
        result.marks = answers.length;
        return result;
    }

    /**
     * import, process and save questions
     */
    static importQuestions = async (req: any, res: Response) => {
        const { examId } = req.params;
        const file = `${config.projectRoot}${req['file']['path']}`;

        // reading the excel sheet
        const workSheetsFromBuffer = xlsx.parse(file);
        const rows = workSheetsFromBuffer[0].data;

        if (!rows) {
            return res.status(400).json({
                status: 'error',
                message: 'Unable to upload questions!'
            });
        }

        const questions: Question[] = [];
        rows.shift(); // removing title row

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            if (row[0] === '' && row[1] === '') {
                continue; // skip if questions is empty
            }
            const question = new Question();
            question.examId = examId;
            question.questionL1 = row[0];
            question.questionL2 = row[1];
            question.AL1 = row[2];
            question.AL2 = row[3];
            question.BL1 = row[4];
            question.BL2 = row[5];
            question.CL1 = row[6];
            question.CL2 = row[7];
            question.DL1 = row[8];
            question.DL2 = row[9];
            question.correctAnswer = row[10].toUpperCase();
            question.marks = row[11];
            questions.push(question);
        }

        const examService = ExamService.getInstance();
        await examService.saveQuestions(questions);

        // mark exam has uploaded the questions
        await examService.markQuestionsUploaded(examId, true);
        return res.status(200).json({
            status: 'success',
            questions: questions
        });
    }

    /**
     * cearte new exam
     */
    static createExam = async (req: Request, res: Response) => {
        const { userId } = req.params;
        const {
            title,
            subtitle,
            description,
            feeAmount,
            languageId,
            instantResult,
            date,
            startTime,
            endTime,
            institute,
            webcamCapture
        } = req.body;

        // console.log('date', dateFormatted);
        // const startTimestamp = moment(`${dateFormatted} ${startTime.hour}:${startTime.minute}:${startTime.second}`, 'mm/dd/yyyy h:i:s').unix();
        // console.log('startTimestamp', startTimestamp);
        // return;

        const exam = new Exam();
        exam.authorId = userId;
        exam.title = title;
        exam.subtitle = subtitle;
        exam.description = description;
        exam.feeAmount = Number(feeAmount);
        exam.languageId = languageId;
        exam.instantResult = Boolean(instantResult);
        exam.webcamCapture = Boolean(webcamCapture);
        exam.date = date;
        exam.startTime = startTime;
        exam.endTime = endTime;

        const errors = await validate(exam);
        if (errors.length > 0) {
            return res.status(400).send(errors);
        }

        const examService = ExamService.getInstance();
        exam.instituteId = institute.instituteId;

        const saved = await examService.saveExam(exam);
        if (!saved) {
            return res.status(400).json({
                status: 'error',
                message: 'Unable to save exam!'
            });
        }
        return res.status(200).json({
            status: 'success',
            message: 'Exam created'
        });
    }

    /**
     * get the list of all exams
     */
    static getAll = async (req: Request, res: Response) => {

        // fetch params
        const { limit, offset, instituteId } = req.query;

        // pagination params
        const pagination = { limit: 12, offset: 0 };

        // update pagination attrs
        if (limit) { pagination.limit };
        if (offset) { pagination.offset };

        // where conditions
        let whereCondictions = {};

        if (instituteId) {
            whereCondictions = { ...whereCondictions, instituteId: instituteId }
        };

        const examService = ExamService.getInstance();
        const exams = await examService.getExams(
            ['examId', 'title', 'description', 'feeAmount', 'currency', 'date', 'startTime', 'endTime', 'questionsUploaded'],
            whereCondictions, limit, offset
        );
        if (!exams) {
            return res.status(400).json({
                status: 'error',
                message: 'Unable to get exams!'
            });
        }
        return res.status(200).json({
            status: 'success',
            exams: exams
        });
    };

    /**
     * get the list of all user enrolled exams
     */
    static getEnrolled = async (req: Request, res: Response) => {

        // fetch params
        const { limit, offset, instituteId } = req.query;
        const { userId } = req.body.user;

        // check if valid instituteId
        const examService = ExamService.getInstance();
        const institute = await examService.getInstitute(
            ['name', 'title', 'uniqueName', 'instituteId'],
            { instituteId: instituteId, active: true }
        );
        if (!institute) {
            return res.status(400).json({
                status: 'error',
                message: 'Unable to get institute!'
            });
        }

        // pagination params
        const pagination = { limit: 12, offset: 0 };

        // update pagination attrs
        if (limit) { pagination.limit };
        if (offset) { pagination.offset };

        const exams = await examService.getEnrolledExams(userId, instituteId);
        if (!exams) {
            return res.status(400).json({
                status: 'error',
                message: 'Unable to get exams!'
            });
        }
        return res.status(200).json({
            status: 'success',
            exams: exams
        });
    };

    /**
     * get the list of all active exams
     */
    static getActive = async (req: Request, res: Response) => {

        // fetch params
        const { limit, offset, instituteId } = req.query;
        const { userId } = req.body.user;

        // check if valid instituteId
        const examService = ExamService.getInstance();
        const institute = await examService.getInstitute(
            ['name', 'title', 'uniqueName', 'instituteId'],
            { instituteId: instituteId, active: true }
        );
        if (!institute) {
            return res.status(400).json({
                status: 'error',
                message: 'Unable to get institute!'
            });
        }

        // pagination params
        const pagination = { limit: 12, offset: 0 };

        // update pagination attrs
        if (limit) { pagination.limit };
        if (offset) { pagination.offset };

        const exams = await examService.getActiveExams(userId, instituteId);
        if (!exams) {
            return res.status(400).json({
                status: 'error',
                message: 'Unable to get exams!'
            });
        }
        return res.status(200).json({
            status: 'success',
            exams: exams
        });
    };


    /**
     * get exam by examId
     */
    static getById = async (req: Request, res: Response) => {

        // fetch params from request
        const examId = req.params.examId;
        const userId = req.params.userId;

        // get exam details
        const examService = ExamService.getInstance();
        let exam = await examService.getExam(
            ['examId', 'title', 'subtitle', 'description', 'feeAmount', 'currency', 'date', 'startTime', 'endTime', 'questionsUploaded', 'instituteId', 'instantResult', 'isDemo', 'webcamCapture'],
            { examId: examId }
        );
        if (!exam) {
            return res.status(400).json({
                status: 'error',
                message: 'Unable to get exam!'
            });
        }

        // exam additional details
        exam = { ...exam, scholarship: false, university: false, institute: false, payment: false };
        
        // prepare datetime
        let dateTime = {};
        dateTime['startDateTime'] = HelperFunctions.getDateTime(exam, 'startTime');
        dateTime['endDateTime'] = HelperFunctions.getDateTime(exam, 'endTime');
        dateTime['currentTime'] = new Date().toLocaleString('en-gb', { timeZone :'Asia/Kolkata' });
        dateTime['isExamToday'] = moment(exam['date']).isSame(moment(), 'day');
        dateTime['isExamOver'] = moment().diff(exam['date'], 'days');
        exam.dateTime = dateTime;

        // get exam institute
        const examInstitute = await examService.getInstitute(
            ['instituteId', 'name', 'title', 'description', 'logo', 'uniqueName'],
            { instituteId: exam.instituteId }
        );
        if (examInstitute) {
            exam.institute = examInstitute;
        }
        // check if user has paid the exam fees
        const paymentService = PaymentService.getInstance();
        const payment = await paymentService.getPaymentDetails([], {
            userId: userId,
            examId: examId,
            status: 'credit'
        });
        if (payment) {
            exam.payment = payment;
        }

        // get scholarship details if already submitted
        const examScholarship = await examService.getScholarship(
            ['scholarshipId', 'userId', 'examId', 'schoolName', 'schoolClass', 'examMedium'],
            { userId: userId, examId: examId }
        );
        if (examScholarship) {
            exam.scholarship = examScholarship;
        }

        // get university details if already submitted
        const examUniversity = await examService.getUniversity(
            ['universityId', 'userId', 'examId'],
            { userId: userId, examId: examId }
        );
        if (examUniversity) {
            exam.university = examUniversity;
        }

        // get user details
        const userService = UserService.getInstance();
        let user = await userService.getUserDetails(
            ['userId', 'instituteId', 'fullName', 'dateOfBirth', 'gender', 'fathersName', 'mothersName', 'caste', 'religion', 'aadhaarNumber', 'mobile', 'email'],
            { userId: userId }
        );

        // user additional details
        user = { ...user, address: false, profileCompleted: false };

        // get user address
        let userAddress = await userService.getUserAddress(
            ['addressLine1', /*'addressLine2',*/ 'cityVillageTown', 'district', 'pincode', 'state', 'country'],
            { entityType: 'user', entityId: userId }
        );

        if (userAddress) {
            user.address = userAddress;
        }

        if ((!HelperFunctions.hasEmptyValues(user)) && (!HelperFunctions.hasEmptyValues(userAddress))) {
            user.profileCompleted = true;
        }

        return res.status(200).json({
            status: 'success',
            exam: exam,
            user: user
        });
    };

    static getQuestionsWithUserAns = async (req: Request, res: Response) => {

        // fetch the exam id from request
        const examId: number = req.params.examId;
        const userId: number = req.params.userId;

        const examService = ExamService.getInstance();
        const questions = await examService.getQuestionsWithUserAns(examId, userId);
        return res.status(200).json({
            status: 'success',
            questions: questions
        });
    }

    static getQuestionsWithUserAndCorrectAns = async (req: Request, res: Response) => {

        // fetch the exam id from request
        const examId: number = req.params.examId;
        const userId: number = (req.query.user)? req.query.user : req.params.userId;


        const examService = ExamService.getInstance();
        const questions = await examService.getQuestionsWithUserAndCorrectAns(examId, userId);
        return res.status(200).json({
            status: 'success',
            questions: questions
        });
    }

    static getQuestions = async (req: Request, res: Response) => {

        // fetch the exam id from request
        const examId: number = req.params.examId;

        const examService = ExamService.getInstance();
        const questions: Question[] = await examService.getQuestions(
            ['questionId', 'examId', 'questionL1', 'questionL2', 'AL1', 'AL2', 'BL1', 'BL2', 'CL1', 'CL2', 'DL1', 'DL2', 'marks'],
            { examId: examId }
        );

        return res.status(200).json({
            status: 'success',
            questions: questions
        });
    }

    /**
     * get all institutes
     */
    static getInstitutes = async (req: Request, res: Response) => {
        const examService = ExamService.getInstance();
        const institutes = await examService.getInstitutes(
            ['name', 'title', 'uniqueName', 'instituteId','onboarding'],
            { active: true }
        );
        if (!institutes) {
            return res.status(400).json({
                status: 'error',
                message: 'Unable to get institutes!'
            });
        }
        return res.status(200).json({
            status: 'success',
            institutes: institutes
        });
    }

    /**
     * get institute by id
     */
    static getInstitute = async (req: Request, res: Response) => {
        const { instituteId } = req.params;
        const examService = ExamService.getInstance();
        const institute = await examService.getInstitute(
            ['name', 'title', 'uniqueName', 'instituteId'],
            { instituteId: instituteId, active: true }
        );
        if (!institute) {
            return res.status(400).json({
                status: 'error',
                message: 'Unable to get institute!'
            });
        }
        return res.status(200).json({
            status: 'success',
            institute: institute
        });
    }

    /**
     * edit exam
     */
    static editExam = async (req: Request, res: Response) => {

        // fetch examId from requestbody
        const examId = req.params.examId;

        //fetch information
        const {
            title,
            subtitle,
            description,
            feeAmount,
            languageId,
            instantResult,
            date,
            startTime,
            endTime,
            institute,
            webcamCapture
        } = req.body;

        //Try to find exam on database
        const examRepository = getRepository(Exam);
        let exam;
        try {
            exam = await examRepository.findOneOrFail(examId);
        } catch (error) {
            res.status(404).send("Exam not found");
            return;
        }

        exam.title = title;
        exam.subtitle = subtitle;
        exam.description = description;
        exam.feeAmount = feeAmount;
        exam.instantResult = instantResult;
        exam.date = date;
        exam.startTime = startTime;
        exam.endTime = endTime;
        exam.institute = institute;
        exam.webcamCapture = webcamCapture;

        const examErrors = await validate(exam);
        if (examErrors.length > 0) {
            res.status(400).send(examErrors);
            return;
        }

        //save exam
        try {
            await examRepository.save(exam);
        } catch (e) {
            res.status(409).json({
                message: ""
            });
            return;
        }

        res.status(200).json({
            message: 'Exam updated successfully'
        });
    }

    /** ==== scholarship starts ==== */
    /**
     * get scholarship by userId
     */
    static getScholarship = async (req: Request, res: Response) => {
        const { userId } = req.params;
        const { examId } = req.body.exam;
        
        // get scholarship details
        const examService = ExamService.getInstance();
        const scholarship = await examService.getScholarship([], {
            userId: userId,
            examId: examId
        });
        if (!scholarship) {
            return res.status(400).json({
                status: 'error',
                message: 'Unable to get scholarship details!'
            });
        }

        const userService = UserService.getInstance();
        const address = await userService.getAddress([], {
            entityType: 'scholarship',
            entityId: scholarship.scholarshipId
        });

        if (address) {
            scholarship['address'] = address;
        } else {
            scholarship['address'] = {}; // required address key for frontend model
        }

        return res.status(200).json({
            status: 'success',
            scholarship: scholarship
        });
    }

    /**
     * udpate user scholarship related information
     */
    static saveScholarship = async (req: Request, res: Response) => {
      const { userId } = req.params;
      const { examId } = req.body.exam;
      const {
        schoolName,
        examMedium,
        schoolClass
      } = req.body;
  
      let scholarship: Scholarship;
  
      const examService = ExamService.getInstance();
      const scholarshipFound = await examService.getScholarship([], {
        userId: userId,
        examId: examId
      });
      if (scholarshipFound) {
        scholarship = scholarshipFound;
      } else {
        scholarship = new Scholarship();
        scholarship.userId = userId;
        scholarship.examId = examId;
      }
    
      // prepare to save
      scholarship.schoolName = schoolName;
      scholarship.examMedium = examMedium;
      scholarship.schoolClass = schoolClass;
  
      // to get scholarshipId
      scholarship = await examService.saveScholarship(scholarship);
  
      let address: Address;
  
      // check if address exist
      const userService = UserService.getInstance();
      const addressFound = await userService.getAddress([], {
        entityType: 'scholarship',
        entityId: scholarship.scholarshipId
      });
  
      if (addressFound) {
        address = addressFound;
      } else {
        address = new Address();
        address.entityType = 'scholarship';
        address.entityId = scholarship.scholarshipId;
      }
  
      const {
        addressLine1,
        addressLine2,
        cityVillageTown,
        state,
        district,
        pincode,
        country,
      } = req.body.address;
      
      address.addressLine1 = addressLine1;
      address.addressLine2 = addressLine2;
      address.cityVillageTown = cityVillageTown;
      address.state = state;
      address.district = district;
      address.pincode = pincode;
      address.country = country;
  
      address = await userService.saveAddress(address);
  
      // if all ok success response
      return res.status(200).json({
        status: 'success',
        message: 'Scholarship details saved successfully'
      });
      
    }
    
    /** ==== scholarship ends ==== */

    /** ==== university starts ==== */
    /**
     * get university by userId and examId
     */
    static getUniversity = async (req: Request, res: Response) => {
        const { userId } = req.params;
        const { examId } = req.body.exam;
        
        // get university details
        const examService = ExamService.getInstance();
        const university = await examService.getUniversity([], {
            userId: userId,
            examId: examId
        });
        if (!university) {
            return res.status(400).json({
                status: 'error',
                message: 'Unable to get university details!'
            });
        }

        return res.status(200).json({
            status: 'success',
            university: university
        });
    }

    /**
     * udpate user university related information
     */
    static saveUniversity = async (req: Request, res: Response) => {
      const { userId } = req.params;
      const { examId } = req.body.exam;
  
      let university: University;
  
      const examService = ExamService.getInstance();
      const universityFound = await examService.getUniversity([], {
        userId: userId,
        examId: examId
      });
      if (universityFound) {
        university = universityFound;
      } else {
        university = new University();
        university.userId = userId;
        university.examId = examId;
      }

      const {
        course,

        sscBoardName,
        sscPercentage,
        sscPassingYear,
        sscCertificateNumber,

        hscBoardName,
        hscPercentage,
        hscPassingYear,
        hscCertificateNumber,

        graduationBoardName,
        graduationPercentage,
        graduationPassingYear,
        graduationCertificateNumber,

        postGraduationBoardName,
        postGraduationPercentage,
        postGraduationPassingYear,
        postGraduationCertificateNumber,
        
      } = req.body;
    
      // prepare to save
      university.course = course;

      university.sscBoardName = sscBoardName;
      university.sscPercentage = sscPercentage;
      university.sscPassingYear = sscPassingYear;
      university.sscCertificateNumber = sscCertificateNumber;

      university.hscBoardName = hscBoardName;
      university.hscPercentage = hscPercentage;
      university.hscPassingYear = hscPassingYear;
      university.hscCertificateNumber = hscCertificateNumber;

      university.graduationBoardName = graduationBoardName;
      university.graduationPercentage = graduationPercentage;
      university.graduationPassingYear = graduationPassingYear;
      university.graduationCertificateNumber = graduationCertificateNumber;

      university.postGraduationBoardName = postGraduationBoardName;
      university.postGraduationPercentage = postGraduationPercentage;
      university.postGraduationPassingYear = postGraduationPassingYear;
      university.postGraduationCertificateNumber = postGraduationCertificateNumber;
  
      // to get universityId
      university = await examService.saveUniversity(university);

      // if all ok success response
      return res.status(200).json({
        status: 'success',
        message: 'University details saved successfully'
      });
      
    }
    
    /** ==== university ends ==== */

    /**
     * get exam result using user, institute,  new user
     */
    static getExamsResult = async (req:Request, res: Response) => {

        const { limit, offset, examId, instituteId, userId } = req.query;

        const examService = ExamService.getInstance();
        const examResult = await examService.getEnrolledExamsResult(instituteId,userId,examId);
        return res.status(200).json({
            status: 'success',
            examResult: examResult,
            message: 'Your exam result!'
        });
    }

}

export default ExamController;
