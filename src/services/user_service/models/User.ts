import { Entity, ObjectID, ObjectIdColumn, Column, BeforeInsert, BeforeUpdate, Unique } from "typeorm";
import { createHmac } from "crypto";
import {IsEmail, IsDate} from "class-validator";

@Entity()
export default class User {

    @ObjectIdColumn()
    id: ObjectID;

    @Column({ select: false })
    public password: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        if (this.password) {
            this.password = createHmac('sha256', this.password).digest('hex');
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