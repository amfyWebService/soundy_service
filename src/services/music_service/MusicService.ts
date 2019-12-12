import {getTrack} from "./controllers/GetTracks";
import { BaseService } from "../BaseService";
import { Route } from "../Route";
import { Connection } from "amqp-ts";
import { registerTracks } from './controllers/RegisterTrack';
import { addTrackToPlaylist, addTrackToAlbum } from './controllers/AddTrackToMusicList';
import {createAlbum,createPlaylist} from './controllers/CreateMusicList';
import { getPlaylistByID, getAlbumByID, getAlbumByUserID, getPlaylistByUserID } from './controllers/getMusicList';

export class MusicService extends BaseService {
    constructor(channel: Connection) {
        super(
            channel,
            [
                {
                    name: "getTracks",
                    method: getTrack
                },
                {
                    name: "registerTrack",
                    method : registerTracks
                },
                {
                    name: "addToPlaylist",
                    method: addTrackToPlaylist
                },
                {
                    name : "addToAlbum",
                    method : addTrackToAlbum
                },
                {
                    name: "createPlaylist",
                    method: createPlaylist
                },
                {
                    
                    name: "createAlbum",
                    method: createAlbum
                }
                ,
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
                    method : getAlbumByUserID
                },
                {
                    name : "getPlaylistsByUserID",
                    method : getPlaylistByUserID
                }
            ]);
            

    }

}