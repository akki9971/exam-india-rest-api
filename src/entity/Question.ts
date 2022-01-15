import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from 'typeorm';
// import { Option } from './Option';
import { Answer } from './Answer';

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    questionId: number;

    @Column({ default: null })
    examId: number;

    @Column({ default: null })
    questionL1: string;

    @Column({ default: null })
    questionL2: string;

    @Column({ default: null })
    AL1: string;

    @Column({ default: null })
    AL2: string;

    @Column({ default: null })
    BL1: string;

    @Column({ default: null })
    BL2: string;

    @Column({ default: null })
    CL1: string;

    @Column({ default: null })
    CL2: string;

    @Column({ default: null })
    DL1: string;

    @Column({ default: null })
    DL2: string;

    @Column({ default: null })
    correctAnswer: string;

    @Column({ default: null })
    marks: number;

    @OneToOne(
        type => Answer,
        answer => answer.questionRel
    )
    answerRel: Answer;

    // @OneToMany(type => Option, option => option.questionId)
    // options: Option[];
}
