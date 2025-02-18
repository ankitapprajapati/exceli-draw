import express, { Router ,Request,Response} from 'express'
import jwt from 'jsonwebtoken'
import { jwtSecret } from '@repo/jwt-backend/config'
import { signinSchema } from '@repo/zod-common/types'
import { prismaClient } from '@repo/db/client'

export const userRouter:Router = express.Router( )

const generateToken = async( email:string )=>{
    try{
        // fetch userId from db through email
        const userId = 1;

        if(!jwtSecret) throw new Error("JWT secret key is undefined. Check your environment variables.");
        const token = jwt.sign( { userId } , jwtSecret , {expiresIn:"24h"} );

        if(!token ) throw new Error( "token is not generated......")

        return token;
    }
    catch(e){
        console.error("Error generating token:", e);
        throw new Error("Failed to generate token. Please try again later.");
    }
}

userRouter.get("/signin",async(req:Request,res:Response)=>{
    try{
        const {email,password}= req.body;

        const data = signinSchema.safeParse(req.body)
        if( !data.success ){
            res.json({
                message:"incorrect input"
            })
            return;
        }

        // find email in db DOES USER EXIST

       
            const token = await generateToken( email );

            res.json({
                token:token
            })
        // }
        // else{ 
            // res.json({
            //     message:"password is incorrrect"
            // })
        // }
    }
    catch(e){
        console.error("Error generating token:", e);
        throw new Error("Failed to generate token. Please try again later.");
    }
})

userRouter.get("/signup", async(req:Request,res:Response)=>{
    try{
        const { email,firstName,lastName,password } = req.body;
        
        // const hashedPassword = await bcrypt.hash(password,10)

        // save to db
        console.log({
            message:{
                firstName,
                lastName,
                email,
                // password:hashedPassword,
            }
        }) 

        const token = await generateToken( email );

        res.json({
            token:token
        })
    }
    catch(e){
        console.log(e)
        res.json({
            message:"account not created"
        })
    }
})