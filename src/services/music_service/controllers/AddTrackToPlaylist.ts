import { Message } from 'amqp-ts';
import { getMongoRepository, Entity, ObjectType } from 'typeorm';
import { Track } from '../models/Track';
import { Playlist } from '../models/Playlist';
import MissingArgumentError from '@/shared/error/MissingArgumentError';
import InternalServerError from '@/shared/error/InternalServerError';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';
import EntityNotFoundErrorCusto from "@/shared/error/EntityNotFoundError"
import MusicAlreadyInPlaylistError from '../error/MusicAlreadyInPlaylistError';
import { Album } from '../models/Album';


export async function addTrackToPlaylist(body: any, message: Message) {
    if (body.playlistID && body.trackID) {
        return addTrackToMusicList(Playlist, body.playlistID, body.trackID);
    }
    else {
        throw new MissingArgumentError(new Error("Missing Argument"));
    }
}

export function addTrackToAlbum(body: any, message: Message) {
    if (body.albumID && body.trackID) {
        return addTrackToMusicList(Album, body.albumID, body.trackID);
    }
    else {
        throw new MissingArgumentError(new Error("Missing Argument"));
    }
}

async function addTrackToMusicList(entityClass: ObjectType<any> | string, musicListId: string, trackId: string) {
    try {
        const [musicList, track] = await Promise.all([getMongoRepository(entityClass).findOneOrFail(musicListId), getMongoRepository(Track).findOneOrFail(trackId)]);
        musicList.isTrackInMusicList(trackId)
        musicList.tracks.push(track);
        await getMongoRepository(entityClass).replaceOne({ _id: musicList._id }, { ...musicList })

        return await getMongoRepository(entityClass).findOneOrFail(musicList._id);
    }
    catch (e) {
        if (e instanceof EntityNotFoundError) {
            throw new EntityNotFoundErrorCusto(e);
        }
        else if (e instanceof MusicAlreadyInPlaylistError) {
            throw new MusicAlreadyInPlaylistError();
        }
        throw new InternalServerError(e);
    }
}
