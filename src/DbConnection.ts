import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import User from "./services/user_service/models/User";
import { Track } from "./services/music_service/models/Track";
import { Playlist } from "./services/music_service/models/Playlist";
import { MusicList } from './services/music_service/models/MusicList';

var  _connection: Connection;
export async function connect() {  
  _connection = await createConnection({
    type: "mongodb",
    synchronize: true,
    host: process.env.MONGO_SERVER,
    port: parseInt(process.env.MONGO_PORT),
    database: process.env.MONGO_DATABASE,
    entities: [
      User,
      Track,
      Playlist,
      MusicList
  ],
  useUnifiedTopology: true
   });
}

export function connected() { 
  return _connection.isConnected;
}
