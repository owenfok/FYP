import { GcloudBase } from "../GcloudBase";
import { IStandardListArgv } from "../types";
declare type IListResult = {
    name: string;
    location: string;
    masterVersion: string;
    masterIp: string;
    machineType: string;
    nodeVersion: string;
    numNodes: string;
    status: string;
};
declare type IDefaultArgv = {
    zone?: string;
    region?: string;
};
declare type IListArgv = IDefaultArgv & IStandardListArgv;
declare type ICreateArgv = IDefaultArgv & {
    scopes: string;
    enableStackdriverKubernetes: boolean;
    machineType: string;
    addons: string;
};
export declare class GcloudContainerClusters extends GcloudBase {
    commandPrefix: string;
    list(argv?: IListArgv): Promise<IListResult[]>;
    create(clusterName: string, argv: ICreateArgv): Promise<string>;
    describe(clusterName: string, argv: IDefaultArgv): Promise<any>;
    delete(clusterName: string, argv: IDefaultArgv): Promise<void>;
}
export {};
