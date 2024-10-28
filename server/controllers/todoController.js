import { todo_lists } from "../Schema/Schema.js";


export const get_todo_list = async (req, res) => {
    try {
        const DB = await todo_lists.find({});
        res.json(DB)
    }
    catch (err) {
        console.log(err)
    }
}

export const add_todo_list = async (req, res) => {
    try {

        const data = req.body;
        console.log(data)
        const todo = new todo_lists(data);
        todo.save()
        res.send('POST request received!');

    } catch (error) {
        console.log(error)

    }

}


export const delete_todo_list = async (req, res) => {
    try {
        const { id } = req.body;
        const result = await todo_lists.deleteOne({ id });
        res.send('POST request received!');

    } catch (error) {
        console.log(error)

    }
}

export const update_todo = async (req, res) => {
    try {
        const { id } = req.body;
        const todoItem = await todo_lists.findOne({ id });
        const update = await todo_lists.findOneAndUpdate({ id }, {
            $set: { Iscompleted: !todoItem.Iscompleted }
        }, { new: true })
        console.log(update)
        res.json({"Updated ":update})

    } catch (error) {
        console.log(error)

    }

}



