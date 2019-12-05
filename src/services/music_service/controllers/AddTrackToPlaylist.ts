import { Message } from 'amqp-ts';
import { getMongoRepository } from 'typeorm';
import { Track } from '../models/Track';


export function addTrackToPlaylist(body : any, message : Message)
{
    try
    {
        if(body.trackId)
        {
            let track = getMongoRepository(Track).findByIds(body.trackId);
            console.log(track);
            
        }

        //throw new error argumentnotfound
    }
    catch(e)
    {

    }
    
}