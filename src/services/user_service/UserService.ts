import Login from "./controllers/Login";
import { BaseService } from "../BaseService";
import { Route } from "../Route";
import { Connection } from "amqp-ts";
import Register from "./controllers/Register";

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
                }
            ]);
            

    }

}