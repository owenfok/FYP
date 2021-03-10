import { GcloudBase } from "../GcloudBase";
import { IGkeArgv, IManagedArgv } from "../GcloudRun";
import { IStandardListArgv } from "../types";
declare type IListResult = {
    revision: string;
    active: string;
    service: string;
    deployed: string;
    deployedBy: string;
};
declare type IManagedListArgv = IManagedArgv & {
    service?: string;
} & IStandardListArgv;
declare type IGkeListArgv = IGkeArgv & {
    service?: string;
} & IStandardListArgv;
export declare class GcloudRunRevisions extends GcloudBase {
    commandPrefix: string;
    listManaged(argv: IManagedListArgv): Promise<IListResult[]>;
    listGke(argv: IGkeListArgv): Promise<IListResult[]>;
    describeManaged(serviceName: string, argv: IManagedArgv): Promise<string>;
    describeGke(serviceName: string, argv: IGkeArgv): Promise<string>;
    deleteManaged(serviceName: string, argv: IManagedArgv): Promise<string>;
    deleteGke(serviceName: string, argv: IGkeArgv): Promise<string>;
}
export {};
