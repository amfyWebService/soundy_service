import { Entity, ObjectID, ObjectIdColumn, Column, BeforeInsert, BeforeUpdate, Unique } from "typeorm";
import { hashSync } from "bcrypt"
import { IsEmail, IsISO8601 } from "class-validator";

@Entity()
export default class User {

    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    public password: string;

    @BeforeInsert()
    hashPassword() {
        if (this.password) {
            this.password = hashSync(this.password, 10);
        }
    }

    @Column()
    bio: string;

    @Column({ unique: true })
    @IsEmail()
    mail: string;

    @IsISO8601()
    @Column()
    birthday: Date;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    toJson() {
        return JSON.stringify(this);
    }

}