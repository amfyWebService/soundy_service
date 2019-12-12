import { Message } from 'amqp-ts';
import { Playlist } from '../models/Playlist';
import { getMongoRepository } from 'typeorm';
import EntityNotFoundErrorCusto from '@/shared/error/EntityNotFoundError';
import { Album } from '../models/Album';


export async function getPlaylistByID(body : any, message : Message)
{
    try
    {
        let playlist : Playlist = await getMongoRepository(Playlist).findOneOrFail(body.playlistID);
        return {playlist : playlist};
    }
    catch(e)
    {
        throw new EntityNotFoundErrorCusto(e);
    }
    
}

export async function getAlbumByID(body: any, message : Message)
{
    try
    {
        let album : Album = await getMongoRepository(Album).findOneOrFail(body.albumID);
        return {album : album};
    }
    catch(e)
    {
        throw new EntityNotFoundErrorCusto(e);
    }
}

export async function getAlbumByUserID(body : any, message : Message)
{
    try
    {
        let album : Array<Album> = await getMongoRepository(Album).find({
            where: {
              artist: {$eq: body.userID},
            }
          });
    }
    catch(e)
    {
        throw new EntityNotFoundErrorCusto(e);
    }
    
}

export async function getPlaylistByUserID(body : any, message : Message)
{
    try
    {
        let playlist : Array<Playlist> = await getMongoRepository(Playlist).find({
            where: {
              owner: {$eq: body.userID},
            }
          });
    }
    catch(e)
    {
        throw new EntityNotFoundErrorCusto(e);
    }
}