import webpack, { Configuration  } from 'webpack';
import {BuildOptions} from "./types/types";
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import path from "path";
import CopyPlugin from "copy-webpack-plugin";

export function buildPlugins({mode, paths, analyzer, platform}: BuildOptions) : Configuration['plugins']
{
	const isDev = mode == "development";
	const isProd = mode == "production";

	const plugins: Configuration['plugins'] = [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({ template: paths.html, title: 'Cashlock V2', favicon: path.resolve(paths.public, 'favicon.ico') }),
		new webpack.DefinePlugin({
			__PLATFORM: JSON.stringify(platform)
		}),
	];

	if (isDev)
	{
		plugins.push(new webpack.ProgressPlugin())
		plugins.push(new ReactRefreshWebpackPlugin())
	}

	if (isProd)
	{
		plugins.push(
			new ForkTsCheckerWebpackPlugin(),
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
				chunkFilename: 'css/[name].[contenthash:8].css',
			}),
			new CopyPlugin({
				patterns: [
					// { from: path.resolve(paths.public, 'fonts'), to: path.resolve(paths.output, 'fonts') },
					{ from: path.resolve(paths.src, 'assets', 'fonts', 'Inter'), to: path.resolve(paths.output, 'fonts') },
				],
			}),
		);
	}

	if (analyzer) plugins.push(new BundleAnalyzerPlugin())

	return plugins;
}