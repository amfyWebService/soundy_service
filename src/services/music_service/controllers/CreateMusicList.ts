import { Message } from "amqp-ts";
import { MusicList } from '../models/MusicList';
import { Playlist } from '../models/Playlist';
import { Album } from '../models/Album';
import { getMongoRepository, MongoRepository } from 'typeorm';
import InternalServerError from '@/shared/error/InternalServerError';
import MissingArgumentException from '@/shared/error/MissingArgumentException';

export async function createPlaylist (body : any,message : Message) {
    try
    {
        let playlist = new Playlist();
        playlist.owner = body.owner;
        playlist.tracks = [];
        playlist.name = body.name;
        try
        {
            let playlist2 = await getMongoRepository(Playlist).save(playlist)
            return {playlist : playlist2};
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

export async function createAlbum (body : any,message : Message) {
    try
    {
        let album = new Album();
        album.artist = body.artist;
        album.cover = body.cover;
        album.tracks = [];
        album.name = body.name;
        try
        {
            let album2 = await getMongoRepository(Album).save(album);
            return {album : album2}
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