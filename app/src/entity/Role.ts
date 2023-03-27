import {Entity, BaseEntity, Column, PrimaryGeneratedColumn} from "typeorm"
import {} from "./"

@Entity()
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({comment: 'роль', nullable: false})
    role!: string
}