import webpack from 'webpack';
import type { Configuration as WebpackDevServerConfig } from 'webpack-dev-server';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlagins } from './buildPlagins';
import { builtResolvers } from './buildResolvers';
import { BuildOptions } from './interfaces/buildInterfaces';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
	const { mode, paths } = options;
	const isDev = options.mode === 'development';

	return {
		mode: mode ?? 'development',
		entry: paths.entry,
		output: {
			path: paths.output,
			filename: '[name].[contenthash].js',
			clean: true,
		},
		plugins: buildPlagins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: builtResolvers(options),
		devtool: isDev ? 'inline-source-map' : false,
		devServer: isDev ? (buildDevServer(options) as WebpackDevServerConfig) : undefined,
	};
}
