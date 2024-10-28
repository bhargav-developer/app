import express from 'express'
import mongoose from 'mongoose';
import { todo_lists } from './Schema/Schema.js';
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './Routes/todoRoutes.js';

dotenv.config()
const port = process.env.PORT || 4000
const app = express()
await mongoose.connect(process.env.MONOGO_DB_URL).then(() => {
  app.listen(port, () => {
    console.log("Server is Listining On " + port)
  })
}).catch((err) => console.log(err))

app.use(cors())
app.use(express.json())

app.use("/api/to-do",routes)


app.get('/', (req, res) => {
  res.send("hello World")
})
