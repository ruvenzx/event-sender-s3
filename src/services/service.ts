import { S3Transferer } from "../transferers/s3.transferer";
import { APIService } from "./service.types";

export class Service implements APIService {

    transferer: S3Transferer

    constructor(transferer: S3Transferer) {

        this.transferer = transferer
    }

    getData() {
        return this.transferer.getData
    }
}