import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, Unique, OneToOne } from 'typeorm';
import { Question } from './Question';

@Entity()

@Unique('examIdUserIdQuestionId', [
    'examId',
    'userId',
    'questionId'
])

export class Answer {
    @PrimaryGeneratedColumn()
    answerId: number;

    @Column({ default: null })
    examId: number;

    @Column({ default: null })
    userId: number;

    @Column({ default: null })
    questionId: number;

    @Column({ default: null })
    userAnswer: string;

    @OneToOne(
        type => Question,
        question => question.answerRel
    )
    questionRel: Question;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}
