import { Router } from "express";
import { add_todo_list, delete_todo_list, get_todo_list, update_todo } from "../controllers/todoController.js";

const routes = Router()

routes.get("/get-todos",get_todo_list)
routes.post("/add-todo",add_todo_list)
routes.post("/delete-todo",delete_todo_list)
routes.post("/update-todo",update_todo)


export default routes