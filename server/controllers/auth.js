import { users } from "../Schema/users.js";
import { v4 as uuid } from 'uuid'
import { getUser, setUser } from "../services/auth.js";

const signIn = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(req.body)
        const createUser = await users.create({ name, email, password });
        return res.json({ user: createUser })
    } catch (error) {
        if (error.code === 11000) {
            return res.send("user Exist")
        }
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await users.findOne({ email, password })
    if (!user) {
        return res.send("User Not Found")
    }
    const UID = uuid()
    res.cookie("uid", UID)
    setUser(UID, user)
    return res.json({ user })
}

export { signIn, login }