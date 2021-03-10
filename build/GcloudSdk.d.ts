import { Gcloud } from "./Gcloud";
export declare type IProjectOptions = {
    cwd: string;
    clientEmail: string;
    useInteractiveLogin: boolean;
    keyFilename: string;
};
export declare class GcloudSdk {
    readonly project: string;
    projectOptions: IProjectOptions;
    constructor(project?: string, projectOptions?: Partial<IProjectOptions>);
    init(): Promise<Gcloud>;
    authWithInteractive(): Promise<string>;
    authWithServiceAccount(keyFilename: string): Promise<string>;
    logout(): Promise<void>;
    help(): Promise<string>;
    version(): Promise<string>;
    private _login;
    private _validateProjectOptions;
}
