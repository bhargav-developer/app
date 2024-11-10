import { getUser } from "../services/auth.js";

const verifyUser = async (req, res, next) => {
    const UID = await req.cookies.uid;
    console.log("UID",UID)
    if(!UID){
        return res.status(404).send("Cookies Not found")
    }
    const user = getUser(UID)
    req.user =  user;
    next()

}

export default verifyUser