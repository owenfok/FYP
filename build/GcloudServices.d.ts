import { GcloudBase } from "./GcloudBase";
import { IStandardListArgv } from "./types";
declare type IListResult = {
    active: string;
    account: string;
};
export declare class GcloudServices extends GcloudBase {
    commandPrefix: string;
    list(argv?: IStandardListArgv): Promise<IListResult[]>;
    enable(serviceName: string): Promise<string>;
}
export {};
