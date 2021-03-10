export declare type IInteractive = {
    match: string | RegExp;
    respond: string;
};
export declare class CommandHelper {
    commandPath: string;
    params: string[];
    posParams: string[];
    arguments: string[];
    execOptions: object;
    constructor(commandPath: string, execOptions?: {});
    addParams(params: string[]): this;
    addPosParams(params: string[]): this;
    addArgument(argument: {
        [key: string]: any;
    }): this;
    exec(): Promise<{
        stdout: string;
        stderr: string;
    }>;
    execInteractive(interactives: IInteractive[], options?: {
        initStdin?: string;
        sendNewLineOnStderr?: boolean;
    }): Promise<{
        stdout: string;
        stderr: string;
    }>;
}
