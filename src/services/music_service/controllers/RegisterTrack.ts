import { Message } from 'amqp-ts';
import { Track } from '../models/Track';
import { getMongoRepository } from 'typeorm';
import InternalServerError from '@/shared/error/InternalServerError';

export function registerTrack(body: any, message : Message)
{
    try
    {
        let track = new Track();
        track.owner = body.owner;
        track.cover = body.cover;
        track.link = body.link;
        return getMongoRepository(Track).save(track);
    }
    catch(e)
    {
        throw new InternalServerError(e);
    }
     
}