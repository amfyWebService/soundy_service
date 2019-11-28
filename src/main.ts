import * as Amqp from "amqp-ts";
import { UserService } from "./services/user_service/UserService";
import { logger } from './shared';

function main() : void
{
  const connection = new Amqp.Connection(process.env.AMQP_URL);
  const userService = new UserService(connection);

  logger.info("Server started on amqp: " + process.env.AMQP_URL);
}

main();

