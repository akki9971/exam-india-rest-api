import { Router } from 'express';

// controllers
import AuthController from '../controllers/AuthController';

// validators
import { checkJwt } from '../middlewares/checkJwt';
import UserValidator from '../middlewares/validators/UserValidator';

const router = Router();

// login route
router.post(
    '/login',
    AuthController.login
);

// forgot password (mobile), request OTP
router.post(
    '/forgot-password/mobile',
    AuthController.forgotPasswordMobile
);

// forgot password verify mobile
router.post(
    '/forgot-password/resend-otp',
    AuthController.forgotPasswordResendOtp
);

// forgot password verify mobile
router.post(
    '/forgot-password/verify/mobile',
    AuthController.forgotPasswordMobileVerify
);

// forgot password create password
router.post(
    '/forgot-password/new-password',
    AuthController.forgotPasswordNewPassword
);

// mobile verification route
router.post(
    '/verify/mobile',
    [
        UserValidator.checkUserId('body')
    ],
    AuthController.mobileVerify
);

// email verification route
router.post(
    '/verify/email',
    AuthController.emailVerify
);

// change password
router.post(
    '/change-password',
    [checkJwt],
    AuthController.changePassword
);

export default router;
