import { Message } from 'amqp-ts';
import { Track } from '../models/Track';
import { getMongoRepository } from 'typeorm';

export function registerTracks(message : Message)
{
    let info = JSON.parse(message.getContent());
    let track = new Track();
    try
    {
        track.artist = info.artist;
        track.cover = info.cover;
        track.genre = info.genre;
        track.link = info.link;
        getMongoRepository(Track).save(track);
    }
    catch(e)
    {

    }
     
    return "ok";
}