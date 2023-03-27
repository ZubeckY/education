import * as path from "path"
import config from './helpers/config'
import {DataSource} from "typeorm"

export default async function connectDataBase () {
    try {
        const AppDataSource = new DataSource ({
            type: "mysql",
            host: config.dbHost,
            port: config.dbPort,
            username: config.dbLogin,
            password: config.dbPassword,
            database: config.dbName,
            synchronize: true,
            logging: ["warn"],
            // logging: ["error"],
            // logging: "all",
            entities: [
                path.resolve(__dirname, "./entity/**/*{.ts,.js}"),
            ],
            subscribers: [],
            migrations: [],
        })

        await AppDataSource.initialize()
        return AppDataSource
    } catch (e) {
        return e
    }
}