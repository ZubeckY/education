import {Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToMany, CreateDateColumn} from "typeorm"
import {User} from "./"

@Entity()
export class Statistic extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToMany(() => User)
    user?: User

    @Column("json")
    public values?: { [key: string]: any }

    @CreateDateColumn()
    created!: Date
}