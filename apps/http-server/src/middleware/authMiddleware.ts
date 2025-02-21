import express, { Request,Response,NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken'
import { jwtSecret } from '@repo/jwt-backend/config';


export const authMiddleWare = (req:Request,res:Response,next:NextFunction) =>{

    //------------get authHeader----------------------
    const authHeader = req.headers.authorization as string
    if( !authHeader || !authHeader.startsWith('Bearer')){
        res.json({
            message : " authentication token is missing or wrong"
        })
        return;
    }

    // ------------------validate token-------------------
    const token = authHeader.split(' ')[1] || ""
    try{
        const decoded = jwt.verify( token,jwtSecret) as JwtPayload;
        if( decoded.userId ){
            req.userId = decoded.userId
            next()
        }else{
            res.json({
                message : 'session expired'
            })
        }
    }
    catch(e:any){
        next(e)
    }    
}