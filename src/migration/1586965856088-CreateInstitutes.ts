import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import { Institute } from "../entity/Institute";

export class CreateInstitutes1586965856088 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        const instituteRepository = getRepository(Institute);

        const institute = new Institute();
        institute.name = "ExamIn";
        institute.title = "ExamIn";
        institute.uniqueName = "examin";
        institute.active = true;
        institute.onboarding = true;
        await instituteRepository.save(institute);

        const institute2 = new Institute();
        institute2.name = "Bright Life Foundation";
        institute2.title = "eScholarship 2020";
        institute2.uniqueName = "scholarship";
        institute2.active = true;
        institute2.onboarding = true;
        await instituteRepository.save(institute2);

        const institute3 = new Institute();
        institute3.name = "Maharishi Valmiki Sanskrit University";
        institute3.title = "Entrance Exam";
        institute3.uniqueName = "mvsu";
        institute3.active = true;
        institute3.onboarding = true;
        await instituteRepository.save(institute3);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
