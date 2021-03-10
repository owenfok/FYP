import { GcloudBase } from "./GcloudBase";
declare type IListResult = {
    id: string;
    location: string;
    schedule: string;
    targetType: string;
    state: string;
};
declare type IListArgv = {
    limit?: number;
    pageSize?: number;
};
export declare class GcloudOrganizations extends GcloudBase {
    commandPrefix: string;
    list(argv?: IListArgv): Promise<IListResult[]>;
    describe(name: string): Promise<string>;
}
export {};
