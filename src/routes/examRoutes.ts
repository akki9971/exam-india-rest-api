import { Router } from 'express';
import config from '../config/config';

// controllers
import ExamController from '../controllers/ExamController';

// middlewares
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRole';
import ExamValidator from '../middlewares/validators/ExamValidator';

// helpers
import uploads from '../helpers/FileUploader';
import PaymentValidator from '../middlewares/validators/PaymentValidator';
import InstituteValidator from '../middlewares/validators/InstituteValidator';
import UserValidator from '../middlewares/validators/UserValidator';

const router = Router();

// get all exams
router.get(
    '/',
    [
        checkJwt,
        // ExamValidator.checkQuestionsUploaded
    ],
    ExamController.getAll
);

// get all user exnrolled exams
router.get(
    '/enrolled',
    [
        checkJwt,
        UserValidator.checkUserId('params')
    ],
    ExamController.getEnrolled
);

// get all active exams
router.get(
    '/active',
    [
        checkJwt,
        UserValidator.checkUserId('params')
    ],
    ExamController.getActive
);

// check exam attempt by user
router.get(
    '/checkExamAttempt/:examId([0-9]+)/:userId([0-9]+)',
    [
        checkJwt,
        ExamValidator.checkExamId,
        ExamValidator.checkExamGiven
    ],
    function (req, res) {
        res.status(200).json({message: 'not attempted.'});
    }
);

// start exam by id
router.get(
    '/:examId([0-9]+)/start',
    [
        checkJwt,
        ExamValidator.checkExamId,
        ExamValidator.checkQuestionsExist,
        PaymentValidator.checkFeesPaid,
        ExamValidator.checkExamGiven
    ],
    ExamController.getQuestionsWithUserAns
);

// get exam by id
// TODO @abhijeet: allow only admin or students who has paidenrolled for this exam
router.get(
    '/:examId([0-9]+)/questions',
    [
        checkJwt,
        checkRole([
            config.roles.admin,
            config.roles.moderator,
        ])
    ],
    ExamController.getQuestions
);

// get exam by id
router.get(
    '/:examId([0-9]+)',
    [checkJwt],
    ExamController.getById
);

// create a new exam
router.post(
    '/create',
    [
        checkJwt,
        checkRole([
            config.roles.admin,
            config.roles.moderator
        ]),
        ExamValidator.validateDate,
        ExamValidator.validateTime,
        InstituteValidator.checkInstituteId
    ],
    ExamController.createExam
);

// edit exam
router.post(
    '/:examId([0-9]+)',
    [
        checkJwt,
        checkRole([
            config.roles.admin,
            config.roles.moderator
        ]),
        ExamValidator.validateDate,
        ExamValidator.validateTime,
        InstituteValidator.checkInstituteId
    ],
    ExamController.editExam
);

// upload questions
router.post(
    '/:examId([0-9]+)/questions',
    [
        checkJwt,
        checkRole([
            config.roles.admin,
            config.roles.moderator
        ])
    ],
    uploads.single('file'),
    ExamController.importQuestions
);

// save answers
router.post(
    '/:examId([0-9]+)/answers',
    [
        checkJwt,
        ExamValidator.checkExamId,
        ExamValidator.checkExamGiven,
        PaymentValidator.checkFeesPaid
    ],
    ExamController.saveAnswers
);

// save all answers
router.post(
    '/:examId([0-9]+)/finish',
    [
        checkJwt,
        ExamValidator.checkExamId,
        ExamValidator.checkExamGiven,
        PaymentValidator.checkFeesPaid
    ],
    ExamController.markAsAttempted
);

// get result
router.get(
    '/:examId([0-9]+)/result',
    [
        checkJwt,
        ExamValidator.checkExamId,
        ExamValidator.checkExamNotGiven
    ],
    // ExamController.getResult
    ExamController.getQuestionsWithUserAndCorrectAns
);

// get institutes
router.get(
    '/institutes',
    ExamController.getInstitutes
);

// get institute by id
router.get(
    '/institute/:instituteId',
    ExamController.getInstitute
);

/** ==== scholarship starts ==== */
// get scholarship by examId
router.get(
    '/:examId([0-9]+)/scholarship',
    [
        checkJwt,
        ExamValidator.checkExamId,
    ],
    ExamController.getScholarship
);

// save scholarship details
router.post(
    '/:examId([0-9]+)/scholarship',
    [
        checkJwt,
        ExamValidator.checkExamId,
    ],
    ExamController.saveScholarship
);
/** ==== scholarship ends ==== */

/** ==== university starts ==== */
// get university by examId
router.get(
    '/:examId([0-9]+)/university',
    [
        checkJwt,
        ExamValidator.checkExamId,
    ],
    ExamController.getUniversity
);

// save university details
router.post(
    '/:examId([0-9]+)/university',
    [
        checkJwt,
        ExamValidator.checkExamId,
    ],
    ExamController.saveUniversity
);

// get user attempted exam list with details
router.get(
    '/results',
    [
        checkJwt
    ],
    ExamController.getExamsResult
);
/** ==== university ends ==== */

export default router;
