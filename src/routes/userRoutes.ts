import { Router } from 'express';
import UserController from '../controllers/UserController';
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRole';
import config from '../config/config';
import UserValidator from '../middlewares/validators/UserValidator';
import InstituteValidator from '../middlewares/validators/InstituteValidator';

const router = Router();

// get users
router.get(
  '/',
  [
    checkJwt,
    checkRole([
      config.roles.admin,
      config.roles.moderator
    ])
  ],
  UserController.getUsers
);

// create a new user
router.post(
  '/',
  [
    UserValidator.checkMobileExist,
    UserValidator.checkEmailExist,
    InstituteValidator.checkInstituteId
  ],
  UserController.createUser
);

// get user by user id
router.get(
  '/:userId([0-9]+)',
  [
    checkJwt,
    checkRole([
      config.roles.owner,
      config.roles.admin,
      config.roles.moderator
    ])
  ],
  UserController.getUserByUserId
);

// edit user by id
router.patch(
  '/:userId([0-9]+)',
  [
    checkJwt,
    checkRole([config.roles.admin]),
    UserValidator.checkUserId('params')
  ],
  UserController.updateUserByUserId
);

// edit institute by user id
router.patch(
  '/:userId([0-9]+)/institute',
  [
    checkJwt,
    checkRole([config.roles.admin]),
    UserValidator.checkUserId('params'),
    InstituteValidator.checkInstituteId
  ],
  UserController.updateInstituteByUserId
);

// delete user by id
router.delete(
  '/:userId([0-9]+)',
  [checkJwt, checkRole([config.roles.admin])],
  UserController.deleteUser
);

router.get(
  '/pincode/:pincode([0-9]+)',
  [checkJwt, checkRole([config.roles.admin])],
  UserController.getAddressByPincode
);

export default router;