import { Message } from "amqp-ts";

export default function (body : any , message : Message) : string{
    console.log("ok" + message);
    return "tamere";
}
