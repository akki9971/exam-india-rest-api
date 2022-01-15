import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Option {
    @PrimaryGeneratedColumn()
    optionId: number;

    @Column({ default: null })
    questionId: number;

    @Column({ default: null })
    optionNumber: number;

    @Column({ default: null })
    optionValue: number;
}
