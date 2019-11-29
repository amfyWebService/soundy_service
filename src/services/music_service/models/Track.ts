import { Column, Entity, ObjectIdColumn, ObjectID } from "typeorm";
@Entity()
export class Track
{
    @ObjectIdColumn()
    id: ObjectID;
    
    @Column()
    genre : string;

    @ObjectIdColumn()
    owner : ObjectID;

    @Column()
    cover : string;

    @Column()
    link : string;

    toJson() :string
    {
        return JSON.stringify(this);
    }
}