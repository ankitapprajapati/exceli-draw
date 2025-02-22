import express, { Response, Request, Router, NextFunction } from 'express'
import { authMiddleWare } from '../middleware/authMiddleware';
import { prismaClient } from '@repo/db/client';
import { createRoomSchema } from '@repo/zod-common/types';

export const roomRouter:Router = express.Router();

roomRouter.post( "/create-room",authMiddleWare, async (req:Request, res:Response, next:NextFunction)=>{

    const parsedData = createRoomSchema.safeParse(req.body)
    if( !parsedData.success ){
        res.json({
            message : "Incorrect input"
        })
        return
    }

    const userId = req.userId

    try{
        // -------- is roomName taken---------------
        const room = await prismaClient.room.findUnique({
            where    :  { slug : parsedData.data.roomName},
            select   :  { slug : true }
        })
        if( room ){
            res.json({
                message  :  "room-name not avaible"
            })
            return;
        }

        // --------------create room ---------------
        const user = await prismaClient.room.create({
            data :  {
                slug        :    parsedData.data.roomName,
                adminId     :    userId
            }
        })
        res.json({
            roomId : user.id
        })
    }
    catch(e){
        next(e)
    }
})

roomRouter.get( "/chat/:roomId",authMiddleWare,async (req:Request,res:Response)=>{
    const roomId = Number(req.params.roomId)
    const messages = await prismaClient.chat.findMany({
        where : { roomId : roomId},
        take  : 50,
        orderBy :{ createdAt : "desc"}
    })
})
