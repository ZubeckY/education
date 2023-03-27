import {Request, Response} from "express"
import {InjectRepository} from "typeorm-typedi-extensions"
import {Repository} from "typeorm"
import {Role, User} from "../entity"

class UserController {
    @InjectRepository(Role)
    private userRepository!: Repository<User>

    @InjectRepository(Role)
    private roleRepository!: Repository<Role>

    async userList (req: Request, res: Response) {
        try {

        } catch (e) {

        }
    }

    async userCreate (req: Request, res: Response) {
        try {

        } catch (e) {

        }
    }

    async userEdit (req: Request, res: Response) {
        try {

        } catch (e) {

        }
    }

    async userActivate (req: Request, res: Response) {
        try {

        } catch (e) {

        }
    }

    async userBanStatus (req: Request, res: Response) {
        try {

        } catch (e) {

        }
    }

}
export default new UserController ()
