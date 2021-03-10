import { GcloudBase } from "./GcloudBase";
import { GcloudRunDomainMappings } from "./GCloudRun/GcloudRunDomainMappings";
import { GcloudRunRevisions } from "./GCloudRun/GcloudRunRevisions";
import { GcloudRunServices } from "./GCloudRun/GcloudRunServices";
export declare type IManagedArgv = {
    platform: "managed";
    region?: string;
};
export declare type IGkeArgv = {
    platform: "gke";
    namespace: string;
    cluster: string;
    clusterLocation: string;
    context?: string;
    kubeconfig?: string;
};
declare type IDeployArgv = {
    region?: string;
    image: string;
    platform: "managed" | "gke" | "kubernetes";
    namespace?: "default" | "kube-system" | "kube-public" | "gke-system" | "knative-serving";
    args?: string | string[];
    async?: boolean;
    command?: string;
    concurrency?: number;
    maxInstances?: number;
    memory?: string;
    port?: number;
    timeout?: string;
    clearEnvVars?: boolean;
    setEnvVars?: string | object;
    removeEnvVars?: string | object;
    updateEnvVars?: string | object;
    clearLabels?: boolean;
    removeLabels?: string[] | string;
    labels?: string | object;
    updateLabels?: string | object;
    connectivity?: "external" | "internal";
    cpu?: string;
    allowUnauthenticated?: boolean;
    noAllowUnauthenticated?: boolean;
    revisionSuffix?: string;
    serviceAccount?: string;
    addCloudsqlInstances?: string;
    clearCloudsqlInstances?: boolean;
    removeCloudsqlInstances?: string[] | string;
    setCloudsqlInstances?: string[] | string;
    cluster?: string;
    clusterLocation?: string;
    context?: string;
    kubeconfig?: string;
};
export declare class GcloudRun extends GcloudBase {
    commandPrefix: string;
    memory: {
        M128: string;
        M256: string;
        M512: string;
        M1024: string;
        M2048: string;
    };
    deploy(serviceName: string, argv: IDeployArgv): Promise<string>;
    domainMappings(): GcloudRunDomainMappings;
    revisions(): GcloudRunRevisions;
    services(): GcloudRunServices;
}
export {};
