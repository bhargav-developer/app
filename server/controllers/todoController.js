import mongoose from "mongoose";
import { todo_lists } from "../Schema/Schema.js";


export const get_todo_list = async (req, res) => {
    try {
        const id = new mongoose.Types.ObjectId(req.user.id);
        console.log(id)
        const data = await todo_lists.find({createdBy: id});
        if(data){
            return res.json(data)
        }

    }
    catch (err) {
        console.log(err)
    }
}

export const add_todo_list = async (req, res) => {
    try {

        const data = req.body;
        const userId = new mongoose.Types.ObjectId(req.user.id)
        const todo = new todo_lists({...data,createdBy: userId});
        todo.save()
        res.send('POST request received!');

    } catch (error) {
        console.log(error)

    }

}


export const delete_todo_list = async (req, res) => {
    try {
        const { id } = await req.body;
        const result = await todo_lists.deleteOne({id});
        res.send('POST request received!');

    } catch (error) {
        console.log(error)

    }
} 

export const update_todo = async (req, res) => {
    try {
        const { id } = req.body;
        console.log("id",id)
        const todoItem = await todo_lists.findOne({ id });
        const update = await todo_lists.findOneAndUpdate({ id }, {
            $set: { Iscompleted: !todoItem.Iscompleted }
        }, { new: true })

        res.json({ "Updated ": update })

    } catch (error) {
        console.log(error)

    }

}



