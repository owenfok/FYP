import { GcloudBase } from "./GcloudBase";
declare type IResourceDescriptors = {
    name: string;
    description: string;
    key: string;
};
declare type IListArgv = {
    limit?: number;
    sortBy?: string[];
};
declare type IReadFilter = {
    ["resource.type"]?: string;
};
declare type IReadArgv = {
    limit?: number;
    sortBy?: string[];
};
export declare class GcloudLogging extends GcloudBase {
    commandPrefix: string;
    listLogs(argv?: IListArgv): Promise<string[]>;
    resourceDescriptors(): Promise<IResourceDescriptors[]>;
    read(filter: IReadFilter, argv?: IReadArgv): Promise<string>;
    write(logName: string, data: any): Promise<string>;
}
export {};
