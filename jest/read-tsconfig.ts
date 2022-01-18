import {dirname} from 'path';
import {findConfigFile, parseJsonConfigFileContent, readConfigFile, sys as tsSys} from 'typescript';

export function findTsConfigFile(): string {
    const dirToCheck = __dirname;
    const configFileName = findConfigFile(dirToCheck, tsSys.fileExists, 'tsconfig.json');
    if (!configFileName) {
        throw new Error(`Could not find tsconfig.json file from starting search at "${dirToCheck}"`);
    }
    return configFileName;
}

export function getTsconfigPathAliases() {
    const configFileName = findTsConfigFile();

    if (!configFileName) {
        throw new Error(`Failed to find tsconfig.`);
    }

    const configFile = readConfigFile(configFileName, tsSys.readFile);
    const tsConfig = parseJsonConfigFileContent(configFile.config, tsSys, dirname(configFileName));
    const tsConfigPaths = tsConfig.options.paths || {};

    return tsConfigPaths;
}
