import { Column, Entity, ObjectIdColumn, ObjectID } from "typeorm";
@Entity()
export class Track
{
    @ObjectIdColumn()
    id: ObjectID;
    
    @Column()
    genre : string;

    @Column()
    artist : string;

    @Column()
    cover : string;

    @Column()
    link : string;
}