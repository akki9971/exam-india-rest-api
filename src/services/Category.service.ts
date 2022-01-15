import { getManager, getRepository } from 'typeorm';
import { Category } from '../entity/Category';


class CategoryService {

    private categoryRepository;
    private static instance: CategoryService;

    constructor() {
        this.categoryRepository = getRepository(Category);
    }

    public static getInstance(): CategoryService {
        if (!CategoryService.instance) {
            CategoryService.instance = new CategoryService();
        }
        return CategoryService.instance;
    }

    /**
    * get user details
    * @param selectors: what all columns to select
    * @param identifiers: where condiction checks
    */
    getCategoryDetails = async (selectors: string[], identifiers: object) => {
        if (selectors.length > 0) {
            return await this.categoryRepository.findOne({
                select: selectors,
                where: identifiers
            });
        }

        return await this.categoryRepository.findOne({
            where: identifiers
        });
    }

    /**
    * get users
    * @param selectors: what all columns to select
    * @param identifiers: where condiction checks
    * @param limit number
    * @param offset number
    */
    getCategories = async (selectors: string[], identifiers: object, limit: number, offset: number) => {

        return await getManager()
            .createQueryBuilder(Category, 'category')
            .select(selectors)
            .where(identifiers)
            .limit(limit)
            .offset(offset)
            .getRawMany();

    }

    /**
    * save user category
    * @param Category
    * @return boolean
    */
    save = async (category: Category) => {
        return await this.categoryRepository.save(category);
    }


    /**
    * save user category
    * @param Category
    * @return boolean
    */
    delete = async (category) => {
        return await this.categoryRepository.delete(category);
    }
}

export default CategoryService;
