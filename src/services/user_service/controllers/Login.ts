import { Message } from "amqp-ts";
import { getMongoRepository } from "typeorm";
import User from "../models/User";
import { generateJSON } from '@/services/services_utils/Utils';
import {compareSync} from "bcrypt"

const CODE_SUCCESS_LOGIN = "success";
const CODE_ERROR_LOGIN = "error";
const MESSAGE_SUCCESS_LOGIN = "Vous êtes connecté";
const MESSAGE_ERROR_LOGIN = "Mail ou mot de passe incorrect"
const MESSAGE_ERROR_USER_NOT_FOUND = "Utilisateur non trouvé"

export default async function (message : Message){
    let info = JSON.parse(message.getContent());
    try
    {
        let myUser = await getMongoRepository(User).findOneOrFail({ mail : info.mail });
        if(compareSync(info.password , myUser.password))
        {
            return generateJSON(CODE_SUCCESS_LOGIN, myUser.toJson());
        }
        else
        {
            return generateJSON(CODE_ERROR_LOGIN,MESSAGE_ERROR_LOGIN);
        }
        
        
    }
    catch(e)
    {
       return generateJSON(CODE_ERROR_LOGIN,MESSAGE_ERROR_USER_NOT_FOUND);
    }

}
