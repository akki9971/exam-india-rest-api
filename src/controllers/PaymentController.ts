import { Request, Response } from "express";
import config from "../config/config";

// entities
import { Payment } from "../entity/Payment";
import { Notification } from "../entity/Notification";

// services
import PaymentService from "../services/Payment.service";
import NotificationService from "../services/Notification.service";
import UserService from "../services/User.service";
import ExamService from "../services/Exam.service";

class PaymentController {

  /**
   * get all payments
   */
  static getPayments = async (req: Request, res: Response) => {
    // fetch params
    const { limit, offset, instituteId } = req.query;

    // pagination params
    const pagination = { limit: 12, offset: 0 };

    // update pagination attrs
    if (limit) { pagination.limit };
    if (offset) { pagination.offset };

    const paymentService = PaymentService.getInstance();
    const payments = await paymentService.getUserPayments(limit, offset, instituteId);
    
    if (!payments) {
      return res.status(400).json({
        status: 'error',
        message: 'Unable to get payments!'
      });
    }
    return res.status(200).json({
      status: 'success',
      payments: payments
    });
  }

  /**
   * initiate the payment
   * @params request, response
   */
  static initiate = async (req: Request, res: Response) => {

    const { gatewayName } = req.params;

    // fetch validated information
    const {
      userId,
      fullName,
      email,
      mobile
    } = req.body.user;

    const {
      examId,
      currency,
      feeAmount,
      instituteId
    } = req.body.exam;

    // payment service instance
    const paymentService = PaymentService.getInstance();

    // prepare data for payment
    const payment = new Payment();
    payment.userId = userId;
    payment.examId = examId;
    payment.amount = feeAmount;
    payment.purpose = 'Exam fees';
    payment.buyer = fullName;
    payment.email = email;
    payment.phone = mobile;
    payment.currency = currency;
    payment.gatewayName = config.paymentGateway.razorpay;

    // get institute
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

    // save the payment gateway key for ref
    if (institute.uniqueName === 'mvsu') {
      payment.gatewayKey = process.env.RAZORPAY_KEY_MVSU;
    } else {
      payment.gatewayKey = process.env.RAZORPAY_KEY_EXAMIN;
    }
    
    // start payment
    paymentService.razorPay(payment, institute.uniqueName, res);
  }

  /**
   * update the transaction details on payment gateway callback hook
   * @params req, res
   */
  static updateInstamojoTransaction = async (req: Request, res: Response) => {
    // get the payment details
    const {
      status,
      requestId,
      paymentId,
    } = req.body.payment;

    // prepare information to submit
    let transaction = new Payment();
    transaction.status = status;
    transaction.requestId = requestId;
    transaction.gatewayPaymentId = paymentId;

    const paymentService = PaymentService.getInstance();
    paymentService.updatePaymentStatus(transaction);

    if (transaction.status === 'credit') {
      const {
        userId,
        paymentId,
        amount,
        currency
      } = req.body.payment;

      let notification = new Notification();
      notification.userId = userId;
      notification.title = 'Congratulations!';
      notification.link = `/payment/${paymentId}`;
      // @abhijeet TODO: update copy
      notification.body = `You've successfully paid the exam fees of ${amount} ${currency}`;

      const notificationService = NotificationService.getInstance();
      notificationService.create(notification);

      return res.redirect(`${config.appBaseUrl}payment/${paymentId}?action=payment&status=success`);
    } else {
      return res.redirect(`${config.appBaseUrl}dashboard?action=payment&status=fail`);
    }
  }

  /**
   * update the transaction details on payment gateway callback hook
   * @params req, res
   */
  static updateRazorpayTransaction = async (req: Request, res: Response) => {
    // get the payment details
    const {
      requestId,
      paymentId,
      userId,
      amount,
      currency,
      gatewayPaymentId,
      gatewaySignature
    } = req.body.payment;

    // prepare information to submit
    let transaction = new Payment();
    transaction.status = 'credit';
    transaction.requestId = requestId;
    transaction.gatewayPaymentId = gatewayPaymentId;
    transaction.gatewaySignature = gatewaySignature;

    const paymentService = PaymentService.getInstance();
    paymentService.updatePaymentStatus(transaction);

    let notification = new Notification();
    notification.userId = userId;
    notification.title = 'Congratulations!';
    notification.link = `/payment/${paymentId}`;
    // @abhijeet TODO: update copy
    notification.body = `You've successfully paid the exam fees of ${amount} ${currency}`;

    const notificationService = NotificationService.getInstance();
    notificationService.create(notification);

    const payment = await paymentService.getPaymentDetails([], { requestId: requestId });
    
    return res.status(200).json({
      status: 'success',
      payment: payment
    });
  }

  /**
   * get payment details
   */
  static getPaymentDetails = async (req: Request, res: Response) => {
    const paymentId: number = req.params.paymentId || req.body.paymentId;
    const userId: number = req.params.userId || req.body.userId;
    const payment = req.body.payment;
    
    const userService = UserService.getInstance();
    const user = await userService.getUserDetails(
      ['userId', 'fullName', 'profileImage', 'gender', 'email', 'mobile', 'role'],
      { userId: userId }
    );
    
    const examService = ExamService.getInstance();
    const exam = await examService.getExam([],
      { examId: payment.examId }
    );

    let institute = {};

    if (exam) {
      institute = await examService.getInstitute([],
        { instituteId: exam.instituteId }
      );
      institute = {...institute};
    }

    if (payment && user) {
      return res.status(200).json({
        status: 'success',
        user: user,
        payment: payment,
        institute: institute
      });
    }

    return res.status(400).json({
      status: 'error',
      message: 'Something went wrong!'
    });
  }

  /**
   * create new payment record
   */
  static createPayment = async (req: Request, res: Response) => {
    // fetch params
    const { user, exam } = req.body;

    // prepare information to submit
    let transaction = new Payment();
    transaction.status = 'credit';
    transaction.purpose = 'Exam fees';

    // user details
    transaction.userId = user.userId;
    transaction.buyer = user.fullName;
    transaction.email = user.email;
    transaction.phone = user.mobile;

    // exam details
    transaction.examId = exam.examId;
    transaction.currency = exam.currency;
    transaction.amount = exam.feeAmount;

    const paymentService = PaymentService.getInstance();
    transaction = await paymentService.savePaymentDetails(transaction);

    let notification = new Notification();
    notification.userId = user.userId;
    notification.title = 'Congratulations!';
    notification.link = `/payment/${transaction.paymentId}`;
    // @abhijeet TODO: update copy
    notification.body = `You've successfully paid the exam fees of ${transaction.amount} ${transaction.currency}`;

    const notificationService = NotificationService.getInstance();
    notificationService.create(notification);

    return res.status(200).json({
      status: 'success',
      message: 'Marked as paid successfully!',
      payment: transaction
    });
  }

}

export default PaymentController;
