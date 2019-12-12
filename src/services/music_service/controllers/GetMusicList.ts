import { Message } from 'amqp-ts';
import { Playlist } from '../models/Playlist';
import { getMongoRepository } from 'typeorm';
import EntityNotFoundErrorCusto from '@/shared/error/EntityNotFoundError';
import { Album } from '../models/Album';


export async function getPlaylistByID(body : any, message : Message)
{
    try
    {
        return await getMongoRepository(Playlist).findOneOrFail(body.playlistID);
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
        return await getMongoRepository(Album).findOneOrFail(body.albumID);
    }
    catch(e)
    {
        throw new EntityNotFoundErrorCusto(e);
    }
}

export async function getAlbumsByUserID(body : any, message : Message)
{
    try
    {
        return await getMongoRepository(Album).find({
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

export async function getPlaylistsByUserID(body : any, message : Message)
{
    try
    {
        return await getMongoRepository(Playlist).find({
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