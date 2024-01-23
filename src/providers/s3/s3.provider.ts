import { S3 } from "@aws-sdk/client-s3";
import { Provider } from "../provider.interface";

export class S3Provider implements Provider {

    client: S3;

    constructor() {
        this.client = new S3();
    }

    async getBucketItems(bucketName: string, folderName: string): Promise<Record<string, any>>{
        // List all of the files in the folder
        const listObjectsRes = await this.client.listObjectsV2({Bucket: bucketName, Prefix: folderName, Delimiter: '/'})
        
        if (listObjectsRes.Contents) {
            return listObjectsRes.Contents.map(file => {
                const item = this.getItem(bucketName, file.Key as string)
                return {[file.Key as string]: item}
            });
        } else {
            return [];
        }
    }

    async getItem(bucketName: string, fileName: string) {
        // Get Specific Item Contents
            const res = await this.client.getObject({Bucket: bucketName, Key: fileName});
            return res.Body
    }

}