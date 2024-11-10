import { Router } from "express";
import { add_todo_list, delete_todo_list, get_todo_list, update_todo } from "../controllers/todoController.js";
import  verifyUser  from "../middleWare/verifyUser.js";

const routes = Router()

routes.get("/get-todos",verifyUser,get_todo_list)
routes.post("/add-todo",verifyUser,add_todo_list)
routes.post("/delete-todo",verifyUser,delete_todo_list)
routes.post("/update-todo",verifyUser,update_todo)


export default routes