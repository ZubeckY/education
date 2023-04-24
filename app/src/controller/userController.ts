import {Request, Response} from "express"
import bcrypt from "bcrypt"
import {InjectRepository} from "typeorm-typedi-extensions"
import {Repository} from "typeorm"
import {Role, User, UserOptions} from "../entity"
import cryptr from "../cryptr"
import mailService from "../service/mail-service"

class UserController {
    @InjectRepository(Role)
    private userRepository!: Repository<User>

    @InjectRepository(Role)
    private roleRepository!: Repository<Role>

    async userList (req: Request, res: Response) {
        try {
            return this.userRepository.find()
        } catch (e: any) {
            return res.send ({
                message: e.message
            })
        }
    }

    async userLogin (req: Request, res: Response) {
        try {
            // Получаем данные с запроса
            const {data} = req.query
            const user = JSON.parse(cryptr.decryptData(data))

            // Получаем пользователя с БД
            const userFromDB = await this.userRepository.findOne ({
                where: {
                    email: user.email
                }
            })

            // Если пользователь не найден, сообщаем что что-то вбито не правильно!
            if (!userFromDB) {
                return res.send ({
                    message: 'Не верный email или пароль'
                })
            }

            // Проверяем пароль на правильность
            const isPassEquals = await bcrypt.compare (user.password, userFromDB.password);
            if (!isPassEquals) {
                return res.send ({
                    message: 'Не верный email или пароль'
                })
            }

            // Проверяем на активацию
            if (!userFromDB.activate) {
                return res.send ({
                    message: 'Вы ещё не подтвердили эл. почту'
                })
            }

            // Если всё гуд, логинизируем!
            return res.send ({
                user: userFromDB
            })
        } catch (e) {
            return res.send ({

            })
        }
    }

    async userReg (req: Request, res: Response) {
        try {
            // Получаем данные с запроса
            const {data} = req.query
            const user = JSON.parse(cryptr.decryptData(data))

            // Получаем пользователя с БД
            const userFromDB = await this.userRepository.findOne ({
                where: {
                    email: user.email
                }
            })

            // Если найден, отправляем, что уже такой есть
            if (userFromDB) {
                return res.send ({
                    message: 'Ошибка! Пользователь с такими данными уже есть!'
                })
            }

            // Ищем роль, чтоб поставить как дэфолт, иначе он не пройдет
            const role = await this.roleRepository.findOne ({
                where: {
                    role: 'user'
                }
            })

            if (!role) {
                return res.send ({
                    message: 'Роль не найдена'
                })
            }

            // Формируем пароль
            const hashPassword = await bcrypt.hash (user.password, 3);

            // Создаём пользователя
            const userOptions = new UserOptions ()
            const createUser: any = this.userRepository.create({...user})

            createUser.role         = role
            createUser.userOption   = userOptions
            createUser.password     = hashPassword

            await this.userRepository.save(createUser)

            const dirtyLink = {
                id: createUser.id,
                email: createUser.email,
                activate: createUser.activate,
            }

            const link = cryptr.encryptData (dirtyLink)
            await mailService.activationAccount(createUser.email, link)

            return res.send ({
                user: createUser
            })
        } catch (e) {
            return res.send ({

            })
        }
    }

    async userLogout (req: Request, res: Response) {
        try {
            // Продумать систему логаута + должно заносится куда-то в лог
        } catch (e) {
            return res.send ({

            })
        }
    }

    async userEdit (req: Request, res: Response) {
        try {
            const {data} = req.query
            const unpackData = JSON.parse(cryptr.decryptData(data))

            if (!unpackData) {
                return res.send ({
                    message: ''
                })
            }



        } catch (e) {
            return res.send ({

            })
        }
    }

    async userActivate (req: Request, res: Response) {
        try {
            const {data} = req.query
            const unpackLink = JSON.parse(cryptr.decryptData(data))

            const user = await this.userRepository.findOne ({
                where: {
                    id: unpackLink.id,
                    email: unpackLink.email
                }
            })

            if (!user) {
                return res.send ({

                })
            }

            if (!user.activate) {
                return res.send ({

                })
            }

            user.activate = true
            await this.userRepository.save(user)
            return res.send ({
                user
            })
        } catch (e) {
            return res.send ({

            })
        }
    }

}
export default new UserController ()
