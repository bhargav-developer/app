import { getUser } from "../services/auth.js";

const verifyUser = async (req, res, next) => {
    const UID = await req.cookies.uid;
    if(!UID){
        return res.status(404).send("")
    }
    const user = await getUser(UID)
    req.user = user;
    next()

}

export default verifyUser