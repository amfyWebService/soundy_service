import { Connection, Exchange, Queue, Message } from "amqp-ts";
import { Route } from "./Route";
import BaseError from '@/shared/error/BaseError';
import InternalServerError from '@/shared/error/InternalServerError';
import { logger } from '@/shared';

export class BaseService {

    constructor(channel: Connection, routes: Route[]) {
        logger.info("Initialization of " + this.constructor.name);

        const exchange = channel.declareExchange("soundy_exchange");
        
        for (let route of routes) {
            let queue = channel.declareQueue(route.name, {durable:true});
            queue.bind(exchange);
            queue.activateConsumer(async (message: Message) => {
                
                try {
                    let body = JSON.parse(message.getContent().toString());
                    const ret = await route.method(body, message);
                    if(typeof ret === "object"){
                        return JSON.stringify(ret);
                    } else {
                        return ret;
                    }
                } catch(e){
                    if(!(e instanceof BaseError)){
                        e = new InternalServerError(e);
                    }
                    
                    return JSON.stringify({
                        error: e.toJson()
                    });
                }
            },{noAck: true});
        }
    }
}