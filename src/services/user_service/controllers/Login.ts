import { Message } from "amqp-ts";
import crypto from "crypto";
import {hash} from "bcrypt"
import { getMongoManager } from "typeorm";
import User from "../models/User";

export default function (message : Message){
    let info = JSON.parse(message.getContent());
    let user = new User();
    user.mail = info.mail;
    user.hashPassword(info.password);
    let manager =  getMongoManager();
    return "ok";
}
