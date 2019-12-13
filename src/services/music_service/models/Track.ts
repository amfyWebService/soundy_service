import { Column, Entity, ObjectIdColumn, ObjectID, ObjectType } from "typeorm";
@Entity()
export class Track
{
    @ObjectIdColumn()
    _id: ObjectID;
    
    @Column()
    owner: string | ObjectID;

    @Column()
    title: string;

    @Column()
    cover: string;

    @Column()
    link: string;

    toJson() :string
    {
        return JSON.stringify(this);
    }

}