import { GcloudBase } from "../GcloudBase";
declare type IListResult = {
    service: string;
    version: string;
    id: string;
    vmStatus: string;
    debugMode: string;
};
declare type IDefaultArgv = {
    service: string;
    version: string;
};
declare type IListArgv = {
    filter?: string;
    limit?: number;
    pageSize?: number;
    sortBy?: string;
    uri?: boolean;
};
export declare class GcloudAppInstances extends GcloudBase {
    commandPrefix: string;
    list(argv?: IListArgv): Promise<IListResult[]>;
    describe(instance: string, argv: IDefaultArgv): Promise<string>;
    enableDebug(instance: string, argv: IDefaultArgv): Promise<string>;
    disableDebug(instance: string, argv: IDefaultArgv): Promise<string>;
    ssh(instance: string, command: string, argv: IDefaultArgv): Promise<string>;
    delete(instance: string, argv: IDefaultArgv): Promise<string>;
}
export {};
