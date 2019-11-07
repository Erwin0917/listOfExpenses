export class EnvironmentModel {
	public get isDev(): boolean {
		return process.env.NODE_ENV === 'development';
	}

	public get isProd(): boolean {
		return process.env.NODE_ENV === 'production';
	}
}
