import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './Category';


@Entity()
export class BankQuestion {

    @PrimaryGeneratedColumn()
    questionId: number;

    @ManyToOne(() => Category, { eager: true })
    @JoinColumn({ name: "categoryId" })
    category: Category;

    @Column()
    userId: number;

    @Column({
        default: null,
        charset: 'utf8',
        collation: 'utf8_general_ci',
    })
    questionL1: string;

    @Column({
        default: null,
        charset: 'utf8',
        collation: 'utf8_general_ci',
    })
    questionL2: string;

    @Column({
        default: null,
        charset: 'utf8',
        collation: 'utf8_general_ci',
    })
    AL1: string;

    @Column({
        default: null,
        charset: 'utf8',
        collation: 'utf8_general_ci',
    })
    AL2: string;

    @Column({
        default: null,
        charset: 'utf8',
        collation: 'utf8_general_ci',
    })
    BL1: string;

    @Column({
        default: null,
        charset: 'utf8',
        collation: 'utf8_general_ci',
    })
    BL2: string;

    @Column({
        default: null,
        charset: 'utf8',
        collation: 'utf8_general_ci',
    })
    CL1: string;

    @Column({
        default: null,
        charset: 'utf8',
        collation: 'utf8_general_ci'
    })
    CL2: string;

    @Column({
        default: null,
        charset: 'utf8',
        collation: 'utf8_general_ci',
    })
    DL1: string;

    @Column({
        default: null,
        charset: 'utf8',
        collation: 'utf8_general_ci',
    })
    DL2: string;

    @Column({ default: null })
    correctAnswer: string;
}
