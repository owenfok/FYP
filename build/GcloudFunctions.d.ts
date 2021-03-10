import { GcloudBase } from "./GcloudBase";
declare type IListResult = {
    name: string;
    status: string;
    trigger: string;
    region: string;
};
declare type ILogsResult = {
    level: string;
    name: string;
    executionId: string;
    timeUtc: string;
    log: string;
};
declare type IEventTypesResult = {
    eventProvider: string;
    eventType: string;
    eventTypeDefault: string;
    resourceType: string;
    resourceOptional: string;
};
declare type IDeployResult = {
    availableMemoryMb: string;
    entryPoint: string;
    environmentVariables: object;
    httpsTrigger: {
        url: string;
        ingressSettings: string;
    };
    labels: object;
    name: string;
    runtime: string;
    serviceAccountEmail: string;
    sourceUploadUrl: string;
    status: string;
    timeout: string;
    updateTime: string;
    versionId: string;
};
declare type IGetIamPolicyResult = {
    bindings: Array<{
        members: string[];
        role: string;
    }>;
    etag: string;
    version: number;
};
declare type IDeployArgv = {
    region: string;
    allowUnauthenticated?: boolean;
    entryPoint?: string;
    ignoreFile?: string;
    memory?: string;
    retry?: boolean;
    runtime?: string;
    serviceAccount?: string;
    stageBucket?: string;
    source?: string;
    timeout?: string;
    updateLabels?: object;
    clearEnvVars?: boolean;
    envVarsFile?: string;
    setEnvVars?: string | object;
    removeEnvVars?: string;
    updateEnvVars?: string | object;
    clearLabels?: boolean;
    removeLabels?: string | string[];
    clearMaxInstances?: boolean;
    maxInstances?: number;
    clearVpcConnector?: boolean;
    vpcConnector?: string;
    triggerBucket?: string;
    triggerHttp?: boolean;
    triggerTopic?: string;
    triggerEvent?: string;
    triggerResource?: string;
};
declare type IDefaultArgv = {
    region: string;
};
declare type IListArgv = {
    limit?: number;
    regions?: string[];
    uri?: boolean;
};
declare type IDescribeArgv = {
    region: string;
};
declare type ICallArgv = {
    region: string;
    data?: string | object;
};
declare type IIamPolicyBindingArgv = {
    region: string;
    member: "allUsers" | string;
    role: "roles/cloudfunctions.invoker" | string;
};
export declare class GcloudFunctions extends GcloudBase {
    commandPrefix: string;
    runtimes: {
        nodejs10: string;
        nodejs8: string;
        python37: string;
    };
    memory: {
        M128: string;
        M256: string;
        M512: string;
        M1024: string;
        M2048: string;
    };
    list(argv?: IListArgv): Promise<IListResult[]>;
    deploy(name: string, argv: IDeployArgv): Promise<IDeployResult>;
    delete(name: string, argv: IDefaultArgv): Promise<string>;
    call(name: string, argv: ICallArgv): Promise<string>;
    getIamPolicy(name: string, argv: IDefaultArgv): Promise<IGetIamPolicyResult>;
    removeIamPolicyBinding(name: string, argv: IIamPolicyBindingArgv): Promise<string>;
    addIamPolicyBinding(name: string, argv: IIamPolicyBindingArgv): Promise<string>;
    describe(name: string, argv: IDescribeArgv): Promise<string | undefined>;
    logs(): Promise<ILogsResult[]>;
    eventTypes(): Promise<IEventTypesResult[]>;
    regions(): Promise<string[]>;
}
export {};
