import * as Amqp from "amqp-ts";
import { UserService } from "./services/user_service/UserService";

function main() : void
{
  let connection = new Amqp.Connection("amqp://localhost:8080");
  new UserService(connection)
}

main();

