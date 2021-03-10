import { GcloudBase } from "./GcloudBase";
import { GcloudContainerClusters } from "./GcloudContainer/GcloudContainerClusters";
export declare class GcloudContainer extends GcloudBase {
    commandPrefix: string;
    machineTypes: {
        n1Standard4: string;
    };
    clusters(): GcloudContainerClusters;
}
