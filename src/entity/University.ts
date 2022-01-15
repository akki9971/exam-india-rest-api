import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class University {
    @PrimaryGeneratedColumn()
    universityId: number;

    @Column({ default: null })
    userId: number;

    @Column({ default: null })
    examId: number;

    @Column({ default: null })
    course: string;

    @Column({ default: null })
    sscPassingYear: string;

    @Column({ default: null })
    sscBoardName: string;

    @Column({ default: null })
    sscCertificateNumber: string;

    @Column({ default: null })
    sscPercentage: string;

    @Column({ default: null })
    hscPassingYear: string;

    @Column({ default: null })
    hscBoardName: string;

    @Column({ default: null })
    hscCertificateNumber: string;

    @Column({ default: null })
    hscPercentage: string;

    @Column({ default: null })
    graduationPassingYear: string;

    @Column({ default: null })
    graduationBoardName: string;

    @Column({ default: null })
    graduationCertificateNumber: string;

    @Column({ default: null })
    graduationPercentage: string;

    @Column({ default: null })
    postGraduationPassingYear: string;

    @Column({ default: null })
    postGraduationBoardName: string;

    @Column({ default: null })
    postGraduationCertificateNumber: string;

    @Column({ default: null })
    postGraduationPercentage: string;
}
