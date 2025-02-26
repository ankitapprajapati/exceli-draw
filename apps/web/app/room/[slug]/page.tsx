import axios from 'axios'
import { BACKEND_URL } from '../../config';
import { RoomDetails } from '../../../components/RoomDetails';

async function getRoomId ( slug : string ){
    const response = await axios.get( `${BACKEND_URL}/room/${slug}`)
    return response.data.roomId
}

export default async function ChatRoom( {params} : {params:{ slug : string}} ){
    const slug = (await params).slug;
    // console.log(slug)
    const roomId = await getRoomId(slug) as number
    return (
        // <div>RoomDetial</div>
        <RoomDetails roomId={roomId}></RoomDetails>
    )
    
}