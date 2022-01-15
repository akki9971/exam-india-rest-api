
import { Request, Response } from "express";
import { Category } from '../entity/Category';
import HelperFunctions from '../helpers/HelperFunctions';
import CategoryService from '../services/Category.service';
import QuestionBankService from "../services/QuestionBank.service";

class CategoryController {

  static createCategory = async (req: Request, res: Response) => {
    let {
      name,
    } = req.body;

    let category = new Category();
    category.slug = HelperFunctions.slugify(name);
    category.name = name;

    const categoryService = CategoryService.getInstance();
    await categoryService.save(category);
    return res.status(201).json({
      message: 'Registration successful!',
      category: category
    });
  }

  /**
   * get category by categoryId
   */
  static getCategoryById = async (req: Request, res: Response) => {

    const categoryId = req.params.categoryId;

    // get category details
    const categoryService = CategoryService.getInstance();
    let category = await categoryService.getCategoryDetails([], { categoryId: categoryId });

    if (!category) {
      return res.status(404).json({
        status: 'error',
        message: 'Category not found'
      });
    }
    return res.status(200).json({
      status: 'success',
      category: category
    });
  };

  /**
   * udpate category by categoryId
   */
  static updateCategoryById = async (req: Request, res: Response) => {
    const categoryId = req.params.categoryId;
    const {
      name
    } = req.body;

    const categoryService = CategoryService.getInstance();
    const category = await categoryService.getCategoryDetails([], { categoryId: categoryId });

    if (!category) {
      return res.status(401).json({
        status: 'error',
        message: 'Category does not exist!'
      });
    }

    // update details
    category.slug = HelperFunctions.slugify(name);
    category.name = name;

    // save updated details
    const updatedCategory = categoryService.save(category);
    if (!updatedCategory) {
      return res.status(401).json({
        status: 'error',
        message: 'Unable to update category details!'
      });
    }


    //After all send a 204 (no content, but accepted) response
    return res.status(200).json({
      category: updatedCategory,
      message: 'Category updated successfully'
    });
  }


  /**
   * get the list of all categories except admin (moderator optional)
   */
  static getCategories = async (req: Request, res: Response) => {

    // fetch params
    const { limit, offset, } = req.query;

    // pagination params
    const pagination = { limit: 1000, offset: 0 };

    // update pagination attrs
    if (limit) { pagination.limit };
    if (offset) { pagination.offset };

    // where conditions
    let whereCondictions = {};

    const categoryService = CategoryService.getInstance();
    const categories: Category[] = await categoryService.getCategories(
      [],
      whereCondictions, limit, offset
    );
    if (!categories) {
      return res.status(400).json({
        status: 'error',
        message: 'Unable to get categories!'
      });
    }
    res.status(200).json({
      status: 'success',
      categories: categories
    });
  }

  static deleteCategory = async (req: Request, res: Response) => {
    const categoryId = req.params.categoryId;
    const categoryService = CategoryService.getInstance();
    const category = await categoryService.getCategoryDetails([], { categoryId: categoryId });

    if (!category) {
      return res.status(401).json({
        status: 'error',
        message: 'Category does not exist!'
      });
    }

    const questionService = QuestionBankService.getInstance();
    const questionCount = await questionService.getQuestionCountByCategory(category);
    if (questionCount > 0) {
      res.status(401).json({
        status: 'error',
        message: `Category ${category.name} associated with ${questionCount} question!`
      });
    } else {
      categoryService.delete(category);
      res.status(200).json({
        status: 'success',
        message: 'Category deleted!'
      });
    }
  };
};

export default CategoryController;
