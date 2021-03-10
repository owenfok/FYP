import { GcloudBase } from "../GcloudBase";
export declare class GcloudDatastoreIndexes extends GcloudBase {
    commandPrefix: string;
    create(filename: string): Promise<string>;
    cleanup(filename: string): Promise<string>;
    list(): Promise<string>;
    describe(indexId: string): Promise<string>;
}
