import {baseNcuConfig} from '@virmator/deps/configs/ncu.config.base';
import {RunOptions} from 'npm-check-updates';

export const ncuConfig: RunOptions = {
    ...baseNcuConfig,
    // exclude these
    reject: [
        ...baseNcuConfig.reject,
        // v0.28.6 thinks `RepeatDirective` is not documented
        'typedoc',
    ],
    // include only these
    filter: [],
};
