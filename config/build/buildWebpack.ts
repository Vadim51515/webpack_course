import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { IBuildOptions } from './types/types';

export const buildWebpack = (options: IBuildOptions): webpack.Configuration => {

    const {isDev, paths, mode, } = options

    return {
        mode: mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true,
        },
        plugins: buildPlugins(options),
        devtool: 'inline-source-map',
        devServer: isDev
            ? buildDevServer(options)
            : undefined,
    };

};
