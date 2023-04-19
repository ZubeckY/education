import * as http from "http"
import { Express } from "express"
import { Server } from "socket.io"
import config from "./helpers/config"
import connectDataBase from "./connectDB"

export default async function connectServer (app:Express) {
    const server = http.createServer(app)
    const dataBase = await connectDataBase()
    const PORT = config.port ?? 4000
    const io = new Server(server)

    io.on('connection', (socket: any) => {
        console.log('Connection is success')
    });

    server.listen(PORT, () => {
        console.log('listening on *:' + PORT);
    });
}







