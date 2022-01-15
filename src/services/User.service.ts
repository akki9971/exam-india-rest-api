import { getRepository, getManager } from 'typeorm';

// entities
import { User } from '../entity/User';
import { Address } from '../entity/Address';
import { Institute } from '../entity/Institute';
import { Payment } from '../entity/Payment';

class UserService {

    private userRepository;
    private addressRepository;
    private static instance: UserService;

    constructor() {
        this.userRepository = getRepository(User);
        this.addressRepository = getRepository(Address);
    }

    public static getInstance(): UserService {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }

        return UserService.instance;
    }

    /**
    * get user details
    * @param selectors: what all columns to select
    * @param identifiers: where condiction checks
    */
    getUserDetails = async (selectors: string[], identifiers: object) => {
        if (selectors.length > 0) {
            return await this.userRepository.findOne({
                select: selectors,
                where: identifiers
            });
        }

        return await this.userRepository.findOne({
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
    getUsers = async (selectors: string[], identifiers: object, limit: number, offset: number) => {
        // let params = {};
        // if (selectors.length > 0) {
        //     params['select'] = selectors;
        // }
        // if (Object.keys(identifiers).length > 0) {
        //     params['where'] = identifiers;
        // }
        // // console.log('getQuestions:params', params);
        // return await this.userRepository.find(params);

        if (Object.keys(identifiers).length > 0 && identifiers['examId']) {
            let examId = identifiers['examId'];
            let instituteId = identifiers['instituteId'];
            return await getManager().query(this.__get_query(identifiers, instituteId, examId));
        } else {
            return await getManager()
                .createQueryBuilder(User, 'user')
                .select(selectors)
                .where(identifiers)
                .leftJoin(Address,"address","address.entityId=user.userId")
                // .limit(limit)
                .groupBy('user.userId')
                .offset(offset)
                .getRawMany();
        }
    }

    __get_query(identifiers, instituteId, examId) {
        let query = ''
        if (identifiers['payment_status'] == 'paid') {
            query = `
                SELECT * FROM payment as a
                    inner join 
                        (select userId,examId, max(paymentId) as un_record 
                         from payment where examId = ${examId} group by userId ) as b on
                        a.userId = b.userId
                        and a.paymentId = b.un_record and status='credit'               
                inner join user on a.userId = user.userId 
                left join address on address.entityId = user.userId
                where user.instituteId = ${instituteId} and a.examId = ${examId} group by user.userId`
        } else if (identifiers['payment_status'] == 'unpaid') {
            query = `
                SELECT * FROM payment as a
                    inner join 
                        (select userId,examId, max(paymentId) as un_record 
                         from payment where examId = ${examId} group by userId ) as b on
                        a.userId = b.userId
                        and a.paymentId = b.un_record and status !='credit'                   
                inner join user on a.userId = user.userId 
                left join address on address.entityId = user.userId
                where user.instituteId = ${instituteId} and a.examId = ${examId} group by user.userId`
        } else {
            if (examId > 0) {
                query = `
                SELECT * FROM payment as a
                    inner join 
                        (select userId,examId, max(paymentId) as un_record 
                         from payment where examId = ${examId} group by userId ) as b on
                        a.userId = b.userId
                        and a.paymentId = b.un_record                        
                left join user on a.userId = user.userId 
                left join address on address.entityId = user.userId
                where user.instituteId = ${instituteId} and a.examId = ${examId} group by user.userId`
            }else{
                query = `
                select * from user left join address on address.entityId = user.userId
                    where userId not in (
                    SELECT a.userid FROM payment as a inner join 
                        (select userId,examId, max(paymentId) as un_record from payment where examId in (
                            select examId from exam where instituteId=${instituteId}
                        ) group by userId ) as b 
                        on a.userId = b.userId and a.paymentId = b.un_record) 
                    and user.instituteId = ${instituteId} and role!='admin' group by user.userId`   
            }
        }
        if (identifiers['registerd_from']) {
            query += ` and user.createdAt >= '${identifiers['registerd_from']}' `
        }
        if (identifiers['registerd_to']) {
            query += ` and user.createdAt < '${identifiers['registerd_to']}' `
        }
        return query;
    }



    /**
     * check if mobile number already exist
     */
    mobileExist = async (mobile: string) => {
        return await this.userRepository.count({ mobile: mobile });
    }

    /**
    * save user details
    * @param User
    * @return boolean
    */
    save = async (user: User) => {
        return await this.userRepository.save(user);
    }

    /**
     * mark mobile verified
     * @param userId, updated: boolean
     */
    markMobileVerified = async (userId, verified: boolean) => {
        let user = await this.userRepository.findOne({
            where: { userId: userId }
        });
        user.mobileVerified = verified;
        await this.userRepository.save(user);
    }

    /**
    * get address
    * @param selectors: what all columns to select
    * @param identifiers: where condiction checks
    */
    getAddress = async (selectors: string[], identifiers: object) => {
        if (selectors.length > 0) {
            return await this.addressRepository.findOne({
                select: selectors,
                where: identifiers
            });
        }

        return await this.addressRepository.findOne({
            where: identifiers
        });
    }

    /**
     * save address
     * @params Address
     * @returns Address
     */
    saveAddress = async (address: Address) => {
        return await this.addressRepository.save(address);
    }

    /**
    * get user institute details
    * @param userId
    */
    getUserInstitute = async (userId: number) => {
        return await getManager()
            .createQueryBuilder(User, 'user')
            .select('user.userId', 'userId')
            .addSelect('institute.name', 'name')
            .addSelect('institute.title', 'title')
            .addSelect('institute.uniqueName', 'uniqueName')
            .innerJoin(Institute, 'institute', 'user.instituteId = institute.instituteId')
            .where('user.userId = :userId', { userId: userId })
            .getRawOne();
    }

    /**
    * get user address
    * @param selectors: what all columns to select
    * @param identifiers: where condiction checks
    */
    getUserAddress = async (selectors: string[], identifiers: object) => {
        if (selectors.length > 0) {
            return await this.addressRepository.findOne({
                select: selectors,
                where: identifiers
            });
        }

        return await this.addressRepository.findOne({
            where: identifiers
        });
    }
}

export default UserService;
