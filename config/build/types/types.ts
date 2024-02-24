export type TBuildMode = ('production' | 'development')
export type TBuildPlatform = ('mobile' | 'desktop')

export interface IEnvVariables {
    mode: TBuildMode;
    port?: number;
    isAnalyzer?: boolean;
    platform?:TBuildPlatform
}

export interface IBuildPaths {
    entry: string;
    html: string;
    output: string;
    src: string;
    public: string;
}

export interface IBuildOptions {
    port: number;
    paths: IBuildPaths;
    mode: TBuildMode;
    isDev: boolean;
    isProd: boolean;
    isAnalyzer?: boolean;
    platform:TBuildPlatform
}
