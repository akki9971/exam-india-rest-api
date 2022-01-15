import { Router } from 'express';
import { checkJwt } from '../middlewares/checkJwt';

import NotificationController from '../controllers/NotificationController';

const router = Router();

// get all notifications
router.get(
  '/',
  [checkJwt],
  NotificationController.getAll
);

// mark notifications read
router.post(
  '/read',
  [
    checkJwt
    // TODO @abhijeetwebdev: add check if user belongs to these notifications
  ],
  NotificationController.markAsRead
);

export default router;