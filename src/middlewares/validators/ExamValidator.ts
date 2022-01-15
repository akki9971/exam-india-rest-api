import { Request, Response, NextFunction } from 'express';
import moment = require('moment');

// services
import ExamService from '../../services/Exam.service';
import PaymentService from '../../services/Payment.service';

class ExamValidator {

  /**
   * check if requested examId is valid
   * @param req, res
   */
  static checkExamId = async (req: Request, res: Response, next: NextFunction) => {
    const examId: number = req.params.examId || req.body.examId;
    const examService = ExamService.getInstance();

    const exam = await examService.getDetails(examId);

    if (!exam) {
      return res.status(401).json({
        status: 'error',
        message: 'Invalid exam id'
      });
    }

    // append exam details for further use
    req.body.exam = exam;

    // valid exam id, process further
    next();
  }

  /**
   * check if the logged in user has already conducted the exam
   * @param req, res
   */
  static checkExamGiven = async (req: Request, res: Response, next: NextFunction) => {

    // fetch the examId and userId from request
    const examId: number = req.params.examId || req.body.examId;
    const userId: number = req.params.userId || req.body.userId;
    const examService = ExamService.getInstance();

    const count = await examService.getAttemptsCount(examId, userId);

    const nextUrl = `/result/${examId}`;

    // if count means user has already given the exam
    if (count) {
      return res.status(401).json({
        status: 'error',
        message: 'You have already attempted this exam',
        nextUrl: nextUrl
      });
    }

    next();
  }

  /**
   * check if the logged in user has already conducted the exam
   * @param req, res
   */
  static checkExamNotGiven = async (req: Request, res: Response, next: NextFunction) => {

    // fetch the examId and userId from request
    const examId: number = req.params.examId || req.body.examId;
    const userId: number = (req.query.user) ? req.query.user : (req.params.userId || req.body.userId);
    const examService = ExamService.getInstance();

    const count = await examService.getAttemptsCount(examId, userId);

    // if count means user has already given the exam
    if (!count) {
      return res.status(401).json({
        status: 'error',
        message: 'You have not given this exam'
      });
    }

    next();
  }

  /**
   * check if the questions are uploaded for the exam
   * @param req, res
   */
  static checkQuestionsExist = async (req: Request, res: Response, next: NextFunction) => {

    const examId: number = req.params.examId || req.body.examId;
    const examService = ExamService.getInstance();

    const count = await examService.getQuestionsCount(examId);

    // if count means user has already given the exam
    if (!count) {
      return res.status(401).json({
        status: 'error',
        message: 'Exam question paper is pending'
      });
    }

    next();
  }

  /**
   * check if logged in user has paid for the exam fees
   */
  static checkPaymentStatus = async (req: Request, res: Response, next: NextFunction) => {

    // fetch the examId and userId from request
    const examId: number = req.params.examId || req.body.examId;
    const userId: number = req.params.userId || req.body.userId;
    const paymentService = PaymentService.getInstance();

    const payment = await paymentService.getPaymentDetails([], {
      userId: userId,
      examId: examId
    });

    // if count means user has already given the exam
    if (payment && payment.status === 'credit') {

      // append payment details for further use
      req.body.payment = payment;

      next();
    }

    return res.status(401).json({
      status: 'error',
      message: 'You have not paid the exam fees.'
    });
  }

  /**
   * Exam date validator
   * @param req 
   * @param res 
   * @param next 
   */
  static validateDate = async (req: Request, res: Response, next: NextFunction) => {
    const { date } = req.body;
    const isValid = moment(date, 'YYYY-MM-DD').isValid();
    if (!isValid) {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid date format!'
        });
    }
    next();
  }

  /**
   * Exam time validator
   * @param req 
   * @param res 
   * @param next 
   */
  static validateTime = async (req: Request, res: Response, next: NextFunction) => {
    const { startTime, endTime } = req.body;
    const st = startTime.split(':');
    const et = endTime.split(':');
    let isValid = true;
    if (parseInt(st[0]) > 24 || parseInt(st[0]) < 0 || parseInt(st[1]) > 60 || parseInt(st[1]) < 0) {
      isValid = false;
    }
    if (parseInt(et[0]) > 24 || parseInt(et[0]) < 0 || parseInt(et[1]) > 60 || parseInt(et[1]) < 0) {
      isValid = false;
    }
    if (!isValid) {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid time format!'
        });
    }
    next();
  }

}

export default ExamValidator;
