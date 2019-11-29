import { Message } from 'amqp-ts';
import jwt from "jsonwebtoken";

export default function authenticate(message: Message) {
    try {
        const body = JSON.parse(message.getContent());
        const decoded = jwt.verify(body.token, process.env.JWT_KEY);
    } catch(e){

    }
}