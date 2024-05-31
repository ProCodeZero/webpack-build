import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
const devServer: DevServerConfiguration = {};

type Mode = 'development' | 'production';

interface EnvVariables {
	mode: Mode;
	port: number;
}

export default (env: EnvVariables) => {
	const isDev = env.mode === 'development';

	const config: webpack.Configuration = {
		mode: env.mode ?? 'development',
		entry: path.resolve(__dirname, './src/index.ts'),

		output: {
			path: path.resolve(__dirname, 'build'),
			filename: '[name].[contenthash].js',
			clean: true,
		},
		plugins: [
			// This plugin generates an HTML file that includes all the bundled JavaScript files
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, './public/index.html'),
			}),
			// This plugin provides a visual progress bar during the build process, which can be helpful for monitoring the progress and ensuring that the build is running smoothly.
			// It is not recommended to use in the production assembly, because he slows it down.
			isDev ? new webpack.ProgressPlugin() : undefined,
		],
		module: {
			rules: [
				{
					// ts-loader умеет работать с JSX
					// Если бы я не использовал Typescript, нужно было бы использовать babel-loader
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
			],
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		devtool: isDev ? 'inline-source-map' : false,
		devServer: isDev
			? {
					port: env.port ?? 8080,
					open: true,
			  }
			: undefined,
	};
	return config;
};
