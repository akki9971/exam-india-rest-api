import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import { User } from "../entity/User";
import config from "../config/config";

export class CreateAdminUser1581864853299 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        let user = new User();
        user.username = "examin";
        user.password = "bv=cyLkXE2eZz+G&";
        user.hashPassword();
        user.role = config.roles.admin;
        user.fullName = "ExamIn";
        user.mobile = "9000000000";
        user.mobileVerified = true;
        const userRepository = getRepository(User);
        await userRepository.save(user);
    }
    
    public async down(queryRunner: QueryRunner): Promise<any> { }

}
