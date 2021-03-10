import { IProjectOptions } from "./GcloudSdk";
import { GcloudCommandHelper } from "./helpers/GcloudCommandHelper";
declare type ParseTableOptions = {
    isSplitBySpace?: boolean;
    contentOffset?: number;
};
export declare class GcloudBase {
    readonly project: string;
    projectOptions: Partial<IProjectOptions>;
    commandPrefix: string;
    constructor(project: string, projectOptions: Partial<IProjectOptions>);
    extend<T extends typeof GcloudBase>(productType: T): InstanceType<T>;
    help(): Promise<string>;
    protected _createChildProcessHelper(): GcloudCommandHelper;
    protected _exec(params: string[], argument?: {
        [key: string]: any;
    }, postParams?: string[]): Promise<string>;
    protected _parseYaml(yaml: string): any;
    protected _parseTable(table: string, headers?: string[], options?: ParseTableOptions): any[];
}
export {};
