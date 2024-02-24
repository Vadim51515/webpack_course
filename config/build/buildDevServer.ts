import path from 'path';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { IBuildOptions } from './types/types';

export const buildDevServer = ({ port }: IBuildOptions): DevServerConfiguration => {

    return {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: port ?? 3000,
        open: false,
        historyApiFallback: true,
        hot: true,
    };
};
