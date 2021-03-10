import { GcloudBase } from "../GcloudBase";
declare type ITailArgv = {
    level?: "critical" | "error" | "warning" | "info" | "debug" | "any";
    logs?: string;
    service?: string;
    version?: string;
};
declare type IReadArgv = ITailArgv & {
    limit?: number;
};
export declare class GcloudAppLogs extends GcloudBase {
    commandPrefix: string;
    read(argv?: IReadArgv): Promise<string>;
}
export {};
