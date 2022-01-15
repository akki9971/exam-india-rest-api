import { getRepository, getManager } from 'typeorm';
import { Response } from 'express';
import * as Instamojo from 'instamojo-nodejs';
import * as Razorpay from 'razorpay';
import config from '../config/config';

import { Payment } from '../entity/Payment';
import { User } from '../entity/User';
import { Exam } from '../entity/Exam';
import { Institute } from '../entity/Institute';

class PaymentService {

    private paymentRepository;
    private static instance: PaymentService;
    private rzpExamIn: any;
    private rzpMVSU: any;

    constructor() {
        this.paymentRepository = getRepository(Payment);
        // this.initInstamojo();
        this.initRazorpay();
    }

    public static getInstance(): PaymentService {
        if (!PaymentService.instance) {
            PaymentService.instance = new PaymentService();
        }

        return PaymentService.instance;
    }

    /**
     * update the payment status
     */
    updatePaymentStatus = async (transaction: Payment) => {
        let payment = await this.paymentRepository.findOne({
            where: {
                requestId: transaction.requestId,
            }
        });
        payment.status = transaction.status;
        payment.gatewayPaymentId = transaction.gatewayPaymentId;
        payment.gatewaySignature = transaction.gatewaySignature;
        await this.paymentRepository.save(payment);
    }

    /**
     * initializing instamojo payment service
     */
    initInstamojo() {
        Instamojo.setKeys(
            process.env.INSTAMOJO_KEY,
            process.env.INSTAMOJO_SECRET
        );
        if (process.env.NODE_ENV.toLowerCase() === 'production') {
            Instamojo.isSandboxMode(false);
        } else {
            Instamojo.isSandboxMode(true);
        }
    }

