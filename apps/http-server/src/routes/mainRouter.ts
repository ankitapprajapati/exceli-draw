import express, { Router } from "express"
import { userRouter } from "./userRouter";

export const mainRouter:Router = express.Router();

mainRouter.use( "/user",userRouter )