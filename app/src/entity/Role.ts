import {Entity, BaseEntity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({comment: 'роль', nullable: false})
    role!: string
}