import { Message } from 'amqp-ts';
import jwt from "jsonwebtoken";
import { getMongoRepository, ObjectID } from 'typeorm';
import User from '../models/User';
import InvalidTokenError from '../error/InvalidTokenError';

export default function authenticate(body: {token: string}, message: Message) {
    try {
        let token = body.token.split(" ").pop();
        const decoded: {id: string} = jwt.verify(token, process.env.JWT_KEY) as any;
        return getMongoRepository(User).findOneOrFail(decoded.id);
    } catch(e){
        throw new InvalidTokenError();
    }
}