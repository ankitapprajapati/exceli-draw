"use client"

import { initDraw } from "@/draw";
import { useEffect, useRef } from "react"

export default function Canvas({params}:{
    params:{
        roomId:string
    }
}){
    const roomId = params.roomId
    console.log(roomId)
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect ( ()=>{
        
        if(canvasRef.current){
            const canvas = canvasRef.current;
            initDraw(canvas);           
        }
    },[canvasRef])

    return (
        <div>
            <canvas ref={canvasRef} width={700} height={700}/>
        </div>
    )
}