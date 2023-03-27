import jwt from "jsonwebtoken"
import config from "../helpers/config"
import tokenModel from "../helpers/token"

export default class TokenService  {
    static generateToken (model:tokenModel) {
        try {
            return jwt.sign (model, config.jwtPhrase)
        } catch (e) {
            return undefined
        }
    }
    static validateToken (token:string) {
        try {
            return jwt.verify (token, config.jwtPhrase);
        } catch (e) {
            return undefined
        }
    }
}