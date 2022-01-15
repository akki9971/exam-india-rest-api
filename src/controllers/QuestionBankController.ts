
import { Request, Response } from "express";
import xlsx from 'node-xlsx';
import config from "../config/config";
import { BankQuestion } from '../entity/BankQuestion';
import { Category } from '../entity/Category';
import CategoryService from '../services/Category.service';
import QuestionBankService from '../services/QuestionBank.service';


class QuestionBankController {

    static addQuestion = async (req: Request, res: Response) => {
        let {
            categoryId: categoryId,
            user: user,
            questionL1: questionL1,
            questionL2: questionL2,
            AL1: AL1,
            AL2: AL2,
            BL1: BL1,
            BL2: BL2,
            CL1: CL1,
            CL2: CL2,
            DL1: DL1,
            DL2: DL2,
            correctAnswer: correctAnswer
        } = req.body;
        console.log(user)

        const categoryService = CategoryService.getInstance();
        const category = await categoryService.getCategoryDetails([], { categoryId: categoryId });

        if (!category) {
            return res.status(401).json({
                status: 'error',
                message: 'Category does not exist!'
            });
        }

        let question = new BankQuestion();
        question.category = category;
        question.userId = user.userId;
        question.questionL1 = questionL1;
        question.questionL2 = questionL2;
        question.AL1 = AL1;
        question.AL2 = AL2;
        question.BL1 = BL1;
        question.BL2 = BL2;
        question.CL1 = CL1;
        question.CL2 = CL2;
        question.DL1 = DL1;
        question.DL2 = DL2;
        question.correctAnswer = correctAnswer;


        const questionBankService = QuestionBankService.getInstance();
        await questionBankService.save(question);
        return res.status(201).json({
            message: 'Registration successful!',
            question: question
        });
    }

    /**
     * get question by questionId
     */
    static getQuestionById = async (req: Request, res: Response) => {

        const questionId = req.params.questionId;

        // get question details
        const questionBankService = QuestionBankService.getInstance();
        let question = await questionBankService.getQuestionDetails([], { questionId: questionId });

        if (!question) {
            return res.status(404).json({
                status: 'error',
                message: 'Question not found'
            });
        }
        return res.status(200).json({
            status: 'success',
            question: question
        });
    };

    /**
     * udpate question by questionId
     */
    static updateQuestionById = async (req: Request, res: Response) => {
        const questionId = req.params.questionId;
        const {
            categoryId: categoryId,
            user: user,
            questionL1: questionL1,
            questionL2: questionL2,
            AL1: AL1,
            AL2: AL2,
            BL1: BL1,
            BL2: BL2,
            CL1: CL1,
            CL2: CL2,
            DL1: DL1,
            DL2: DL2,
            correctAnswer: correctAnswer
        } = req.body;

        const questionBankService = QuestionBankService.getInstance();
        const question = await questionBankService.getQuestionDetails([], { questionId: questionId });

        if (!question) {
            return res.status(401).json({
                status: 'error',
                message: 'question does not exist!'
            });
        }

        const categoryService = CategoryService.getInstance();
        const category = await categoryService.getCategoryDetails([], { categoryId: categoryId });

        if (!category) {
            return res.status(401).json({
                status: 'error',
                message: 'Category does not exist!'
            });
        }

        // update details
        question.category = category;
        question.userId = user.userId;
        question.questionL1 = questionL1;
        question.questionL2 = questionL2;
        question.AL1 = AL1;
        question.AL2 = AL2;
        question.BL1 = BL1;
        question.BL2 = BL2;
        question.CL1 = CL1;
        question.CL2 = CL2;
        question.DL1 = DL1;
        question.DL2 = DL2;
        question.correctAnswer = correctAnswer;

        // save updated details
        const updatedQuestion = questionBankService.save(question);
        if (!updatedQuestion) {
            return res.status(401).json({
                status: 'error',
                message: 'Unable to update question details!'
            });
        }


        //After all send a 204 (no content, but accepted) response
        return res.status(200).json({
            question: updatedQuestion,
            message: 'Question updated successfully'
        });
    }


    /**
     * get the list of all questions except admin (moderator optional)
     */
    static getQuestions = async (req: Request, res: Response) => {

        // fetch params
        const { limit, offset, } = req.query;

        // pagination params
        const pagination = { limit: 1000, offset: 0 };

        // update pagination attrs
        if (limit) { pagination.limit };
        if (offset) { pagination.offset };

        // where conditions
        let whereCondictions = {};

        const questionBankService = QuestionBankService.getInstance();
        const questions: BankQuestion[] = await questionBankService.getQuestions(
            ['question.*', "category.*"],
            whereCondictions, limit, offset
        );
        if (!questions) {
            return res.status(400).json({
                status: 'error',
                message: 'Unable to get questions!'
            });
        }
        res.status(200).json({
            status: 'success',
            questions: questions
        });
    }

    static deleteQuestion = async (req: Request, res: Response) => {
        const questionId = req.params.questionId;
        const questionBankService = QuestionBankService.getInstance();
        const question = await questionBankService.getQuestionDetails([], { questionId: questionId });

        if (!question) {
            return res.status(401).json({
                status: 'error',
                message: 'question does not exist!'
            });
        }
        questionBankService.delete(question);

        res.status(200).json({
            status: 'success',
            message: 'Category deleted!'
        });
    };

    /**
     * import, process and save questions
     */
    static importQuestions = async (req: any, res: Response) => {
        const {
            categoryId: categoryId,
        } = req.body;
        const file = `${config.projectRoot}${req['file']['path']}`;
        const workSheetsFromBuffer = xlsx.parse(file);
        const rows = workSheetsFromBuffer[0].data;
        if (!rows) {
            return res.status(400).json({
                status: 'error',
                message: 'Unable to upload questions!'
            });
        }
        const questions: BankQuestion[] = [];
        rows.shift();
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            if ((row[0] === '' && row[1] === '') || row.length != 11) {
                continue; // skip if questions is empty
            }
            const question = new BankQuestion();
            question.category = categoryId;
            question.userId = req.params.userId;
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
            questions.push(question);
        }

        const questionBankService = QuestionBankService.getInstance();
        await questionBankService.bulk_insert(questions);

        return res.status(200).json({
            status: 'success'
        });
    }

};

export default QuestionBankController;
