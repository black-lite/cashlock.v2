import path from 'path';
import Types from 'webpack';
import {buildWebpack} from "./server/client/config/build/buildWebpack";
import {BuildMode, BuildPaths, BuildPlatform} from "./server/client/config/build/types/types";


// import { Sequelize } from 'sequelize';
//
// const sequelize = new Sequelize({
// 	dialect: 'sqlite',
// 	storage: '../db.db'
// });
//
// try { sequelize.authenticate().then(() => {
// 	console.log(sequelize.config);
// }); }
// catch (e) { console.log('Невозможно выполнить подключение к БД: ', e); }


interface EnvVariables {
	mode ?: BuildMode,
	port ?: number,
	platform ?: BuildPlatform
}

export default (env: EnvVariables) =>
{
	const paths: BuildPaths = {
		src			: path.resolve(__dirname, 'server', 'client', 'src'),
		html		: path.resolve(__dirname, 'server', 'client', 'public', 'index.html'),
		entry		: path.resolve(__dirname, 'server', 'client', 'src', 'index.tsx'),
		output		: path.resolve(__dirname, 'server', 'client', 'build'),
		public		: path.resolve(__dirname, 'server', 'client', 'public'),
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