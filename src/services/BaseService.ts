import { Connection, Exchange, Queue, Message } from "amqp-ts";
import { Route } from "./Route";

export class BaseService {


    constructor(channel: Connection, routes: Route[]) {
     
 
        for (let route of routes) {
            var queue = channel.declareQueue(route.name, {durable:false});
      
            queue.activateConsumer((message: Message) => {
                return route.method(message);
                
            },{noAck: true});
        }
    }
}