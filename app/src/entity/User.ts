import {Entity, BaseEntity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({comment: 'роль', nullable: false})
    role!: string
}