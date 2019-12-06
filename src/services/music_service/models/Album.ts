import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';
import { MusicList } from './MusicList';
import { Track } from './Track';
import { format } from 'path';
import MusicAlreadyInPlaylistError from '../error/MusicAlreadyInPlaylistError';

@Entity()
export class Album implements MusicList
{
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    name : string;

    @Column(type => Track)
    tracks : Track[];
    @Column()
    artist : String;

    @Column()
    cover : string;

    /*
    * Return true if one track as the same id than the parameter value
    */
    isTrackInMusicList(id : string): void 
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