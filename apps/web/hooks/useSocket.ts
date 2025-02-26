"use client"
import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket(){
    const [loading,setLoading] = useState(true);
    const [socket, setSocket ] = useState<any>();

    useEffect( ()=>{
        const ws = new WebSocket(`${WS_URL}?token=${localStorage.getItem("token")}`)
        ws.onopen = ()=>{
            setLoading(false)
            setSocket(ws)
        }
        return ()=>{
            ws.close();
        }
        
    },[])

    return {
        socket,
        loading
    }
}