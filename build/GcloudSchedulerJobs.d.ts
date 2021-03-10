import { GcloudBase } from "./GcloudBase";
declare type IListResult = {
    id: string;
    location: string;
    schedule: string;
    targetType: string;
    state: string;
};
declare type ICreateOrUpdateArgv = {
    schedule?: string;
    uri?: string;
    timeZone?: string;
    description?: string;
    httpMethod?: string;
    attemptDeadline?: string;
    maxBackoff?: string;
    minBackoff?: string;
    maxDoublings?: number;
    maxRetryAttempts?: number;
    maxRetryDuration?: number;
    messageBody?: string;
};
declare type ICreateArgv = ICreateOrUpdateArgv | {
    headers?: string;
};
declare type IUpdateArgv = ICreateOrUpdateArgv | {
    updateHeaders?: string;
    clearHeaders?: boolean;
    clearMaxBackoff?: boolean;
    clearMaxDoublings?: boolean;
    clearMaxRetryAttempts?: boolean;
    clearMaxRetryDuration?: boolean;
    clearMessageBody?: boolean;
};
declare type IListArgv = {
    limit?: number;
    pageSize?: number;
};
export declare class GcloudSchedulerJobs extends GcloudBase {
    commandPrefix: string;
    list(argv?: IListArgv): Promise<IListResult[]>;
    createHttp(name: string, argv?: ICreateArgv): Promise<string>;
    updateHttp(name: string, argv?: IUpdateArgv): Promise<string>;
    createOrUpdateHttp(name: string, argv?: ICreateOrUpdateArgv): Promise<string>;
    delete(name: string): Promise<string>;
    describe(name: string): Promise<string | undefined>;
    pause(name: string): Promise<string>;
    resume(name: string): Promise<string>;
    run(name: string): Promise<string>;
}
export {};
