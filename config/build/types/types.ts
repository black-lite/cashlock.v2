export interface BuildPaths {
	src: string,
	html: string,
	entry: string,
	output: string,
	public: string,
}

export type BuildMode = 'production' | 'development';
export type BuildPlatform = 'mobile' | 'desktop';

export interface BuildOptions {
	port: number,
	paths: BuildPaths,
	mode: BuildMode,
	analyzer?: boolean,
	platform?: BuildPlatform,
	checkTypes?: boolean,
}