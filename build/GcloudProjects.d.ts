import { GcloudBase } from "./GcloudBase";
declare type IListResult = {
    projectId: string;
    name: string;
    projectNumber: string;
};
declare type IListArgv = {
    limit?: number;
    pageSize?: number;
};
export declare class GcloudProjects extends GcloudBase {
    commandPrefix: string;
    list(argv?: IListArgv): Promise<IListResult[]>;
    describe(name: string): Promise<string>;
}
export {};
