import {Request, Response} from "express"
import {InjectRepository} from "typeorm-typedi-extensions"
import {In, Repository} from "typeorm"
import {DialogBranch, Role, User} from "../entity"

class DialogController {
    @InjectRepository(Role)
    private userRepository!: Repository<User>

    @InjectRepository(Role)
    private roleRepository!: Repository<Role>

    @InjectRepository(DialogBranch)
    private dialogRepository!: Repository<DialogBranch>


    // todo Тут через socket


}

export default new DialogController ()