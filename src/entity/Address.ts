import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    addressId: number;

    @Column({ default: null })
    entityType: string;

    @Column({ default: null })
    entityId: number;

    @Column({ default: null })
    addressLine1: string;

    @Column({ default: null })
    addressLine2: string;

    // name of the city, village or town
    @Column({ default: null })
    cityVillageTown: string;

    @Column({ default: null })
    state: string;

    @Column({ default: null })
    district: string;

    @Column({ default: null })
    pincode: string;

    @Column({ default: 'India' })
    country: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}
