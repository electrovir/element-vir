import type {IConfiguration} from 'dependency-cruiser';
import {generateDepCruiserConfig} from 'virmator/dist/compiled-base-configs/base-dep-cruiser.config';

const baseConfig = generateDepCruiserConfig({
    fileExceptions: {
        // enter file exceptions by rule name here
        'no-orphans': {
            from: [
                'src/index.ts',
            ],
        },
    },
    omitRules: [
        // enter rule names here to omit
        'no-duplicate-dep-types',
    ],
});

const depCruiserConfig: IConfiguration = {
    ...baseConfig,
    // options: {
    //     ...baseConfig.options,
    //     knownViolations: [
    //         {
    //             rule: {
    //                 name: 'no-circular',
    //                 severity: 'error',
    //             },
    //             from: 'src/declarative-element/render-callback.ts',
    //             to: 'src/declarative-element/render-callback.ts',
    //         },
    //         {
    //             rule: {
    //                 name: 'no-circular',
    //                 severity: 'error',
    //             },
    //             from: 'src/declarative-element/declarative-element.ts',
    //             to: 'src/declarative-element/declarative-element.ts',
    //         },
    //         {
    //             rule: {
    //                 name: 'no-circular',
    //                 severity: 'error',
    //             },
    //             from: 'src/declarative-element/declarative-element-init.ts',
    //             to: 'src/declarative-element/declarative-element-init.ts',
    //         },
    //     ],
    // },
};

module.exports = depCruiserConfig;
