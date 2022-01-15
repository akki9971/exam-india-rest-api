import { Request, Response, NextFunction } from 'express';

// services
import PaymentService from '../../services/Payment.service';

class PaymentValidator {

  /**
   * validate payment update request
   * @param req, res, next
   */
  static validateInstamojoTransaction = async (req: Request, res: Response, next: NextFunction) => {
    const paymentId = req.query.payment_id;
    const requestId = req.query.payment_request_id;
    const status = req.query.payment_status;

    // check if required info is available
    if (!paymentId || !requestId || !status) {
      return res.status(400).json({ message: 'Bad request' });
    }

    const paymentService = PaymentService.getInstance();

    const payment = await paymentService.getPaymentDetails([], { requestId: requestId });

    if (!payment) {
      return res.status(401).json({
        status: 'error',
        message: 'Invalid request'
      });
    }

    // append payment details for further use
    req.body.payment = payment;
    req.body.payment.status = status.toString().toLowerCase();
    req.body.payment.requestId = requestId;
    req.body.payment.paymentId = paymentId;

    next();
  }

  /**
   * validate payment update request
   * @param req, res, next
   */
  static validateRazorpayTransaction = async (req: Request, res: Response, next: NextFunction) => {
    const gatewayPaymentId = req.body.razorpay_payment_id;
    const requestId = req.body.razorpay_order_id;
    const gatewaySignature = req.body.razorpay_signature;

    // check if required info is available
    if (!gatewayPaymentId || !requestId || !gatewaySignature) {
      return res.status(400).json({ message: 'Bad request' });
    }

    const paymentService = PaymentService.getInstance();

    const payment = await paymentService.getPaymentDetails([], { requestId: requestId });

    if (!payment) {
      return res.status(401).json({
        status: 'error',
        message: 'Invalid request'
      });
    }

    // append payment details for further use
    req.body.payment = payment;
    req.body.payment.requestId = requestId;
    req.body.payment.gatewayPaymentId = gatewayPaymentId;
    req.body.payment.gatewaySignature = gatewaySignature;

    next();
  }

  /**
   * check if exam fee has not been paid
   */
  static checkFeesNotPaid = async (req: Request, res: Response, next: NextFunction) => {
    const userId: number = req.params.userId || req.body.userId;
    const examId: number = req.params.examId || req.body.examId;

    const paymentService = PaymentService.getInstance();

    const payment = await paymentService.getPaymentDetails([], {
      userId: userId,
      examId: examId,
      status: 'credit'
    });

    if (payment) {
      return res.status(401).json({
        status: 'error',
        message: 'You have already paid the exam fees.'
      });
    }

    req.body.payment = payment;
    next();
  }

  /**
   * check if exam fee has already been paid
   */
  static checkFeesPaid = async (req: Request, res: Response, next: NextFunction) => {
    
    // skip payment check for demo exam
    if (req.body.exam && (req.body.exam.isDemo === true || req.body.exam.feeAmount === 0)) {
      return next();
    }
    
    const userId: number = req.params.userId || req.body.userId;
    const examId: number = req.params.examId || req.body.examId;

    const paymentService = PaymentService.getInstance();

    const payment = await paymentService.getPaymentDetails([], {
      userId: userId,
      examId: examId,
      status: 'credit'
    });

    if (!payment) {
      return res.status(401).json({
        status: 'error',
        message: 'You have not paid the exam fees.'
      });
    }

    req.body.payment = payment;
    next();
  }

  static checkOwnership = async (req: Request, res: Response, next: NextFunction) => {

  }

  /**
   * check if requested paymentId is valid
   * @param req, res
   */
  static checkPaymentId = async (req: Request, res: Response, next: NextFunction) => {
    const paymentId: number = req.params.paymentId || req.body.paymentId;
    
    const paymentService = PaymentService.getInstance();
    const payment = await paymentService.getPaymentDetails(
      ['paymentId', 'userId', 'examId', 'amount', 'currency', 'status', 'createdAt'],
      { paymentId: paymentId }
    );

    if (!payment) {
      return res.status(401).json({
        status: 'error',
        message: 'Invalid payment id'
      });
    }

    // append payment details for further use
    req.body.payment = payment;

    // valid payment id, process further
    next();
  }

}

export default PaymentValidator;
