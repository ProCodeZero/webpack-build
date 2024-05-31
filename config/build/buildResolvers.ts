import { Configuration } from 'webpack';
import { BuildOptions } from './interfaces/buildInterfaces';

export function builtResolvers(options: BuildOptions): Configuration['resolve'] {
	return {
		extensions: ['.tsx', '.ts', '.js'],
	};
}
