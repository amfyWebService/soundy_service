import getTracks from "./controllers/GetTracks";
import { BaseService } from "../BaseService";
import { Route } from "../Route";
import { Connection } from "amqp-ts";
import { registerTracks } from './controllers/RegisterTrack';
import { addTrackToPlaylist, addTrackToAlbum } from './controllers/AddTrackToMusicList';
import {createAlbum,createPlaylist} from './controllers/CreateMusicList';

export class MusicService extends BaseService {
    constructor(channel: Connection) {
        super(
            channel,
            [
                {
                    name: "getTracks",
                    method: getTracks
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
            ]);
            

    }

}