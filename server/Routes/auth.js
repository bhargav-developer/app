import { Router } from "express";
import { login, signIn } from "../controllers/auth.js";

const authRouter = Router()

authRouter.post("/signIn",signIn)
authRouter.post("/login",login)


export default authRouter