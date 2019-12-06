import { Entity, ObjectID, ObjectIdColumn, Column, BeforeInsert, BeforeUpdate, Unique } from "typeorm";
import {hash, hashSync} from "bcrypt"
import {IsEmail, IsDate, IsDateString, IsISO8601} from "class-validator";
import { json } from 'body-parser';

@Entity()
export default class User {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    public password: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword()  {
        if (this.password) {
            this.password = hashSync(this.password,10);
        }
    }

    @Column()
    bio : string;

    @Column({ unique: true })
    @IsEmail()
    mail : string;

    @IsISO8601()
    @Column()
    birthday : Date;
    
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    toJson()
    {
        return JSON.stringify(this);
    }

}