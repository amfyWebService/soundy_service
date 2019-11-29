import getTracks from "./controllers/GetTracks";
import { BaseService } from "../BaseService";
import { Route } from "../Route";
import { Connection } from "amqp-ts";
import { registerTracks } from './controllers/RegisterTrack';

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
                    name: "registerTracks",
                    method : registerTracks
                }
            ]);
            

    }

}