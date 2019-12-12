import { Message } from "amqp-ts";
import { getMongoRepository } from 'typeorm';
import { Track } from '../models/Track';
import EntityNotFoundErrorCusto from '@/shared/error/EntityNotFoundError';


export async function getTrack (body : any , message : Message) {
    try
    {
        let track : Track = await getMongoRepository(Track).findOneOrFail(body.trackID);
        return {track : track};
    }
    catch(e)
    {
        throw new EntityNotFoundErrorCusto(e);
    }
}
