import nc from 'next-connect';
import { getSingleRoom, updateSingleRoom, deleteSingleRoom } from '../../../controllers/roomControllers';
import dbConnect from '../../../config/dbConnect';

const handler = nc();
dbConnect();

handler.get(getSingleRoom);
handler.put(updateSingleRoom);
handler.delete(deleteSingleRoom);


export default handler;