import {Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToOne, ManyToMany} from "typeorm"
import {UserOptions, Role} from "./";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column ({comment: 'Имя'})
    name!: string

    @Column ({comment: "Фамилия"})
    secondName!: string

    @Column ({comment: "Отчество"})
    patronymic!: string

    @Column ({comment: "День рождения"})
    bd!: string

    @Column ({comment: "Телефон", nullable: true})
    phone?: number

    @Column ({comment: "Email"})
    email!: string

    @Column ({comment: "Пароль"})
    password!: string

    @Column ({comment: "Онлайн", default: false})
    online!: boolean

    @Column ({comment: "Активация", default: false})
    activate!: boolean

    @Column ({comment: "Бан", default: false})
    banStatus!: boolean

    @ManyToMany (() => Role)
    role!: Role

    @OneToOne (() => UserOptions)
    userOption!: UserOptions
}