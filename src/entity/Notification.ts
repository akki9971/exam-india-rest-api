import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Notification {
    @PrimaryGeneratedColumn()
    notificationId: number;

    @Column({ default: null })
    userId: number;

    @Column({ default: null })
    title: string;

    @Column({ default: null })
    body: string;

    @Column({ default: null })
    link: string;

    @Column({ default: null })
    type: string;

    @Column({ default: false })
    isRead: boolean;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
}
