import { Message } from "amqp-ts";
import { getMongoRepository } from "typeorm";
import { EntityNotFoundError } from "typeorm/error/EntityNotFoundError";
import User from "../models/User";
import {compareSync} from "bcrypt"
import jwt from "jsonwebtoken";
import BadLoginError from '../error/BadLoginError';

export default async function login (body: any, message : Message){
    try
    {
        let myUser = await getMongoRepository(User).findOneOrFail({ mail : body.username });
        if(compareSync(body.password , myUser.password))
        {
            const token = generateToken(myUser);
            return {token: token, user: myUser}
        }
        else
        {
            throw new BadLoginError();
        }
    }
    catch(e)
    {
        if(e instanceof EntityNotFoundError){
            throw new BadLoginError();
        }

        else throw e;
    }

}

function generateToken(user: User): string {
    const token = jwt.sign({id: user.id}, process.env.JWT_KEY, {expiresIn: "7d"});
    return token;
}
