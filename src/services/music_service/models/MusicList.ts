import { Track } from './Track';
import { ObjectID } from 'typeorm';

export interface MusicList
{

    name : string;

    owner: string;
    
    tracks : Track[];

    isTrackInMusicList(trackID: string | ObjectID);

}