import { Router } from 'express';
import config from '../config/config';
import QuestionBankController from '../controllers/QuestionBankController';
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRole';
import uploads from '../helpers/FileUploader';

const router = Router();

// get questions
router.get(
  '/',
  [
    checkJwt,
    checkRole([
      config.roles.admin,
      config.roles.moderator
    ])
  ],
  QuestionBankController.getQuestions
);

// create a new question
router.post(
  '/',
  [
    checkJwt,
    checkRole([config.roles.admin])
  ],
  QuestionBankController.addQuestion
);

// get question by id
router.get(
  '/:questionId([0-9]+)',
  [
    checkJwt,
    checkRole([
      config.roles.owner,
      config.roles.admin,
      config.roles.moderator
    ])
  ],
  QuestionBankController.getQuestionById
);

// edit question by id
router.post(
  '/:questionId([0-9]+)',
  [
    checkJwt,
    checkRole([config.roles.admin]),
  ],
  QuestionBankController.updateQuestionById
);


// delete question by id
router.delete(
  '/:questionId([0-9]+)',
  [
    checkJwt,
    checkRole([config.roles.admin])
  ],
  QuestionBankController.deleteQuestion
);

// upload questions
router.post(
  '/import',
  [
    checkJwt,
    checkRole([
      config.roles.admin,
      config.roles.moderator
    ])
  ],
  uploads.single('file'),
  QuestionBankController.importQuestions
);


export default router;