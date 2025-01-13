// import Types from "webpack";
import webpack, { Configuration } from 'webpack';

import {BuildOptions} from "./types/types";

export function buildResolvers(options: BuildOptions) : Configuration['resolve']
{
	return {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			'@': options.paths.src
		}
	}
}