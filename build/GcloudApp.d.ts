import { GcloudAppDomainMappings } from "./GcloudApp/GcloudAppDomainMappings";
import { GcloudAppFirewallRules } from "./GcloudApp/GcloudAppFirewallRules";
import { GcloudAppInstances } from "./GcloudApp/GcloudAppInstances";
import { GcloudAppLogs } from "./GcloudApp/GcloudAppLogs";
import { GcloudAppServices } from "./GcloudApp/GcloudAppServices";
import { GcloudAppVersions } from "./GcloudApp/GcloudAppVersions";
import { GcloudBase } from "./GcloudBase";
declare type IRegionsListResult = {
    region: string;
    supportsStandard: string;
    supportsFlexible: string;
};
declare type IDescribeResult = {
    authDomain: string;
    codeBucket: string;
    databaseType: string;
    defaultBucket: string;
    defaultHostname: string;
    featureSettings: {
        splitHealthChecks: boolean;
        useContainerOptimizedOs: boolean;
    };
    gcrDomain: string;
    id: string;
    locationId: string;
    name: string;
    servingStatus: string;
};
declare type IDefaultArgv = {
    service: string;
    version: string;
};
declare type ICreateArgv = {
    region: string;
};
declare type IBrowseArgv = {
    launchBrowser?: boolean;
    service?: string;
    version?: string;
};
declare type IDeployArgv = {
    bucket?: string;
    ignoreFile?: string;
    imageUrl?: string;
    promote?: boolean;
    noPromote?: boolean;
    stopPreviousVersion?: boolean;
    noStopPreviousVersion?: boolean;
    version?: string;
};
export declare class GcloudApp extends GcloudBase {
    commandPrefix: string;
    browse(argument?: IBrowseArgv): Promise<string>;
    create(argument: ICreateArgv): Promise<string>;
    describe(): Promise<IDescribeResult>;
    deploy(yamlFile: string, argument?: IDeployArgv): Promise<string>;
    openConsole(argument: IDefaultArgv): Promise<string>;
    regions(): Promise<IRegionsListResult[]>;
    logs(): GcloudAppLogs;
    instances(): GcloudAppInstances;
    domainMappings(): GcloudAppDomainMappings;
    firewallRules(): GcloudAppFirewallRules;
    services(): GcloudAppServices;
    versions(): GcloudAppVersions;
}
export {};
