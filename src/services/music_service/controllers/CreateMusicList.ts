import { Message } from "amqp-ts";
import { MusicList } from '../models/MusicList';
import { Playlist } from '../models/Playlist';
import { Album } from '../models/Album';
import { getMongoRepository } from 'typeorm';
import InternalServerError from '@/shared/error/InternalServerError';
import MissingArgumentError from '@/shared/error/MissingArgumentError';

export async function createPlaylist(body: any, message: Message) {
    try {
        console.log()
        let playlist = new Playlist();
        playlist.owner = body.user._id;
        playlist.tracks = [];
        playlist.name = body.name;
        try {
            return await getMongoRepository(Playlist).save(playlist)
        }
        catch (e) {
            throw new InternalServerError(e);
        }

    }
    catch (e) {
        throw new MissingArgumentError(e);
    }
}

export async function createAlbum(body: any, message: Message) {
    try {
        let album = new Album();
        album.owner = body.user._id;
        album.cover = body.cover;
        album.tracks = [];
        album.name = body.name;
        try {
            return await getMongoRepository(Album).save(album);
        }
        catch (e) {
            throw new InternalServerError(e);
        }
    }
    catch (e) {
        throw new MissingArgumentError(e);
    }

}

function createMusicList(list: MusicList, body: any): void {
    list.name = body.name;
}