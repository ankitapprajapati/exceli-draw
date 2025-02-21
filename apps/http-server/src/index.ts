import express,{Request,Response,NextFunction} from 'express'
import cors from 'cors'
import { mainRouter } from './routes/mainRouter';

const port = process.env.PORT ||3001;
const app = express();



app.use(cors());
app.use( express.json() )


app.use("/api/v1", mainRouter)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error("Error caught in middleware:", err);

    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({ error: message });
});

app.listen(port,()=>{
    console.log(`app is listening at port : ${port}`)
});
