import { Message } from "amqp-ts";

export default function (message : Message) : string{
    console.log("ok" + message);
    return "tamere";
}
