import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack, { Configuration, DefinePlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './interfaces/buildInterfaces';

export function buildPlagins({ mode, paths, analyzer, platform }: BuildOptions): Configuration['plugins'] {
	const isDev = mode === 'development';

	const plugins: Configuration['plugins'] = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new DefinePlugin({
			__PLATFORM__: JSON.stringify(platform),
		}),
		// Выносит проверку типов в отдельный процесс, не нагружая сборку
		new ForkTsCheckerWebpackPlugin(),
	];

	if (isDev) {
		plugins.push(new webpack.ProgressPlugin());
		plugins.push(new ReactRefreshWebpackPlugin());
	}

	if (!isDev) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash].css',
				chunkFilename: 'css/[id].[contenthash].css',
			})
		);
	}

	if (analyzer) {
		plugins.push(new BundleAnalyzerPlugin());
	}

	return plugins;
}
