import {describe, itCases} from '@augment-vir/test';
import {unsafeHTML, unsafeSVG} from '../lit-exports/all-lit-exports.js';
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
        {
            it: 'prefers templateString over strings and values',
            input: {
                templateString: '<div>raw</div>',
                strings: ['<span>ignored</span>'],
                values: ['also ignored'],
            } as never,
            expect: '<div>raw</div>',
        },
        {
            it: 'handles strings with no values at all',
            input: {
                strings: ['<div>hello</div>'],
                values: undefined,
            } as never,
            expect: '<div>hello</div>',
        },
        {
            it: 'handles strings with an empty values array',
            input: {
                strings: ['<div>hello</div>'],
                values: [],
            } as never,
            expect: '<div>hello</div>',
        },
        {
            it: 'keeps values when strings is an empty array',
            input: {
                strings: [],
                values: ['kept'],
            } as never,
            expect: 'kept',
        },
        {
            it: 'collapses whitespace and trims',
            input: {
                strings: ['\n    <div>\n        hello    there\n    </div>\n'],
                values: [],
            } as never,
            expect: '<div> hello there </div>',
        },
        {
            it: 'renders a directive interpolated as a child',
            input: html`
                <div>${unsafeHTML('<b>bold</b>')}</div>
            `,
            expect: '<div><b>bold</b></div>',
        },
        {
            it: 'interpolates a number',
            input: html`
                <p>${42}</p>
            `,
            expect: '<p>42</p>',
        },
        {
            it: 'does not quote an interpolation inside an already quoted attribute',
            input: html`
                <img src="${'quoted'}" />
            `,
            expect: '<img src="quoted" />',
        },
        {
            it: 'renders nothing for an undefined interpolated value',
            input: {
                strings: [
                    '<p>',
                    '</p>',
                ],
                values: [undefined],
            } as never,
            expect: '<p></p>',
        },
        {
            it: 'renders nothing for a null interpolated value',
            input: {
                strings: [
                    '<p>',
                    '</p>',
                ],
                values: [null],
            } as never,
            expect: '<p></p>',
        },
        {
            it: 'renders an empty attribute value for a nullish interpolation',
            input: {
                strings: [
                    '<img src=',
                    ' />',
                ],
                values: [undefined],
            } as never,
            expect: '<img src="" />',
        },
        {
            it: 'renders an empty attribute value for a null interpolation',
            input: {
                strings: [
                    '<img src=',
                    ' />',
                ],
                values: [null],
            } as never,
            expect: '<img src="" />',
        },
        {
            it: 'does not add quotes for a nullish value inside an already quoted attribute',
            input: {
                strings: [
                    '<img src="',
                    '" />',
                ],
                values: [undefined],
            } as never,
            expect: '<img src="" />',
        },
        {
            it: 'mixes nullish and non-nullish values',
            input: {
                strings: [
                    '<p>',
                    '|',
                    '|',
                    '</p>',
                ],
                values: [
                    undefined,
                    'kept',
                    null,
                ],
            } as never,
            expect: '<p>|kept|</p>',
        },
        {
            it: 'renders nothing for a nullish value when strings is an empty array',
            input: {
                strings: [],
                values: [undefined],
            } as never,
            expect: '',
        },
        {
            it: 'keeps values when strings is undefined',
            input: {
                strings: undefined,
                values: ['kept'],
            } as never,
            expect: 'kept',
        },
        {
            it: 'keeps a zero value that is not nullish',
            input: {
                strings: [
                    '<p>',
                    '</p>',
                ],
                values: [0],
            } as never,
            expect: '<p>0</p>',
        },
        {
            it: 'quotes a falsy attribute value that is not nullish',
            input: {
                strings: [
                    '<img alt=',
                    ' />',
                ],
                values: [false],
            } as never,
            expect: '<img alt="false" />',
        },
        {
            it: 'quotes an empty string attribute value',
            input: {
                strings: [
                    '<img alt=',
                    ' />',
                ],
                values: [''],
            } as never,
            expect: '<img alt="" />',
        },
        {
            it: 'renders a nested template into an attribute position without quotes',
            input: html`
                <img
                    src=${html`
                        nested-source
                    `}
                />
            `,
            expect: '<img src=nested-source />',
        },
        {
            it: 'renders an array that mixes templates and raw template strings',
            input: {
                strings: [
                    '<ul>',
                    '</ul>',
                ],
                values: [
                    [
                        html`
                            <li>a</li>
                        `,
                        {
                            templateString: '<li>b</li>',
                        },
                    ],
                ],
            } as never,
            expect: '<ul><li>a</li><li>b</li></ul>',
        },
        {
            it: 'renders nothing for nullish entries within an array',
            input: {
                strings: [
                    '<ul>',
                    '</ul>',
                ],
                values: [
                    [
                        undefined,
                        html`
                            <li>a</li>
                        `,
                        null,
                    ],
                ],
            } as never,
            expect: '<ul><li>a</li></ul>',
        },
        {
            it: 'renders an array of primitives',
            input: {
                strings: [
                    '<p>',
                    '</p>',
                ],
                values: [
                    [
                        'a',
                        42,
                        false,
                    ],
                ],
            } as never,
            expect: '<p>a42false</p>',
        },
        {
            it: 'renders nested arrays',
            input: {
                strings: [
                    '<p>',
                    '</p>',
                ],
                values: [
                    [
                        'a',
                        [
                            'b',
                            'c',
                        ],
                    ],
                ],
            } as never,
            expect: '<p>abc</p>',
        },
        {
            it: 'renders a raw template string object in a value position',
            input: {
                strings: [
                    '<p>',
                    '</p>',
                ],
                values: [
                    {
                        templateString: '<span>raw</span>',
                    },
                ],
            } as never,
            expect: '<p><span>raw</span></p>',
        },
    ]);
});
