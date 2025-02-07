import path from 'path';
import Types from 'webpack';
import {buildWebpack} from "./config/build/buildWebpack";
import {BuildMode, BuildPaths, BuildPlatform} from "./config/build/types/types";


interface EnvVariables {
	mode ?: BuildMode,
	port ?: number,
	platform ?: BuildPlatform
}

export default (env: EnvVariables) =>
{
	const paths: BuildPaths = {
		src			: path.resolve(__dirname, 'src'),
		html		: path.resolve(__dirname, 'public', 'index.html'),
		entry		: path.resolve(__dirname, 'src', 'index.tsx'),
		output		: path.resolve(__dirname, 'build'),
		public		: path.resolve(__dirname, 'public'),
	}

	const config: Types.Configuration = buildWebpack({
		port: env.port ?? 3000,
		mode: env.mode ?? "development",
		paths,
		analyzer: false,
		platform: env.platform ?? "desktop",
		checkTypes: false,
	})
	return config;
};