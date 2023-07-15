import {RunOptions} from 'npm-check-updates';

export const ncuConfig: RunOptions = {
    color: true,
    upgrade: true,
    root: true,
    // exclude these
    reject: [
        // version 0.17.0 is broken
        '@web/test-runner',
        // not ready for v3
        'prettier',
    ],
    // include only these
    filter: [],
};
