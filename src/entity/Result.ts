import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

@Entity()
export class Result {
    @PrimaryGeneratedColumn()
    resultId: number;

    @Column({ default: 0 })
    userId: number;

    @Column({ default: 0 })
    examId: number;

    @Column({ default: 0 })
    correctAnswers: number;

    @Column({ default: 0 })
    wrongAnswers: number;

    @Column({ default: 0 })
    score: number;

    @Column({ default: 0 })
    marks: number;

}
