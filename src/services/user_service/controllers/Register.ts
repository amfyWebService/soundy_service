import { Message } from "amqp-ts";
import User from "../models/User";
import { getMongoManager } from "typeorm";
import { validate } from "class-validator";
import EntityValidationError from '@/shared/error/EntityValidationError';
import UserAlreadyExistError from '../error/UserAlreadyExistError';
import InternalServerError from '@/shared/error/InternalServerError';

const ERROR_NOT_UNIQUE_CODE = "11000";

export default async function (body: any, message: Message) {
    let user = new User();
    user.lastName = body.lastname;
    user.firstName = body.firstname;
    user.birthday = body.birthday;
    user.mail = body.mail;
    user.password = body.password;

    const validationErrors = await validate(user);
    if (validationErrors.length == 0) {
        try {
            const manager = getMongoManager();
            await manager.save(user);
            return {};
        }
        catch (e) {
            if (e.code == ERROR_NOT_UNIQUE_CODE) {
                throw new UserAlreadyExistError();
            }
            else {
                throw new InternalServerError(e);
            }
        }
    }
    throw new EntityValidationError();
}


