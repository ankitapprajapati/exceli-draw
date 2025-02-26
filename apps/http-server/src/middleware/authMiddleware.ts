import express, { Request,Response,NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken'
import { jwtSecret } from '@repo/jwt-backend/config';


export const authMiddleWare = (req:Request,res:Response,next:NextFunction) =>{
    try{
        //------------get authHeader----------------------
        const authHeader = req.headers.authorization as string
        if( !authHeader || !authHeader.startsWith('Bearer')){
            res.json({ message: "Token is missing" });
            return
        }

        // ------------------validate token-------------------
        const token =  authHeader.split(' ')[1]
        if( !token || token==="null"  ){
            res.json({ message: "Unauthorized access"});
            return
        }
    
        const decoded = jwt.verify( token as string,jwtSecret) as JwtPayload;
        if( decoded.userId ){
            req.userId = decoded.userId
            next()
        }else{
            res.json({ message : 'session expired'
            })
            return
        }
    }
    catch (error: any) {
        console.log(error)
        if (error.name === "TokenExpiredError") {
            next({  message: "Session expired" });
            return
        } else if (error.name === "JsonWebTokenError") {
            next({  message: "Invalid token" });
            return
        }
        next({ status: 500, message: "Internal server error" });
    }   
}