import { Entity, Column } from 'typeorm';
import { MusicList } from './MusicList';

@Entity()
export class Album extends MusicList
{
    @Column()
    artist : String;

    @Column()
    cover : string;
}