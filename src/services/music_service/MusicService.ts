import {getTrack} from "./controllers/GetTrack";
import { BaseService } from "../BaseService";
import { Connection } from "amqp-ts";
import { registerTrack } from './controllers/RegisterTrack';
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
                    name: "registerTrack",
                    method : registerTrack
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