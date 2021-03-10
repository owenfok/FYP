import { GcloudBase } from "./GcloudBase";
import { IStandardListArgv } from "./types";
declare type IListResult = {
    active: string;
    account: string;
};
declare type ITokenArgv = {
    audiences?: string | string[];
    includeEmail?: boolean;
    includeLicense?: boolean;
    tokenFormat?: "standard" | "full";
};
export declare class GcloudAuth extends GcloudBase {
    commandPrefix: string;
    list(argv?: IStandardListArgv): Promise<IListResult[]>;
    printAccessToken(account: string, argv?: ITokenArgv): Promise<string>;
    printIdentityToken(account: string, argv?: ITokenArgv): Promise<string>;
}
export {};
