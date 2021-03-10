import { GcloudBase } from "../GcloudBase";
import { IStandardListArgv } from "../types";
declare type IListResult = {
    priority: string;
    action: string;
    sourceRange: string;
    description: string;
};
export declare class GcloudAppFirewallRules extends GcloudBase {
    commandPrefix: string;
    list(argv?: IStandardListArgv): Promise<IListResult[]>;
}
export {};
