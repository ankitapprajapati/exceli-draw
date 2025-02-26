"use client"

import axios from 'axios'
import React, { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { BACKEND_URL } from "./config";

export default function Home() {
  const [ joinRoom,setJoinRoom ] = useState("")
  const [createRoom, setCreateRoom ] = useState("")
  const [loading, setLoading ] = useState(false)

  const router = useRouter()

  const handleJoinRoom = async ()=>{
    if (!joinRoom.trim()) {
      alert("Please enter a room name to join!");
      return;
    }
    try{
      setLoading(true)
      const response =await axios.get(
        `${BACKEND_URL}/room/${joinRoom}`,
        { headers: { authorization:`Bearer ${localStorage.getItem("token")}` }}
      )
      
      if(response.data.roomId){
        router.push(`/room/${joinRoom}`)
      }
      else if(response.data.message){
        const message = response.data.message
        alert(message)
        if( message!=="Room does not exist !!") router.push("/signin")
      }
    }
    catch(e){
      console.log("Join-room Error : "+e)
    }
    finally{
      setLoading(false)
    }
  }


  const handleCreateRoom = async ()=>{
    if (!createRoom.trim()) {
      alert("Please enter a room name to create!");
      return;
    }
    try{
      setLoading(true)
      const response =await axios.post(
        `${BACKEND_URL}/room/create-room`,
        { slug : `${createRoom}`},
        { headers: { authorization:`Bearer ${localStorage.getItem("token")}` }}
      )
      
      if(response.data.roomId){
        router.push(`/room/${createRoom}`)
      }
      else if(response.data.message){
        alert(response.data.message)
      }
    }
    catch(e){
      console.log("Create-room Error : "+e)
    }
    finally{
      setLoading(false)
    }
  }

  if( loading ) return <div>Loading...</div>
  
  return (
    <div >

      {/* Join Room */}
      <div>
        <input value={joinRoom} type="text" onChange={ (e)=>{ setJoinRoom(e.target.value) }} placeholder="Room-Name" />
        <button onClick={ handleJoinRoom}  >Join Room</button>
      </div>   

      {/* Create Room */}
      <div>
        <input value={createRoom} type="text" onChange={ (e)=> setCreateRoom( e.target.value )} placeholder="my-space"/>
        <button onClick={ handleCreateRoom } >Create Room</button>
      </div>

    </div>
  );
}
