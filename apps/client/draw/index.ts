
import { BACKEND_URL } from "@/config";
import axios from "axios";

type Shapes=  {  type:"rect",    x:number,         y:number,          width:number,    height:number } |
              {  type:"circle",  centerX:number,   centerY:number,    radius:number  }


export function initDraw ( canvas:HTMLCanvasElement){
    const ctx = canvas.getContext("2d");
    if( !ctx ) return ;

    let existingShapes:Shapes[] = []

    ctx.fillStyle = "rgba(0,0,0)"
    ctx.fillRect(0,0,canvas.width,canvas.height)

    let clicked = false;
    let startX = 0;
    let startY = 0;

    canvas.addEventListener("mousedown",(e)=>{
        clicked=true
        startX = e.clientX
        startY = e.clientY
    })

    canvas.addEventListener("mouseup",(e)=>{
        clicked=false

        const width = e.clientX-startX
        const height = e.clientY-startY

        existingShapes.push({
            type:"rect", x:startX, y:startY, width, height
        })
        
    })

    canvas.addEventListener("mousemove",(e)=>{
        if(clicked){
            const width = e.clientX-startX
            const height = e.clientY-startY

            clearCanvas(existingShapes,canvas)

            ctx.strokeStyle = "rgba(255,255,255)"
            ctx.strokeRect(startX,startY,width,height);
        }
    })
}

function clearCanvas( existingShapes:Shapes[], canvas:HTMLCanvasElement){

    const ctx = canvas.getContext("2d");
    if( !ctx ) return 

    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle = "rgba(0,0,0)"
    ctx.fillRect(0,0,canvas.width,canvas.height)

    existingShapes.forEach( (shape)=>{
        if(shape.type==="rect"){
            ctx.strokeStyle = "rgba(255,255,255)"
            ctx.strokeRect(shape.x,shape.y,shape.width,shape.height)
        }
    })
}

async function getExistingShape(roomId:string){
   const res = await axios.get(`${BACKEND_URL}/chats/${roomId}`)
   const messages = res.data.messages;

   const shapes = messages.map( (x:{message:string})=>{
    const messageData = JSON.parse( x.message )
    return messageData;
   })

   return shapes;
}