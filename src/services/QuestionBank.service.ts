import { getManager, getRepository } from 'typeorm';
import { BankQuestion } from '../entity/BankQuestion';
import { Category } from '../entity/Category';


class QuestionBankService {

    private questionBankRepository;
    private static instance: QuestionBankService;

    constructor() {
        this.questionBankRepository = getRepository(BankQuestion);
    }

    public static getInstance(): QuestionBankService {
        if (!QuestionBankService.instance) {
            QuestionBankService.instance = new QuestionBankService();
        }
        return QuestionBankService.instance;
    }

    /**
    * get user details
    * @param selectors: what all columns to select
    * @param identifiers: where condiction checks
    */
    getQuestionDetails = async (selectors: string[], identifiers: object) => {
        if (selectors.length > 0) {
            return await this.questionBankRepository.findOne({
                select: selectors,
                where: identifiers,
                relations: ['category']
            });
        }

        return await this.questionBankRepository.findOne({
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
    getQuestions = async (selectors: string[], identifiers: object, limit: number, offset: number) => {

        return await getManager()
            .createQueryBuilder(BankQuestion, 'question')
            .select(selectors)
            .innerJoin("question.category", "category")
            .where(identifiers)
            .limit(limit)
            .offset(offset)
            .getRawMany();
    }

    /**
    * save user Question
    * @param Question
    * @return boolean
    */
    save = async (question: BankQuestion) => {
        return await this.questionBankRepository.save(question);
    }


    /**
    * save user Question
    * @param Question
    * @return boolean
    */
    delete = async (question) => {
        return await this.questionBankRepository.delete(question);
    }

    /**
    * upload questions
    * @param question[]
    */
    bulk_insert = async (questions: BankQuestion[]) => {
        await this.questionBankRepository.save(questions);
    }

    /**
    * upload questions
    * @param categoryId
    */
    getQuestionCountByCategory = async (category) => {
        return await this.questionBankRepository.count({ category: category });
    }
}

export default QuestionBankService;
