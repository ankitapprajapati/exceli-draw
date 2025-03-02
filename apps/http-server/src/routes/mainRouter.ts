import express, { Router } from "express"
import { userRouter } from "./userRouter";
import { roomRouter } from "./roomRouter";

export const mainRouter:Router = express.Router();

mainRouter.use( "/user",userRouter )
mainRouter.use( "/room", roomRouter)