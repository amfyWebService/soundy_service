import * as Amqp from "amqp-ts";
import { UserService } from "./services/user_service/UserService";
import {connect, connected} from "./DbConnection"


async function main() 
{
  let connection = new Amqp.Connection("amqp://localhost:8080");
  new UserService(connection); 
  connect();  
}


main();

