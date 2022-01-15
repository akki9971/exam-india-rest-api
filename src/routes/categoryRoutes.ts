import { Router } from 'express';
import config from '../config/config';
import CategoryController from '../controllers/CategoryController';
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRole';

const router = Router();

// get categories
router.get(
  '/',
  [
    checkJwt,
    checkRole([
      config.roles.admin,
      config.roles.moderator
    ])
  ],
  CategoryController.getCategories
);

// create a new category
router.post(
  '/',
  [
    checkJwt,
    checkRole([
      config.roles.admin,
      config.roles.moderator
    ])
  ],
  CategoryController.createCategory
);

// get category by id
router.get(
  '/:categoryId([0-9]+)',
  [
    checkJwt,
    checkRole([
      config.roles.owner,
      config.roles.admin,
      config.roles.moderator
    ])
  ],
  CategoryController.getCategoryById
);

// edit category by id
router.post(
  '/:categoryId([0-9]+)',
  [
    checkJwt,
    checkRole([config.roles.admin]),
  ],
  CategoryController.updateCategoryById
);


// delete category by id
router.delete(
  '/:categoryId([0-9]+)',
  [
    checkJwt,
    checkRole([config.roles.admin])
  ],
  CategoryController.deleteCategory
);



export default router;