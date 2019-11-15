import Login from "./controllers/Login";
import { BaseService } from "BaseService";
import { Route } from "Route";
import { Connection } from "amqp-ts";

export class UserService extends BaseService {
    constructor(channel: Connection) {
        super(
            channel,
            "UserExchange",
            [
                {
                    name: "login",
                    method: Login
                }
            ]);

    }
}