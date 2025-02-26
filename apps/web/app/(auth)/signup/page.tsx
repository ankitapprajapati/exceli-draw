"use client"

import axios from "axios"
import { useState } from "react"
import { BACKEND_URL } from "../../config"
import { useRouter } from "next/navigation"
import { constants } from "buffer"

export default function Signin(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [loading, setLoading] = useState(false) // >>>>>>>>>>>>>>>>>>>> do related loading logo <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    const router = useRouter()

    const handleOnClick = async ()=>{
        try{
            setLoading(true)
            const response = await axios.post(`${BACKEND_URL}/user/signup`,{
                firstName,
                lastName,
                email,
                password
            })
            console.log(response)
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
            console.log("Sign-In Error : " +e)
            router.push("/server-error")
        }
        finally{
            setLoading(false);
        }
    }

    return(
        <div style={{
            "display":"flex",
            "flexDirection":"column"
        } }>
            <h1>Sign-Up</h1>
            <div>
                <label htmlFor="firstName">First-Name *</label> <br />
                <input type="text" id="firstName" placeholder="Ankit" onChange={ (e)=> setFirstName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="lastName">Last-Name</label> <br />
                <input type="text" id="lastName" placeholder="Prajapati" onChange={ (e)=> setLastName(e.target.value)}  />
            </div>
            <div>
                <label htmlFor="email">Email *</label> <br />
                <input type="text" id="email" placeholder="ankit@gmail.com" onChange={ (e)=> setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Password *</label><br />
                <input type="text" id="password" placeholder="*********" onChange={ (e)=> setPassword(e.target.value)}  />
            </div>
            <div>
                <button onClick={ handleOnClick} >Sign up</button>
            </div>
            <div>
                <p>Already have an account? <a href="/signin">Sign in</a></p>
            </div>

        </div>
    )
}