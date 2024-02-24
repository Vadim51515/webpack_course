import path from 'path';
import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import {
    IBuildOptions,
    IEnvVariables,
} from './config/build/types/types';

export default (env: IEnvVariables) => {
    const options: IBuildOptions = {
        isDev: env.mode === 'development',
        isProd: env.mode === 'production',
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        isAnalyzer: env.isAnalyzer,
        platform: env.platform ?? 'desktop',
        paths: {
            html: path.resolve(
                __dirname,
                'public',
                'index.html',
            ),
            output: path.resolve(__dirname, 'build'),
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            src: path.resolve(__dirname, 'src'),
            public: path.resolve(__dirname, 'public')
        },
    };

    const config: webpack.Configuration = buildWebpack(options);

    return config;
};
