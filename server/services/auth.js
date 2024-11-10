import jwt from "jsonwebtoken";

const secretKey = "Bhargav@200"

const setUser =  (user) => {
    return jwt.sign({
        id: user.id,
        email: user.email
    },secretKey)
}

const getUser = (token) => {
    return jwt.verify(token,secretKey)
}

export {setUser,getUser}

