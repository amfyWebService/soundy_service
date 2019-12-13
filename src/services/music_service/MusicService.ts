import {getTrack} from "./controllers/GetTrack";
import { BaseService } from "../BaseService";
import { Connection } from "amqp-ts";
import { createTrack } from './controllers/CreateTrack';
import { updateTrack } from './controllers/UpdateTrack';
import { addTrackToPlaylist, addTrackToAlbum } from './controllers/AddTrackToPlaylist';
import {createAlbum,createPlaylist} from './controllers/CreateMusicList';
import { getPlaylistByID, getAlbumByID, getAlbumsByUserID, getPlaylistsByUserID } from './controllers/GetMusicList';

export class MusicService extends BaseService {
    constructor(channel: Connection) {
        super(
            channel,
            [
                {
                    name: "getTrack",
                    method: getTrack
                },
                {
                    name: "createTrack",
                    method : createTrack
                },
                {
                    name: "updateTrack",
                    method : updateTrack
                },
                {
                    name: "addTrackToPlaylist",
                    method: addTrackToPlaylist
                },
                {
                    name : "addTrackToAlbum",
                    method : addTrackToAlbum
                },
                {
                    name: "createPlaylist",
                    method: createPlaylist
                },
                {
                    name: "createAlbum",
                    method: createAlbum
                },
                {
                    name : "getPlaylistByID",
                    method : getPlaylistByID
                },
                {
                    name : "getAlbumByID",
                    method : getAlbumByID
                },
                {
                    name : "getAlbumsByUserID",
                    method : getAlbumsByUserID
                },
                {
                    name : "getPlaylistsByUserID",
                    method : getPlaylistsByUserID
                }
            ]);
            

    }

}