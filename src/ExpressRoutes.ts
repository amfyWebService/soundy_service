import app, {App} from "@/main";
import {Request, Response} from "express";

export default class ExpressRoutes {
    constructor(app: App){
        app.expressApp.all("/ping", this.ping);
    }

    public ping(req: Request, res: Response){
        res.header("content-type", "application/json");
        res.send({
            "amqp_is_connected": app.amqpConnection.isConnected
        });
    }
}