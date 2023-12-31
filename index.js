import express from 'express'
import db from './config/Database.js'
import dotenv from 'dotenv'
import session from 'express-session'
import cors from 'cors'
import UserRoute from './routes/UserRoute.js'
import ProductRoute from './routes/ProductRoute.js'

dotenv.config()

const app = express();

(async() =>{
    await db.sync()
})()

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto',
    }
}))

app.use(cors({
    credentials: true,
    origin: "https://localhost:3000"
}))

app.use(express.json())

app.use(UserRoute)
app.use(ProductRoute)

app.listen(process.env.APP_PORT, () => {
    console.log("Server is running")
})