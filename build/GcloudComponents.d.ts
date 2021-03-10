import { GcloudBase } from "./GcloudBase";
export declare class GcloudComponents extends GcloudBase {
    commandPrefix: string;
    install(name: string): Promise<string>;
}
