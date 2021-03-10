import { GcloudBase } from "./GcloudBase";
import { IStandardListArgv } from "./types";
declare type IListResult = {
    id: string;
    createTime: string;
    duration: string;
    source: string;
    images: string;
    status: string;
};
declare type IDescribeResult = {
    artifacts?: {
        images: string[];
    };
    createTime: string;
    finishTime: string;
    id: string;
    images?: string[];
    logUrl: string;
    logsBucket: string;
    options: {
        logStreamingOption?: string;
        logging: string;
        substitutionOption?: string;
    };
    projectId: string;
    results: {
        buildStepImages: string[];
        images?: Array<{
            digest: string;
            name: string;
            pushTiming: {
                startTime: string;
                endTime: string;
            };
        }>;
        buildStepOutputs: string[];
    };
    source?: {
        storageSource: {
            bucket: string;
            generation: string;
            object: string;
        };
    };
    sourceProvenance: {
        fileHashes?: object;
        resolvedStorageSource?: {
            bucket: string;
            generation: string;
            object: string;
        };
    };
    startTime: string;
    status: string;
    steps: Array<{
        args: string[];
        name: string;
        pullTiming: {
            startTime: string;
            endTime: string;
        };
        status: string;
        timing: {
            startTime: string;
            endTime: string;
        };
    }>;
    substitutions: object;
    timeout: string;
    timing: {
        BUILD: {
            endTime: string;
            startTime: string;
        };
        FETCHSOURCE?: {
            endTime: string;
            startTime: string;
        };
        PUSH?: {
            endTime: string;
            startTime: string;
        };
    };
};
declare type ISubmitArgv = {
    noSource?: boolean;
    async?: boolean;
    diskSize?: number;
    gcsLogDir?: string;
    gcsSourceStagingDir?: string;
    ignoreFile?: string;
    machineType?: "n1-highcpu-32" | "n1-highcpu-8";
    substitutions?: string | object;
    timeout?: string;
    config?: string;
    tag: string;
};
export declare class GcloudBuilds extends GcloudBase {
    commandPrefix: string;
    list(argv?: IStandardListArgv): Promise<IListResult[]>;
    describe(buildName: string): Promise<IDescribeResult>;
    cancel(buildNames: string | string[]): Promise<string>;
    log(buildName: string): Promise<string>;
    submit(argv: ISubmitArgv): Promise<any>;
    submit(source: string, argv: ISubmitArgv): Promise<any>;
}
export {};
