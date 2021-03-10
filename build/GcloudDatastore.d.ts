import { GcloudBase } from "./GcloudBase";
import { GcloudDatastoreIndexes } from "./GcloudDatastore/GcloudDatastoreIndexes";
declare type IImportExportArgv = {
    kinds?: string[];
    namespaces?: string[];
    operationLabels?: string[];
};
export declare class GcloudDatastore extends GcloudBase {
    commandPrefix: string;
    export(outputUrlPrefix: string, argv: IImportExportArgv): Promise<string>;
    import(outputUrlPrefix: string, argv?: IImportExportArgv): Promise<string>;
    indexes(): GcloudDatastoreIndexes;
}
export {};
