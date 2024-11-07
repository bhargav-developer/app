import express from 'express'
import mongoose from 'mongoose';
import { todo_lists } from './Schema/Schema.js';
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './Routes/todoRoutes.js';
import authRouter from './Routes/auth.js';
import cookieParser from 'cookie-parser';

dotenv.config()
const port = process.env.PORT || 4000
const app = express()
await mongoose.connect(process.env.MONOGO_DB_URL).then(() => {
  app.listen(port, () => {
    console.log("Server is Listining On " + port)
  })
}).catch((err) => console.log(err))

app.use(cors({
  origin: 'http://localhost:5173', // Frontend origin
  credentials: true, // Allow credentials (cookies)
}));

app.use(express.json())
app.use(cookieParser())

app.use("/api/to-do",routes)
app.use("/api/auth",authRouter)


app.get('/',  (req, res) => {
  console.log(req.cookies)
  res.send("hello World")
})
