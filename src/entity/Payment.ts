import { Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    paymentId: number;

    @Column({ default: null })
    userId: number;

    @Column({ default: null })
    examId: number;

    @Column({ default: null })
    status: string;

    @Column({ default: null })
    requestId: string;

    // in case of razor pay the amount is = fee * 100;
    @Column({ default: null })
    amount: number;

    @Column({ default: null })
    buyer: string;

    @Column({ default: null })
    phone: string;

    @Column({ default: null })
    email: string;

    @Column({ default: 'INR' })
    currency: string;

    @Column({ default: null })
    purpose: string;

    @Column({ default: null })
    gatewayName: string;

    @Column({ default: null })
    gatewaySignature: string;

    @Column({ default: null })
    gatewayPaymentId: string;

    @Column({ default: null })
    gatewayKey: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}
