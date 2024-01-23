import { S3Provider } from "../providers/s3/s3.provider";
import { Transferer } from "./transferer.interface";

export class S3Transferer implements Transferer {

    provider: S3Provider;

    private data : Record<string, any>;

    constructor(provider: S3Provider) {
        this.provider = provider;
        this.data = {};
    }

    
    private async loop() {
        this.data = await this.provider.getBucketItems('cyera-assignments-bucket', '1');
    }

    async init() {
        setInterval(this.loop.bind(this), 1000);
    }

    async getData(){
        return this.data;
    }

}