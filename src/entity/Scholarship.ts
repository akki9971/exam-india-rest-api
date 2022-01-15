import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Scholarship {
    @PrimaryGeneratedColumn()
    scholarshipId: number;

    @Column({ default: null })
    examId: number;

    @Column({ default: null })
    userId: number;

    @Column({ default: null })
    schoolName: string;

    @Column({ default: null })
    schoolClass: string;

    @Column({ default: null })
    examMedium: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}
