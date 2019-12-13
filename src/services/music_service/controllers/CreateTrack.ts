import { Message } from 'amqp-ts';
import { Track } from '../models/Track';
import { getMongoRepository } from 'typeorm';
import InternalServerError from '@/shared/error/InternalServerError';
import User from '@/services/user_service/models/User';

export function createTrack(body: any, message : Message)
{
    try
    {
        const user: User = body.$_currentUser;
        let track = new Track();
        track.owner = user._id;
        track.cover = body.cover;
        track.link = body.link;
        return getMongoRepository(Track).save(track);
    }
    catch(e)
    {
        throw new InternalServerError(e);
    }
     
}