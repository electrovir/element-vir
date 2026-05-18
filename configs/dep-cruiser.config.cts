import {defineConfig} from '@virmator/deps/configs/dep-cruiser.config.base.js';
import {type IConfiguration} from 'dependency-cruiser';

const baseConfig = defineConfig({
    fileExceptions: {
        // enter file exceptions by rule name here
        'no-orphans': {
            from: [
                'src/index\\.ts$',
            ],
        },
        /** Test-util.ts is e2e test infrastructure that loads test-only deps dynamically. */
        'not-to-mock': {
            from: [
                'packages/element-vir-example/src/test-util\\.ts$',
            ],
        },
        'not-to-dev-dep': {
            from: [
                'packages/element-vir-example/src/test-util\\.ts$',
            ],
        },
    },
    omitRules: [
        // enter rule names here to omit
    ],
});

const depCruiserConfig: IConfiguration = {
    ...baseConfig,
};

module.exports = depCruiserConfig;
