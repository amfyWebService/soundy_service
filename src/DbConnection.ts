import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import User from "./services/user_service/models/User";
import { Track } from "./services/music_service/models/Track";
import { Playlist } from "./services/music_service/models/Playlist";
import * as Amqp from "amqp-ts";




var  _connection: Connection;
export async function connect() {
  _connection = await createConnection({
    type: "mongodb",
    synchronize: true,
    host: "localhost",
    port: 27017,
    database: "admin",
    entities: [
      User,
      Track,
      Playlist
  ],
  useUnifiedTopology: true
   });
}

export function connected() { 
  return _connection.isConnected;
}
