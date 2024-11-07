import { getUser } from "../services/auth.js";

const verifyUser = async (req, res, next) => {
    const UID = req.cookies.uid;
    if(!UID){
        return res.status(404).send("")
    }
    const user = getUser(UID)
    console.log(user)
    req.user = user;
    next()

}

export default verifyUser