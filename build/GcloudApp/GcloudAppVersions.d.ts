import { GcloudBase } from "../GcloudBase";
import { IStandardListArgv } from "../types";
declare type IListResult = {
    service: string;
    versionId: string;
    trafficSplit: string;
    lastDeployed: string;
    servingStatus: string;
};
declare type IDescribeResult = {
    createTime: string;
    createdBy: string;
    deployment: {
        files: {
            [key: string]: {
                sha1Sum: string;
                sourceUrl: string;
            };
        };
    };
    diskUsageBytes: string;
    env: string;
    handlers: Array<{
        authFailAction: string;
        login: string;
        script: object;
        securityLevel: string;
        urlRegex: string;
    }>;
    id: string;
    instanceClass: string;
    name: string;
    network: object;
    runtime: string;
    runtimeChannel: string;
    servingStatus: string;
    threadsafe: true;
    versionUrl: string;
};
declare type IDefaultArgv = {
    service?: string;
};
declare type IDescribeArgv = {
    service: string;
};
declare type IListArgv = IStandardListArgv & {
    hideNoTraffic?: boolean;
    service?: string;
};
declare type IBrowseArgv = {
    launchBrowser?: boolean;
    version?: string;
};
export declare class GcloudAppVersions extends GcloudBase {
    commandPrefix: string;
    browse(services: string, argv?: IBrowseArgv): Promise<string>;
    delete(version: string, argv?: IDefaultArgv): Promise<string>;
    describe(version: string, argv: IDescribeArgv): Promise<IDescribeResult>;
    list(argv?: IListArgv): Promise<IListResult[]>;
    migrate(version: string, argv?: IDefaultArgv): Promise<string>;
    start(version: string, argv?: IDefaultArgv): Promise<string>;
    stop(version: string, argv?: IDefaultArgv): Promise<string>;
}
export {};
