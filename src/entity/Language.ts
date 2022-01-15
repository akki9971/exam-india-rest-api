import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Length } from 'class-validator';

@Entity()
export class Language {
    @PrimaryGeneratedColumn()
    languageId: number;

    @Column({ default: null })
    @Length(20)
    language: string;
}
