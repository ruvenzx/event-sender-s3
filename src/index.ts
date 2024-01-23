import { S3Provider } from "./providers/s3/s3.provider";
import { Service } from "./services/service";
import { APIController } from "./routers/router";
import { S3Transferer } from "./transferers/s3.transferer";
import express, {Express, Router} from "express";

class MainServer {

    private transferer: S3Transferer;
    private app: Express;

    constructor(transferer: S3Transferer) {
        this.transferer = transferer;
        this.app = this.initExpressServer();
    }

    initExpressServer() {
        const app = express();
          return app;
    }

    async start() {
        const service = new Service(this.transferer);
        const router =  Router();
        const controller = new APIController(router, service);
        this.app.use(router);
        await this.transferer.init();
    }

}

const provider = new S3Provider();
const transferer = new S3Transferer(provider);
const server = new MainServer(transferer);
server.start()