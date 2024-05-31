import type { Configuration as DevServerConfiguration } from 'webpack';
import { BuildOptions } from './interfaces/buildInterfaces';

export function buildDevServer({ port }: BuildOptions) {
	return {
		port: port ?? 8080,
		open: true,
	} as DevServerConfiguration;
}
