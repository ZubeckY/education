import {Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToMany, CreateDateColumn} from "typeorm"
import {User} from "./";
@Entity()
export class Dialog extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column ({comment: 'Приватность диалога'})
    dialogPrivacy?: string
    
    // Группа / ЛС
    @Column ({comment: 'Тип диалога'})
    dialogType?: string

    // Кто создал диалог (настройка)
    @ManyToMany (() => User)
    dialogOwner!: User

    //
    @ManyToMany (() => User)
    userList!: User

    @CreateDateColumn ({comment: 'Дата создания диалога'})
    created!: Date
}