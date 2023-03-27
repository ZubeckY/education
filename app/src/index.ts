import 'reflect-metadata'
import cors from 'cors'
import express from 'express'
import {router} from './router'
import cookieParser from 'cookie-parser'
import connectServer from "./connectServer"

const app = express()
app.use (cors)
app.use (express.json())
app.use (cookieParser())
app.use ('/api', router)
connectServer(app).catch((e) => {console.log(e)})

