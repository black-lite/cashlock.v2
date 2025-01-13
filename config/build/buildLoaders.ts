import Types from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
import {BuildOptions} from "./types/types";
import {buildBabelLoader} from "./babel/buildBabelLoader";

export function buildLoaders(options: BuildOptions) : Types.ModuleOptions['rules']
{
	const {mode, checkTypes} = options;

	const isDev = mode == "development";

	const babelLoader = buildBabelLoader(options)

	const svgLoader = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: [
			{
				loader: '@svgr/webpack',
				options: {
					icon: true,
					svgoConfig: {
						plugins: [
							{
								name: "convertColors",
								params: {
									currentColor: true,
								}
							}
						]
					}
				}
			}
		],
	};

	const assetLoader = {
		test: /\.(png|jpg|jpeg|gif)$/i,
		type: 'asset/resource',
	};

	const tsLoader = {
		test: /\.tsx?$/,
		exclude: /node_modules/,
		use: [
			{
				loader: 'ts-loader',
				options: {
					getCustomTransformers: () => ({
						before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
					}),
					transpileOnly: checkTypes ?? false,
				},
			}
		],
	};

	const cssLoaderWithModules = {
		loader: "css-loader", // делает имена классов без коллизий по шаблону "localIdentName"
		options: {
			modules: {
				localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
			},
		},
	}

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,		// Creates `style` nodes from JS strings
			cssLoaderWithModules,										// Translates CSS into CommonJS
			"sass-loader",												// Compiles Sass to CSS
		],
	}

	// const fontLoader = {
	// 	test: /\.(woff(2)?|ttf|eot)$/,
	// 	type: 'asset/resource',
	// 	generator: {
	// 		filename: './fonts/[name].[ext]',
	// 	},
	// };

	// Порядок имеет значение
	return [
		assetLoader,
		// tsLoader,
		babelLoader,
		cssLoader,
		svgLoader,
	]
}