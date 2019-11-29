import { Entity, ObjectIdColumn, ObjectID, Column } from 'typeorm';
import { Track } from './Track';

@Entity()
export class MusicList
{

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name : string;

    @Column(type => Track)
    tracks : Track[];
}