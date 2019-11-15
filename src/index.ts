import * as Amqp from "amqp-ts";
import { UserService } from "services/user_service/UserService";

function main() {
    const connection = new Amqp.Connection("amqp://localhost");
    new UserService(connection);
}