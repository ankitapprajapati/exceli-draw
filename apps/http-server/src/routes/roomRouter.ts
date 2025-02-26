import express, { Response, Request, Router, NextFunction } from 'express'
import { authMiddleWare } from '../middleware/authMiddleware';
import { prismaClient } from '@repo/db/client';
import { createRoomSchema } from '@repo/zod-common/types';

export const roomRouter:Router = express.Router();

roomRouter.post( "/create-room",authMiddleWare, async (req:Request, res:Response, next:NextFunction)=>{ 

    try{
        const parsedData = createRoomSchema.safeParse(req.body)
        if( !parsedData.success ){
            res.json({
                message : parsedData.error.errors[0]?.message
            })
            return
        }

        const userId = req.userId

        // -------- is roomName taken---------------
        const room = await prismaClient.room.findUnique({
            where    :  { slug : parsedData.data.slug},
            select   :  { slug : true }
        })
        if( room ){
            res.json({
                message  :  "room-name not avaible"
            })
            return;
        }

        // --------------create room ---------------
        const createdRoom = await prismaClient.room.create({
            data :  {
                slug        :    parsedData.data.slug,
                adminId     :    userId
            }
        })
        res.json({
            roomId : createdRoom.id
        })
    }
    catch(e){
        next(e)
    }
})

roomRouter.get( "/chat/:roomId",authMiddleWare,async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const roomId = Number(req.params.roomId)
        const messages = await prismaClient.chat.findMany({
            where : { roomId : roomId},
            take  : 50,
            orderBy :{ createdAt : "asc"}
        })
        res.json({
            messages : messages
        })
    }
    catch(e){
        next(e)
    }
})

roomRouter.get( "/:slug",async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const slug = req.params.slug
        const room = await prismaClient.room.findFirst({
            where : { slug : slug},
        })
        if( !room ){
            res.json({
                message : "Room does not exist !!"
            })
            return;
        }
        console.log(room.id)
        res.json({
            roomId : room.id
        })
    }
    catch(e){
        next(e)
    }
})
