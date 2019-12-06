import { Entity, ObjectIdColumn, ObjectID, Column } from 'typeorm';
import { Track } from './Track';

export interface MusicList
{

    name : string;

    tracks : Track[];

    isTrackInMusicList(trackID)

}