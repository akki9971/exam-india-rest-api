import { Router } from 'express';

import config from '../config/config';
import uploads from '../helpers/FileUploader';
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRole';
import FileController from '../controllers/FileController';
import UserValidator from '../middlewares/validators/UserValidator';

const router = Router();

// upload file route
router.post(
    '/picture/:userId([0-9]+)',
    [
        checkJwt,
        checkRole([config.roles.admin]),
        UserValidator.checkUserId('params')
    ],
    uploads.single('file'),
    FileController.saveProfileImage
);

//upload webcam screenshots
router.post(
    '/image/:userId([0-9]+)/:examId([0-9]+)',
    [
        checkJwt,
        checkRole([config.roles.admin]),
        UserValidator.checkUserId('params')
    ],
    uploads.single('file'),
    function (req, res) {
        res.status(200).json({message: 'screenshot captured.'});
    }
);

//upload webcam screenshots
router.get(
    '/image/:userId([0-9]+)/:examId([0-9]+)',
    [
        checkJwt,
        checkRole([config.roles.admin]),
        UserValidator.checkUserId('params')
    ],
    FileController.getUserExamScreenshots
);

export default router;
