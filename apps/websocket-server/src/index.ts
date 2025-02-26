import WebSocket, { WebSocketServer } from 'ws';
import jwt, { JwtPayload } from 'jsonwebtoken'
import {jwtSecret} from '@repo/jwt-backend/config'
import {prismaClient} from '@repo/db/client'

const wss = new WebSocketServer({ port: 8080 });

if( !jwtSecret ) throw new Error ( "jwtSEcret not found ")

//------------------global storage-----------------
interface User {
  userId  :   string,
  ws      :   WebSocket,
  rooms   :   number[]
}

const users : User[] = []


// -----------------------token verification--------------
function checkUser(token: string) {
  try {
    if (!token || token.split(".").length !== 3) {
      console.error("Invalid token format:", token);
      return null;
    }

    const decoded = jwt.verify(token, jwtSecret) as JwtPayload;

    if (!decoded || typeof decoded === "string" || !decoded.userId) {
      return null;
    }

    return decoded.userId;
  } 
  catch (err:any) {
    console.error("JWT Verification Error:", err.message);
    return null;
  }
}

async function roomExist( roomId : number ){
  try{
    const room = await prismaClient.room.findUnique({
      where   :  {  id : roomId },
      select  :  { id : true, slug:true },
    })

    if( !room || !room.id ) return null
    return room.id
  }
  catch(e:any){
    console.log("Unable to find room : " + e.message)
    return null 
  }
}
  

wss.on('connection', function connection(ws,req) {


  // -----------------------isAuthenticate-----------
  const url = req.url;
  if(!url ){
    return
  }  
  const urlParams = new URLSearchParams(url.split('?')[1])
  const token = urlParams.get("token") || ""
  const userId = checkUser( token );
  if( !userId ){
    ws.close()
    return;
  }

  users.push({
    userId,
    rooms : [],
    ws
  })

  ws.on('error', console.error);

  ws.on('message',async function message(data) {

    try{    
      let parsedData;
      if( typeof(data) !== "string" ) {
        parsedData = JSON.parse( data.toString())
      }else{
        parsedData = JSON.parse( data )
      }

      if( parsedData.type === "join_room"){
        
        const roomId = await roomExist( parsedData.roomId )
        if( !roomId ) {
          ws.send("room not exist")
          return;
        }

        const user = users.find( user => user.ws===ws )
        user?.rooms.push( parsedData.roomId )
        //**********
        console.log("room joined")
      }

      if( parsedData.type === "leave_room"){

        const roomId = await roomExist( parsedData.roomId )
        if( !roomId ) {
          ws.send("room not exist")
          return;
        }

        const user = users.find( user => user.ws === ws )
        if( user ){
          user.rooms = user.rooms.filter( r => r!==parsedData.roomId )
        }
      }

      if( parsedData.type === "chat" ){

        // user have access to this room 
        const user = users.find( u => u.userId===userId )
        if( user ){
          let subscriber = user.rooms.find( r => r===parsedData.roomId )
          if( !subscriber ) {
            ws.send("you have not subscription to this room")
            return;
          }
        }

        const roomId = await roomExist( parsedData.roomId )
        if( !roomId ) {
          ws.send("room not exist")
          return;
        }

        const message = parsedData.message

        await prismaClient.chat.create({
          data : {
            roomId,
            message,
            userId
          }
        })

        //**********
        console.log("chat come ")

        users.forEach( user=>{
          if( user.rooms.includes( roomId )){
            user.ws.send( JSON.stringify({
              type  : "chat",
              message : message,
              roomId
            }))
          }
        })
      }
    }
    catch(e){
      console.log( "Error "+ e)
    }
  });
});