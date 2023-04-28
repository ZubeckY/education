import {Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToMany, CreateDateColumn} from "typeorm"
import {DialogBranch, User} from "./";
@Entity()
export class DialogItem extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToMany (() => DialogBranch)
    dialogBranch!: DialogBranch

    @ManyToMany (() => User)
    messageFrom!: User

    @ManyToMany (() => User)
    messageTo!: User

    @Column({comment: 'Сообщение'})
    message?: string

    @Column({comment: 'Изображения'})
    img?: string

    @Column({comment: 'Аудио'})
    audio?: string

    @Column({comment: 'Файл'})
    file?: string

    @CreateDateColumn ()
    created!: Date
}