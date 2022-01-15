import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class ExamAttempt {
    @PrimaryGeneratedColumn()
    examAttemptId: number;

    @Column({ default: null })
    examId: number;

    @Column({ default: null })
    userId: number;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}
