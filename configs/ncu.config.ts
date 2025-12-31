import {baseNcuConfig} from '@virmator/deps/configs/ncu.config.base';
import {RunOptions} from 'npm-check-updates';

export const ncuConfig: RunOptions = {
    ...baseNcuConfig,
    // exclude these
    reject: [
        ...baseNcuConfig.reject,
        /** 0.6.0 is broken: https://github.com/color-js/color.js/issues/707 */
        'colorjs.io',
    ],
    // include only these
    filter: [],
};
