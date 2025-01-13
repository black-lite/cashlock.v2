import Types from "webpack";
import {BuildOptions} from "./types/types";

export function buildDevServer({port}: BuildOptions) : {port: number, open: boolean, hot: boolean, historyApiFallback: boolean} {
	return {
		port: port ?? 3000,
		open: true,

		//Ели раздавать статику через nginx то надо делать проксирование на index.html
		historyApiFallback: true,
		hot: true
	}
}