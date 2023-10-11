import type {IConfiguration} from 'dependency-cruiser';
import {generateDepCruiserConfig} from 'virmator/dist/compiled-base-configs/base-dep-cruiser.config';

const depCruiserConfig: IConfiguration = generateDepCruiserConfig({
    fileExceptions: {
        // enter file exceptions by rule name here
        'no-orphans': [
            'src/index.ts',
        ],
    },
    omitRules: [
        // enter rule names here to omit
    ],
});

module.exports = depCruiserConfig;
