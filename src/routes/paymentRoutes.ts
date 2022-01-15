import { Router } from 'express';
import config from '../config/config';

// controllers
import PaymentController from '../controllers/PaymentController';

// middlewares
import ExamValidator from '../middlewares/validators/ExamValidator';
import UserValidator from '../middlewares/validators/UserValidator';
import PaymentValidator from '../middlewares/validators/PaymentValidator';
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRole';

const router = Router();

// get all payments
router.get(
  '/',
  [
    checkJwt,
    checkRole([
      config.roles.admin,
      config.roles.moderator
    ])
  ],
  PaymentController.getPayments
);

// get payment details by id
router.get(
    '/:paymentId([0-9]+)',
    [
        checkJwt,
        PaymentValidator.checkPaymentId
        // TODO @abhijeet: add check if the person is owner
    ],
    PaymentController.getPaymentDetails
);

/**
 * route to initiate the payment
 */
router.post('/:gatewayName/initiate',
    [
        ExamValidator.checkExamId,
        UserValidator.checkUserId('body'),
        PaymentValidator.checkFeesNotPaid
    ],
    PaymentController.initiate
);

/**
 * instamojo 
 */
router.post('/instamojo/update',
    [
        PaymentValidator.validateInstamojoTransaction,
    ],
    PaymentController.updateInstamojoTransaction
);

/**
 * razorpay 
 */
router.post('/razorpay/update',
    [
        PaymentValidator.validateRazorpayTransaction,
    ],
    PaymentController.updateRazorpayTransaction
);

// router.post('/instamojo/webhook', PaymentController.instamojoPaymentDetails);

// create payment record (provision for admin)
router.post(
    '/create',
    [
        checkJwt,
        checkRole([
            config.roles.admin
        ]),
        UserValidator.checkUserId('body'),
        ExamValidator.checkExamId
    ],
    PaymentController.createPayment
);

export default router;
