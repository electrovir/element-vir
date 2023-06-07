import {RunOptions} from 'npm-check-updates';

export const ncuConfig: RunOptions = {
    color: true,
    upgrade: true,
    root: true,
    // exclude these
    reject: [
        // TS 5.1 is currently messed up
        'typescript',
    ],
    // include only these
    filter: [],
};
