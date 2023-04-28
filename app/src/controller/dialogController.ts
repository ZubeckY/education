import {Request, Response} from "express"
import {InjectRepository} from "typeorm-typedi-extensions"
import {In, Repository} from "typeorm"
import {Dialog, Role, User} from "../entity"

class DialogController {
    @InjectRepository(Role)
    private userRepository!: Repository<User>

    @InjectRepository(Role)
    private roleRepository!: Repository<Role>

    @InjectRepository(Dialog)
    private dialogRepository!: Repository<Dialog>


    // todo Тут через socket


}

export default new DialogController ()