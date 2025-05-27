import {describe, itCases} from '@augment-vir/test';
import {calculateContrast, ContrastLevelName, contrastLevelNameMap} from './contrast.js';

describe(calculateContrast.name, () => {
    itCases(calculateContrast, [
        {
            it: 'works on high contrast',
            input: {
                foreground: 'black',
                background: 'white',
            },
            expect: {
                contrast: 106,
                fontSizes: {
                    '100': 38,
                    '200': 25,
                    '300': 18,
                    '400': 14.5,
                    '500': 14,
                    '600': 13,
                    '700': 12,
                    '800': 16,
                    '900': 18,
                },
                contrastLevel: contrastLevelNameMap[ContrastLevelName.SmallBodyText],
            },
        },
        {
            it: 'works on no contrast',
            input: {
                foreground: 'white',
                background: 'white',
            },
            expect: {
                contrast: 0,
                fontSizes: {
                    '100': 999,
                    '200': 999,
                    '300': 999,
                    '400': 999,
                    '500': 999,
                    '600': 999,
                    '700': 999,
                    '800': 999,
                    '900': 999,
                },
                contrastLevel: contrastLevelNameMap[ContrastLevelName.Invisible],
            },
        },
    ]);
});
