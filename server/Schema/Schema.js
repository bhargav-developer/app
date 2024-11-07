import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    id: String,
    todo: String,
    category: String,
    Iscompleted: Boolean,
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "users"
    }
})

export const todo_lists = mongoose.model("to-do", todoSchema)