import { GcloudBase } from "../GcloudBase";
import { IGkeArgv, IManagedArgv } from "../GcloudRun";
import { IStandardListArgv } from "../types";
declare type IManagedListResult = {
    service: string;
    region: string;
    url: string;
    lastDeployedBy: string;
    lastDeployedAt: string;
};
declare type IGkeListResult = {
    service: string;
    namespace: string;
    url: string;
    lastDeployedBy: string;
    lastDeployedAt: string;
};
declare type IManagedListArgv = IManagedArgv & IStandardListArgv;
declare type IGkeListArgv = IGkeArgv & IStandardListArgv;
export declare class GcloudRunServices extends GcloudBase {
    commandPrefix: string;
    listManaged(argv: IManagedListArgv): Promise<IManagedListResult[]>;
    listGke(argv: IGkeListArgv): Promise<IGkeListResult[]>;
    describeManaged(serviceName: string, argv: IManagedArgv): Promise<string>;
    describeGke(serviceName: string, argv: IGkeArgv): Promise<string>;
    deleteManaged(serviceName: string, argv: IManagedArgv): Promise<string>;
    deleteGke(serviceName: string, argv: IGkeArgv): Promise<string>;
}
export {};
