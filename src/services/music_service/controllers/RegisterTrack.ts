import { Message } from 'amqp-ts';
import { Track } from '../models/Track';
import { getMongoRepository } from 'typeorm';

export function registerTracks(message : Message)
{
    console.log("ok2")
    let info = JSON.parse(message.getContent());
    let track = new Track();
    try
    {
        track.owner = info.owner;
        track.cover = info.cover;
        track.genre = info.genre;
        track.link = info.link;
        getMongoRepository(Track).save(track);
        return track.toJson();

    }
    catch(e)
    {
        console.log("ok");
        return "tamere"
    }
     
    return "ok";
}