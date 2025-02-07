import path from "path";
import {BuildOptions} from "./types/types";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpack(options: BuildOptions) : any
{
	const {mode, paths} = options;
	const isDev = options.mode == "development";

	return {
		mode: mode ?? "development",
		entry: paths.entry,

		module: {
			rules: buildLoaders(options),
		},
		output: {
			path: paths.output,
			filename: '[name].[contenthash].js'
		},
		plugins: buildPlugins(options),
		resolve: buildResolvers(options),
		devServer: isDev ? buildDevServer(options) : undefined,
		devtool: isDev && 'inline-source-map',
	}
}