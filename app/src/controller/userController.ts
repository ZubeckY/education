import {Request, Response} from "express"
import {InjectRepository} from "typeorm-typedi-extensions"
import {getManager, Repository} from "typeorm"
import {Role, User, UserOptions} from "../entity"
import cryptr from "../cryptr"
import mailService from "../service/mail-service";

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

    async userLogin  (req: Request, res: Response) {
        try {
            const {data} = req.query
            const user = JSON.parse(cryptr.decryptData(data))
            const userFromDB = await getManager().findOne (User, {
                where: {
                    email: user.email
                }
            })

            if (!userFromDB) {
                return res.send ({

                })
            }



        } catch (e) {
            return res.send ({

            })
        }
    }

    async userReg (req: Request, res: Response) {
        try {
            const {data} = req.query
            const user = JSON.parse(cryptr.decryptData(data))
            const userFromDB = await getManager().findOne (User, {
                where: {
                    email: user.email
                }
            })

            if (userFromDB) {
                return res.send ({

                })
            }

            const role = await getManager().findOneOrFail (Role, {
                where: {
                    role: 'user'
                }
            })

            if (!role) {
                return res.send ({

                })
            }

            const userOptions = new UserOptions ()
            const createUser = new User ()
            createUser.name       = user.name
            createUser.secondName = user.secondName
            createUser.patronymic = user.patronymic
            createUser.bd         = user.bd
            createUser.phone      = user.phone
            createUser.email      = user.email
            createUser.password   = user.password
            createUser.role       = role
            createUser.userOption = userOptions
            await getManager().save(createUser)

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

    async userEdit (req: Request, res: Response) {
        try {

        } catch (e) {
            return res.send ({

            })
        }
    }

    async userActivate (req: Request, res: Response) {
        try {
            const {data} = req.query
            const unpackLink = JSON.parse(cryptr.decryptData(data))


            const user = await getManager().findOne(User, {
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
            await getManager().save(user)
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
