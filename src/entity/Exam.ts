import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Question } from './Question';

@Entity()
export class Exam {
    @PrimaryGeneratedColumn()
    examId: number;

    @Column({ default: 0 })
    feeAmount: number;

    @Column({ default: 'INR' })
    currency: string;

    @Column({ default: null })
    title: string;
	
	@Column({ default: null })
    subtitle: string;

    @Column({ type: 'longtext', default: null })
    description: string;

    @Column({ default: false })
    instantResult: boolean;

    @Column({ default: false })
    webcamCapture: boolean;

    @Column({ default: false })
    isDemo: boolean;

    @Column({ default: true })
    status: boolean;

    @Column({ default: null })
    languageId: number;

    // @Column({ type: 'date', default: null })
    @Column({ default: null })
    date: string;

    // @Column({ type: 'time', default: null })
    @Column({ default: null })
    startTime: string;

    // @Column({ type: 'time', default: null })
    @Column({ default: null })
    endTime: string;

    @Column({ default: null })
    instituteId: number;

    @Column({ default: null })
    authorId: number;
  
    @Column({ default: false })
    questionsUploaded: boolean;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}
