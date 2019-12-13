import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';
import { MusicList } from './MusicList';
import { Track } from './Track';
import { format } from 'path';
import MusicAlreadyInPlaylistError from '../error/MusicAlreadyInPlaylistError';

@Entity()
export class Album implements MusicList {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    name: string;

    @Column(type => Track)
    tracks: Track[];

    @Column()
    owner: string;

    @Column()
    cover: string;

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