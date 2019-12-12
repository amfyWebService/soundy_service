import { Column, Entity, ObjectIdColumn, ObjectID } from "typeorm";
@Entity()
export class Track
{
    @ObjectIdColumn()
    id: ObjectID;
    
    @ObjectIdColumn()
    owner : ObjectID;

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