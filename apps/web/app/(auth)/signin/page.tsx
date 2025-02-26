"use client"

import axios from "axios"
import { useState } from "react"
import { BACKEND_URL } from "../../config"
import { useRouter } from "next/navigation"
import { setLazyProp } from "next/dist/server/api-utils"

export default function Signin(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [loading, setLoading ] = useState(false)

    const router = useRouter()

    const handleOnClick = async ()=>{
        try{
            setLoading( true)
            const response = await axios.post(`${BACKEND_URL}/user/signin`,{
                email,
                password
            })
            if(response.data.token){
                localStorage.setItem("token",response.data.token)
                router.push("/")
            }
            else if(response.data.message){
                alert(response.data.message)
            }
            else{
                router.push("/server-error")
            }
        }
        catch(e){
            console.log("Sign-in Error : " + e)
            router.push("/server-error")
        }
        finally{
            setLoading(false)
        }
    }

    return(
        <div>
            <h1>Sign-In</h1>
            <div>
                <label htmlFor="email">Email</label><br />
                <input type="text" id="email" placeholder="ankit@gmail.com" onChange={ (e)=> setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Password</label><br />
                <input type="text" id="password" placeholder="*********" onChange={ (e)=> setPassword(e.target.value)}  />
            </div>
            <div>
                <button onClick={ handleOnClick} >Login</button>
            </div>
        </div>
    )
}