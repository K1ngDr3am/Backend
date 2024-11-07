import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cars {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    type!: string;

    @Column("text")
    description!: string;

    @Column("decimal")
    price!: number;
}