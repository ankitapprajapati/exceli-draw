"use client"

import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket"

export function ChatRoomCleint( {messages,roomId}: {messages:{message:string}[],roomId:number}){
    const { socket,loading } = useSocket();
    const [ chats, setChats ] = useState(messages);
    const [ typedMessage, setTypedMessage] = useState("")
    
    useEffect( ()=>{
        if( socket && !loading ){

            socket.send(JSON.stringify({
                type : "join_room",
                roomId 
            }))

            socket.onmessage = (event: { data: string; })=>{
                const parsedData = JSON.parse(event.data)
                console.log(parsedData)
                if( parsedData.type === "chat"){
                    setChats( (prevChats) => [...prevChats,{message:parsedData.message}] )
                }
            }
            return ()=>{ socket.close();}
        }
    },[socket,loading])

    return <div>
        { chats?.map( (m,ind)=> <div key={ind}>{m.message}</div>)}
        <input type="text" value={typedMessage} onChange={ event=> setTypedMessage(event.target.value)} />
        <button onClick={ ()=>{
            socket.send(JSON.stringify({
                type: "chat",
                message:`${typedMessage}`,
                roomId:roomId
            }))
        }}>send</button>
    </div>
}