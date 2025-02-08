import path from "path";
import webpack, { Configuration  } from 'webpack';
import {BuildOptions} from "./types/types";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

import CopyPlugin from "copy-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {CleanWebpackPlugin} from "clean-webpack-plugin";

export function buildPlugins({mode, paths, analyzer}: BuildOptions) : Configuration['plugins']
{
	const isDev = mode == "development";
	const isProd = mode == "production";

	const plugins: Configuration['plugins'] = [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({ template: paths.html, title: 'Cashlock V2', publicPath: '/build/', favicon: path.resolve(paths.public, 'favicon.ico') }),
	];

	if (isDev)
	{
		plugins.push(new webpack.ProgressPlugin());
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

	return plugins;
}