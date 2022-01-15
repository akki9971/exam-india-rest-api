import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    categoryId: number;

    @Column()
    slug: string;

    @Column()
    name: string;

}
