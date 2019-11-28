import { Message } from "amqp-ts";
import User from "../models/User";
import { getMongoManager } from "typeorm";
import { validate } from "class-validator";
import { generateJSON } from "../../services_utils/Utils";

const ERROR_NOT_UNIQUE_CODE = "11000";
const SUCCESS = "success";
const CODE_NOT_UNIQUE_MAIL = "duplicated_mail";
const CODE_VALIDATE_FAILED = "validation_error";
const MESSAGE_USER_REGISTERED = "Votre compte à été enregistré";
const MESSAGE_NOT_UNIQUE_MAIL = "Un compte avec cette adresse mail existe déjà";


export default async function (message : Message){
    let info = JSON.parse(message.getContent());
    let user = new User();
    user.lastName = info.lastname;
    user.firstName = info.firstname;
    user.birthday = info.birthday;
    user.mail = info.mail;
    user.password = info.password;
    if(await validate(user))
    {
        try
        {
            let manager =  getMongoManager();
            await manager.save(user); 
            return generateJSON(SUCCESS,MESSAGE_USER_REGISTERED);
        }
        catch(e)
        {
            if(e.code == ERROR_NOT_UNIQUE_CODE)
            {
                return generateJSON(CODE_NOT_UNIQUE_MAIL,MESSAGE_NOT_UNIQUE_MAIL)
            }
        }
    }
    return generateJSON(CODE_VALIDATE_FAILED,"");
}


