import { Connection, Exchange, Queue, Message } from "amqp-ts";
import { Route } from "./Route";

export class BaseService {


    constructor(channel: Connection, exchangeName: string, routes: Route[]) {
        var exchange = channel.declareExchange(exchangeName);
 
        for (let route of routes) {
            var queue = channel.declareQueue(route.name, {durable:false});
            queue.bind(exchange);
            queue.activateConsumer((message: Message) => {
            return route.method(message);
            },{noAck: true});
        }
    }
}