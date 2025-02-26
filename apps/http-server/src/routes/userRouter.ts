import express, { Router ,Request,Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import { jwtSecret } from '@repo/jwt-backend/config'
import { signinSchema, signupSchema } from '@repo/zod-common/types'
import { prismaClient } from '@repo/db/client'

export const userRouter:Router = express.Router( )

const generateToken = async( id:string )=>{
    try{

        let userId = id ;

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

userRouter.post("/signin",async(req:Request,res:Response)=>{
    try{

        const parsedData = signinSchema.safeParse(req.body)
        if( !parsedData.success ){
            res.json({
                message:"incorrect format"
            })
            return;
        }

        //------------user fetch from db------------
        const user =await prismaClient.user.findUnique({
            where   :   {email : parsedData.data?.email},
            select  :   { id:true , password:true }
        })

        // --------------user exist----------------
        if ( !user ){
            res.json({
                message   :   "user not found"
            })
            return ;
        }

        // --------------------password correct -----------------
        if( parsedData.data.password !== user.password ){
            res.json({
                message :   "wrong password"
            })
            return;
        }

       //-----------------get toekn and send-----------
        const token = await generateToken( user.id );
        res.json({
            token:token
        })
    }
    catch(e){
        console.error("Error signin :", e);
        throw new Error("Failed to signin . Please try again later.");
    }
})

userRouter.post("/signup", async(req:Request,res:Response, next:NextFunction)=>{
    try{
        const parsedData = signupSchema.safeParse(req.body);        
        if ( !parsedData.success ){
            res.json( {
                message : parsedData.error.errors[0]?.message
            } )
            return;
        }

        // -----------email taken or not ------------
        const userEmail = await prismaClient.user.findUnique({
            where    :  { email : parsedData.data.email},
            select   :  { email : true }
        })
        if( userEmail ){
            res.json({
                message  :  "Already have account"
            })
            return;
        }


        //--------------create acount---------------
        const user = await prismaClient.user.create({
            data : {
                email        : parsedData.data?.email,
                password     : parsedData.data?.password,
                firstName    :   parsedData.data?.firstName,
                lastName     : parsedData.data?.lastName
            }
        })

        // ----------------get token and send--------------
        const token = await generateToken( user.id );
        res.json({
            token:token
        })
    }
    catch(e:any){
        next( e )
    }
})