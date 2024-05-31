import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack, { Configuration } from 'webpack';
import { BuildOptions } from './interfaces/buildInterfaces';

export function buildPlagins({ mode, paths }: BuildOptions): Configuration['plugins'] {
	const isDev = mode === 'development';

	const plugins: Configuration['plugins'] = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
	];

	if (isDev) {
		plugins.push(new webpack.ProgressPlugin());
	}

	if (!isDev) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash].css',
				chunkFilename: 'css/[id].[contenthash].css',
			})
		);
	}

	return plugins;
}
