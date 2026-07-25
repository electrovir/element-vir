import {describe, itCases} from '@augment-vir/test';
import {unsafeSVG} from '../lit-exports/all-lit-exports.js';
import {html} from '../template-transforms/vir-html/vir-html.js';
import {convertTemplateToString} from './lit-template.js';

describe(convertTemplateToString.name, () => {
    itCases(convertTemplateToString, [
        {
            it: 'handles attributes that are not surrounded in quotes',
            input: html`
                <img src=${'what have we here!?'} />
            `,
            expect: '<img src="what have we here!?" />',
        },
        {
            it: 'handles unsafe SVG',
            input: unsafeSVG('<svg></svg>'),
            expect: '<svg></svg>',
        },
        {
            it: 'returns the raw string when given a templateString object',
            input: {
                templateString: '<div>raw</div>',
            },
            expect: '<div>raw</div>',
        },
        {
            it: 'returns empty for a fully empty template',
            input: {
                strings: undefined,
                values: undefined,
            } as never,
            expect: '',
        },
        {
            it: 'renders a nested template literal in child position',
            input: html`
                <p>
                    ${html`
                        <span>nested</span>
                    `}
                </p>
            `,
            expect: '<p> <span>nested</span> </p>',
        },
        {
            it: 'renders an array of templates concatenated',
            input: html`
                <ul>
                    ${[
                        html`
                            <li>a</li>
                        `,
                        html`
                            <li>b</li>
                        `,
                    ]}
                </ul>
            `,
            expect: '<ul> <li>a</li><li>b</li> </ul>',
        },
    ]);
});
