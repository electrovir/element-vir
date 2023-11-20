import {RunOptions} from 'npm-check-updates';
import {baseNcuConfig} from 'virmator/dist/compiled-base-configs/base-ncu';

export const ncuConfig: RunOptions = {
    ...baseNcuConfig,
    // exclude these
    reject: [
        ...baseNcuConfig.reject,
        /** Other deps aren't ready for 5.3 yet. */
        'typescript',
    ],
    // include only these
    filter: [],
};
