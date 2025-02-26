"use client"
import axios from "axios";
import { BACKEND_URL } from "../app/config";
import { ChatRoomCleint } from "./ChatRoomCleint";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export function RoomDetails({roomId}:{roomId:number}){
    const [messages,setMessages] = useState()
    const [loading,setLoading] = useState(false)
    
    const router = useRouter()

    useEffect( ()=>{
        const fetchChats = async ()=>{
            try{
                const token = localStorage.getItem("token");
                if(!token){
                    console.log("user not authenticated")
                    router.push("/signin")
                    return
                }

                const response = await axios.get(`${BACKEND_URL}/room/chat/${roomId}`,{
                    headers:{
                        Authorization : `Bearer ${localStorage.getItem("token")}`
                    }
                })
                setMessages( response.data.messages)
            }
            catch(e){
                console.log("Fetch prev message Error : "+e)
            }
            finally{
                setLoading(false)
            }
        }
        fetchChats()
    },[roomId])
    
    if( loading ) return <div> loading chat ......</div>
    return(
        // <div>sdtyuiokjnb</div>
        messages && <ChatRoomCleint messages={messages} roomId={roomId}/>
    )

}