import {dirname, join} from 'path';
import {pathsToModuleNameMapper} from 'ts-jest';
import {InitialOptionsTsJest} from 'ts-jest/dist/types';
import {findTsConfigFile, getTsconfigPathAliases} from './read-tsconfig';

const repoRootDir = dirname(__dirname);

const config: InitialOptionsTsJest = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    verbose: false,

    rootDir: repoRootDir,
    silent: false,
    moduleNameMapper: pathsToModuleNameMapper(getTsconfigPathAliases(), {
        prefix: '<rootDir>/',
    }) as Record<string, string | string[]>,
    roots: [join(repoRootDir, 'src')],
    setupFilesAfterEnv: [join(__dirname, 'jest.setup.ts')],
    globals: {
        'ts-jest': {
            tsconfig: findTsConfigFile(),
            diagnostics: {
                warnOnly: true,
                ignoreCodes: ['TS151001'],
            },
        },
    },
};

export default config;
