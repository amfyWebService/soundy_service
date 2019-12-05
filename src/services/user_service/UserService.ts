import { BaseService } from "../BaseService";
import { Connection } from "amqp-ts";
import Login from "./controllers/Login";
import Register from "./controllers/Register";
import authenticate from './controllers/Authenticate';

export class UserService extends BaseService {
    constructor(channel: Connection) {
        super(
            channel,
            [
                {
                    name: "login",
                    method: Login
                },
                {
                    name: "register",
                    method : Register
                },
                {
                    name: "authenticate",
                    method : authenticate
                }
            ]);
            

    }

}