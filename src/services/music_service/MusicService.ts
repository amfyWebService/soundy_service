import getTracks from "./controllers/GetTracks";
import { BaseService } from "../BaseService";
import { Route } from "../Route";
import { Connection } from "amqp-ts";
import { registerTracks } from './controllers/RegisterTrack';
import { addTrackToPlaylist } from './controllers/AddTrackToPlaylist';
import CreatePlaylist from './controllers/CreatePlaylist';

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
                    name: "createPlaylist",
                    method: CreatePlaylist
                }
            ]);
            

    }

}