import express,{Request,Response} from 'express'
import cors from 'cors'
import {jwtSecret} from '@repo/jwt-backend/config'
import { mainRouter } from './routes/mainRouter';

const port = process.env.PORT ||3001;
console.log(jwtSecret)
const app = express();



app.use(cors());
app.use( express.json() )


app.use("/api/v1", mainRouter)

app.listen(port,()=>{
    console.log(`app is listening at port : ${port}`)
});
