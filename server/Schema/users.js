import mongoose from "mongoose";
const usersSchema = new mongoose.Schema({
   name: String,
   email : {
    type: String,
    unique: true,
    required: true,
   },
   password: String

})

export const users = mongoose.model("users", usersSchema)