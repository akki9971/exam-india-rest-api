import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Institute {
    @PrimaryGeneratedColumn()
    instituteId: number;

    @Column({ default: null })
    title: string;

    @Column({ default: null })
    name: string;

    @Column({ default: null })
    uniqueName: string;

    @Column({ default: null })
    description: string;

    @Column({ default: null })
    logo: string;

    @Column({ default: false })
    active: boolean;

    @Column({ default: true })
    onboarding: boolean;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}
