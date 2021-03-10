import { GcloudBase } from "../GcloudBase";
export declare class GcloudAppDomainMappings extends GcloudBase {
    commandPrefix: string;
    list(): Promise<string>;
}
