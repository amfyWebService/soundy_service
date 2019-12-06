import { Entity, ObjectID, ObjectIdColumn, Column,  } from "typeorm";
import { Track } from "./Track";
import { MusicList } from './MusicList';
import MusicAlreadyInPlaylistError from '../error/MusicAlreadyInPlaylistError';

@Entity()
export class Playlist implements MusicList
{
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    name : string;

    @Column(type => Track)
    tracks : Track[];
    
    @Column()
    owner : String;

     /*
    * Return true if one track as the same id than the parameter value
    */
   isTrackInMusicList(id : string)
   {
       for(var item of this.tracks)
       {
           if(item.id.toString() == id)
           {
               throw new MusicAlreadyInPlaylistError();
           }
       }
   }

}