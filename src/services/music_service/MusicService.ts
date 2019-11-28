import getTracks from "./controllers/GetTracks";
import { BaseService } from "../BaseService";
import { Route } from "../Route";
import { Connection } from "amqp-ts";

export class MusicService extends BaseService {
    constructor(channel: Connection) {
        super(
            channel,
            [
                {
                    name: "getTracks",
                    method: getTracks
                }
            ]);
            

    }

}