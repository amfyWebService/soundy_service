import { Entity, ObjectID, ObjectIdColumn, Column, BeforeInsert, BeforeUpdate, Unique } from "typeorm";
import {hash, hashSync} from "bcrypt"
import {IsEmail, IsDate} from "class-validator";

@Entity()
export default class User {

    @ObjectIdColumn()
    id: ObjectID;

    @Column({ select: false })
    public password: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(password ?: string )  {
        if (this.password) {
            this.password = hashSync(this.password,10);
        }
    }

    @Column()
    bio : string;

    @Column({ unique: true })
    @IsEmail()
    mail : string;

    @IsDate()
    @Column()
    birthday : string;
    
    @Column()
    firstName: string;

    @Column()
    lastName: string;

}