import { Entity, ObjectID, ObjectIdColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";
import { type } from "os";
import { Track } from "./Track";
import { MusicList } from './MusicList';

@Entity()
export class Playlist extends MusicList
{
    @Column()
    owner : String;

}