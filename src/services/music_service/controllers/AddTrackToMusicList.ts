import { Message } from 'amqp-ts';
import { getMongoRepository, MongoRepository } from 'typeorm';
import { Track } from '../models/Track';
import { Playlist } from '../models/Playlist';
import MissingArgumentException from '@/shared/error/MissingArgumentException';
import InternalServerError from '@/shared/error/InternalServerError';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';
import EntityNotFoundErrorCusto from "@/shared/error/EntityNotFoundError"
import { validate } from 'class-validator';
import MusicAlreadyInPlaylistError from '../error/MusicAlreadyInPlaylistError';
import { Album } from '../models/Album';


export async function addTrackToPlaylist(body: any, message: Message) 
{
    if (body.playlistID && body.trackID) 
    {
        try 
        {
            const [playlist, track] = await Promise.all([getMongoRepository(Playlist).findOneOrFail(body.playlistID), getMongoRepository(Track).findOneOrFail(body.trackID)]);
            playlist.isTrackInMusicList(body.trackID)
            playlist.tracks.push(track);
            await getMongoRepository(Playlist).replaceOne({_id : playlist._id},{...playlist})
        
            return { playlist: await getMongoRepository(Playlist).find({where : {_id : playlist._id}}) };
        }
        catch (e) 
        {
            
            if(e instanceof EntityNotFoundError)
            {
                throw new EntityNotFoundErrorCusto(e);
            }
            else if(e instanceof MusicAlreadyInPlaylistError)
            {
                throw new MusicAlreadyInPlaylistError();
            }
            throw new InternalServerError(e);
        }
    }
    else 
    {
        throw new MissingArgumentException(new Error("Missing Argument")); 
    }
}
  
    


export async function addTrackToAlbum(body: any, message: Message) 
{
    if (body.albumID && body.trackID) 
    {
        try 
        {
            const [album, track] = await Promise.all([getMongoRepository(Album).findOneOrFail(body.albumID), getMongoRepository(Track).findOneOrFail(body.trackID)]);
            album.isTrackInMusicList(body.trackID)
            album.tracks.push(track);
            await getMongoRepository(Playlist).replaceOne({_id : album._id},{...album})
        
            return { playlist: await getMongoRepository(Playlist).find({where : {_id : album._id}}) };
        }
        catch (e) 
        {
            
            if(e instanceof EntityNotFoundError)
            {
                throw new EntityNotFoundErrorCusto(e);
            }
            else if(e instanceof MusicAlreadyInPlaylistError)
            {
                throw new MusicAlreadyInPlaylistError();
            }
            throw new InternalServerError(e);
        }
    }
    else 
    {
        throw new MissingArgumentException(new Error("Missing Argument")); 
    }
}
