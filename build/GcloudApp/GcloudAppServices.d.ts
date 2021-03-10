import { GcloudBase } from "../GcloudBase";
import { IStandardListArgv } from "../types";
declare type IListResult = {
    service: string;
    numVersions: string;
};
declare type IBrowseArgv = {
    launchBrowser?: boolean;
    version?: string;
};
declare type ISetTrafficArgv = {
    splits: string;
    migrate?: string;
    splitBy?: string;
};
export declare class GcloudAppServices extends GcloudBase {
    commandPrefix: string;
    list(argv?: IStandardListArgv): Promise<IListResult[]>;
    describe(service: string): Promise<any>;
    delete(service: string): Promise<string>;
    browse(service: string, argv?: IBrowseArgv): Promise<string>;
    setTraffic(services: string, argv: ISetTrafficArgv): Promise<any>;
    setTraffic(argv: ISetTrafficArgv): Promise<any>;
}
export {};
