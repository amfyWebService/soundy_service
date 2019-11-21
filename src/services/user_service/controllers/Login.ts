import { Message } from "amqp-ts";

export default function (message : Message){
    console.log("ok" + message);
}
