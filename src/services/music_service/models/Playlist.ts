import { Entity, ObjectID, ObjectIdColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";
import { type } from "os";
import { Track } from "./Track";

@Entity()
export class Playlist
{

    @ObjectIdColumn()
    id: ObjectID;

    @Column(type => Track)
    tracks : Track[];

}