import {Express} from 'express'
import config from "./helpers/config"
import connectDataBase from "./connectDB"
const PORT = config.port ?? 4000

export default async function connectServer (app:Express) {
    await app.listen(PORT, async () => {
        try {
            await connectDataBase()
        } catch (e) {
            console.log(e)
        }
    })
}