    /**
     * initializing razorpay service
     */
    initRazorpay() {
        this.rzpExamIn = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_EXAMIN,
            key_secret: process.env.RAZORPAY_SECRET_EXAMIN,
        });

        this.rzpMVSU = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_MVSU,
            key_secret: process.env.RAZORPAY_SECRET_MVSU,
        });
    }

    /**
     * process payment
     * @params payload for payment
     */
    processPayment = async (payload: Payment) => {
        // console.log('processPayment');
        // if (config.paymentGateway.name === 'instamojo') {
        //     return await this.instamojoPay(payload, res);
        // }
    }

    /**
     * to make payment on instamojo
     * @param paymentInfo
     */
    instamojoPay = async (payment: Payment, res: Response) => {
        // console.log('instamojoPay');
        let instaPayload = new Instamojo.PaymentData();

        instaPayload.purpose = payment.purpose;
        instaPayload.amount = payment.amount;
        instaPayload.buyer_name = payment.buyer;
        instaPayload.email = payment.email;
        instaPayload.phone = payment.phone;
        instaPayload.currency = payment.currency;
        instaPayload.setRedirectUrl(`${config.apiBaseUrl}payment/instamojo/update`);
        // NOTE: webhook doesn't work with http://localhost
        instaPayload.setWebhook(`${config.apiBaseUrl}payment/instamojo/webhook`);

        Instamojo.createPayment(instaPayload, async function (error, response) {
            // console.log('Instamojo.createPayment');
            if (error) {
                console.log('error', error);
                if (typeof error === 'string') {
                    error = JSON.parse(error);
                }
                return error;
            } else {
                if (typeof response === 'string') {
                    response = JSON.parse(response);
                }

                if (
                    response['success'] &&
                    response['success'] === true
                ) {
                    const paymentRequest = response['payment_request'];

                    // update the instaPayload with response info
                    payment.requestId = paymentRequest.id;
                    payment.status = paymentRequest.status.toLowerCase();

                    res.redirect(paymentRequest.longurl);

                    // save the payment request details to the database
                    PaymentService.saveRequestDetails(payment);
                }

                return response;
            }
        });
    }

    /**
     * save payment request details
     * @param payment
     */
    static saveRequestDetails = async (transaction: Payment) => {
        const paymentRepository = getRepository(Payment);
        return await paymentRepository.save(transaction);
    }

    /**
     * save payment details
     * @param payment
     */
    savePaymentDetails = async (transaction: Payment) => {
        return await this.paymentRepository.save(transaction);
    }

    /**
    * get payment details
    * @param selectors: what all columns to select
    * @param identifiers: where condiction checks
    */
    getPaymentDetails = async (selectors: string[], identifiers: object) => {
        if (selectors.length > 0) {
            return await this.paymentRepository.findOne({
                select: selectors,
                where: identifiers
            });
        }

        return await this.paymentRepository.findOne({
            where: identifiers
        });
    }

    /**
     * razorpay create order
     * @param
     */
    razorPay = async (payment, instituteUniqueName, res: Response) => {
        const {
            currency,
            purpose
        } = payment;
        const receipt = new Date().valueOf();
        const payment_capture = true;
        const notes = purpose;
        let amount = Number(payment.amount) * 100; // amount in decimal i.e. Rs. 10 = 1000

        if (instituteUniqueName === 'mvsu') {
        
            return this.rzpMVSU.orders
                .create({ amount, currency, receipt, payment_capture, notes })
                .then((response) => {
                    // save the order to the database here
                    payment.requestId = response.id;
                    payment.status = response.status.toLowerCase();
                    PaymentService.saveRequestDetails(payment);

                    return res.status(200).json({
                        status: 'success',
                        data: response
                    });
                }).catch((error) => {
                    return res.status(401).json({
                        status: 'error',
                        error: error
                    });
                });

        } else {
        
            return this.rzpExamIn.orders
                .create({ amount, currency, receipt, payment_capture, notes })
                .then((response) => {
                    // save the order to the database here
                    payment.requestId = response.id;
                    payment.status = response.status.toLowerCase();
                    PaymentService.saveRequestDetails(payment);

                    return res.status(200).json({
                        status: 'success',
                        data: response
                    });
                }).catch((error) => {
                    return res.status(401).json({
                        status: 'error',
                        error: error
                    });
                });

        }
    }

    /**
    * get payments
    * @param selectors: what all columns to select
    * @param identifiers: where condiction checks
    * @param limit: number
    * @param offset: number
    */
    getPayments = async (selectors: string[], identifiers: object, limit: number, offset: number) => {
        return await getManager()
            .createQueryBuilder(Payment, 'payment')
            .select(selectors)
            .where(identifiers)
            .limit(limit)
            .offset(offset)
            .getRawMany();
    }

    /**
    * get user payments
    * @param limit: number
    * @param offset: number
    * @param instituteId: number
    */
    getUserPayments = async (limit: number, offset: number, instituteId: number) => {
        return await getManager()
            .createQueryBuilder(User, 'user')
            .select('payment.paymentId', 'paymentId')
            .addSelect('payment.userId', 'userId')
            .addSelect('payment.examId', 'examId')
            .addSelect('payment.examId', 'examId')
            .addSelect('payment.requestId', 'requestId')
            .addSelect('payment.amount', 'amount')
            .addSelect('payment.currency', 'currency')
            .addSelect('payment.status', 'status')
            .addSelect('payment.gatewayName', 'gatewayName')
            .addSelect('payment.createdAt', 'createdAt')
            .addSelect('user.fullName', 'fullName')
            .leftJoin(Payment, 'payment', 'payment.userId = user.userId')
            .leftJoin(Exam, 'exam', 'exam.examId = payment.examId')
            .leftJoin(Institute, 'institute', 'institute.instituteId = exam.instituteId')
            .where('payment.status = :status', { status: 'credit' })
            .andWhere('exam.instituteId = :instituteId', { instituteId: instituteId })
            .limit(limit)
            .offset(offset)
            .getRawMany();
    }

}

export default PaymentService;
