import * as Amqp from "amqp-ts";
import { UserService } from "./services/user_service/UserService";
import { logger } from './shared';
import express, {Application} from "express";
import bodyParser from 'body-parser';
import ExpressRoutes from './ExpressRoutes';
import {connect} from "@/DbConnection";
import { MusicService } from './services/music_service/MusicService';

export class App {
  
  public expressApp: Application;
  public amqpConnection: Amqp.Connection;

  constructor() {
    this.expressApp = express();
    this.setExpressConfig();
    new ExpressRoutes(this);
  }

  private setExpressConfig(){
    //Allows us to receive requests with data in json format
    this.expressApp.use(bodyParser.json({ limit: '50mb' }));
    //Allows us to receive requests with data in x-www-form-urlencoded format
    // this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  }

  async run(){
    await Promise.all([
      this.runExpress(parseInt(process.env.PORT || '3000')),
      this.runAmqp(process.env.AMQP_URL || ''),
      connect(),
    ]);

    logger.info('Server started: { Express port: ' + process.env.PORT + ", Amqp url: " + process.env.AMQP_URL + " }");
  }

  private async runExpress(port:number){
    return new Promise((resolve, reject) => {
      this.expressApp.listen(process.env.PORT, () => {
        resolve();
      });
    });
  }

  private async runAmqp(url:string){
    logger.info("Run AMQP");
    this.amqpConnection = new Amqp.Connection(process.env.AMQP_URL);
    const userService = new UserService(this.amqpConnection);
    const musicService = new MusicService(this.amqpConnection);
  }
}

const app = new App();
app.run();

export default app;

