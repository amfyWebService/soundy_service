import { Message } from "amqp-ts";
import { MusicList } from '../models/MusicList';
import { Playlist } from '../models/Playlist';
import { Album } from '../models/Album';
import { getMongoRepository, MongoRepository } from 'typeorm';
import InternalServerError from '@/shared/error/InternalServerError';
import MissingArgumentException from '@/shared/error/MissingArgumentException';

export function createPlaylist (body : any,message : Message) {
    try
    {
        let playlist = new Playlist();
        playlist.owner = body.owner;
        createMusicList(playlist, body);
        try
        {
            getMongoRepository(Playlist).save(playlist);
            return {playlist : playlist};
        }
        catch(e)
        {
            throw new InternalServerError(e);
        }
        
    }
    catch(e)
    {
        throw new MissingArgumentException(e);
    }
}

export function createAlbum (body : any,message : Message) {
    try
    {
        let album = new Album();
        album.artist = body.artist;
        album.cover = body.cover;
        createMusicList(album, body);
        try
        {
            getMongoRepository(Album).save(album);
            return {album : album}
        }
        catch(e)
        {
            throw new InternalServerError(e);
        }
    }
    catch(e)
    {
        throw new MissingArgumentException(e); 
    }
    
}

function createMusicList(list : MusicList, body : any) : void
{
    list.name = body.name;
}