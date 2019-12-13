import { Entity, ObjectID, ObjectIdColumn, Column, } from "typeorm";
import { Track } from "./Track";
import { MusicList } from './MusicList';
import MusicAlreadyInPlaylistError from '../error/MusicAlreadyInPlaylistError';

@Entity()
export class Playlist implements MusicList {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    name: string;

    @Column(type => Track)
    tracks: Track[];

    @Column()
    owner: string;

    /*
     * Return true if one track as the same id than the parameter value
     */
    isTrackInMusicList(trackID: string | ObjectID) {
        for (let item of this.tracks) {
            if (item._id.toString() == trackID) {
                throw new MusicAlreadyInPlaylistError();
            }
        }
    }

}