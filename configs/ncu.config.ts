import {RunOptions} from 'npm-check-updates';
import {baseNcuConfig} from 'virmator/dist/compiled-base-configs/base-ncu';

export const ncuConfig: RunOptions = {
    ...baseNcuConfig,
    // exclude these
    reject: [
        ...baseNcuConfig.reject,
        /** Not ready for v3 yet. Causes massive bugs in dependent projects. */
        'lit',
    ],
    // include only these
    filter: [],
};
