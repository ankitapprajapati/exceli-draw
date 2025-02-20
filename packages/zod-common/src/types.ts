import { x } from 'joi'
import {z} from 'zod'

export const signinSchema = z.object({
    email      :     z.string().email(),
    password    :    z.string(),
})

export const signupSchema = z.object({
    email    : z.string().email(),
    password : z.string(),
    firstName : z.string(),
    lastName    : z.string(), 
})