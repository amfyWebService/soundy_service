import { Message } from 'amqp-ts';
import { Track } from '../models/Track';
import { getMongoRepository } from 'typeorm';
import InternalServerError from '@/shared/error/InternalServerError';

export function registerTracks(body: any, message : Message)
{
    try
    {
        let track = new Track();
        track.owner = body.owner;
        track.cover = body.cover;
        track.link = body.link;
        getMongoRepository(Track).save(track);
        return {track : track};
    }
    catch(e)
    {

        throw new InternalServerError(e);
    }
     
}