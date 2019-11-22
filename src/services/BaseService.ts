import { Connection, Exchange, Queue, Message } from "amqp-ts";
import { Route } from "./Route";

export class BaseService {


    constructor(channel: Connection, routes: Route[]) {
        const exchange = channel.declareExchange("soundy_exchange");
 
        for (let route of routes) {
            let queue = channel.declareQueue(route.name, {durable:true});
            queue.bind(exchange);
            queue.activateConsumer((message: Message) => {
                return route.method(message);
                
            },{noAck: true});
        }
    }
}