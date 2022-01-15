import { getRepository } from 'typeorm';

// entities
import { Institute } from '../entity/Institute';

class InstituteService {

    private instituteRepository;
    private static instance: InstituteService;

    constructor() {
        this.instituteRepository = getRepository(Institute);
    }

    public static getInstance(): InstituteService {
        if (!InstituteService.instance) {
            InstituteService.instance = new InstituteService();
        }

        return InstituteService.instance;
    }

    /**
    * get institute details
    * @param selectors: what all columns to select
    * @param identifiers: where condiction checks
    */
    getInstituteDetails = async (selectors: string[], identifiers: object) => {
        if (selectors.length > 0) {
            return await this.instituteRepository.findOne({
                select: selectors,
                where: identifiers
            });
        }

        return await this.instituteRepository.findOne({
            where: identifiers
        });
    }
}

export default InstituteService;
