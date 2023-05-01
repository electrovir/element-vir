import {itCases} from '@augment-vir/browser-testing';
import {unsafeSVG} from 'lit/directives/unsafe-svg.js';
import {html, templateToString} from '../..';

describe(templateToString.name, () => {
    itCases(templateToString, [
        {
            it: 'should handle attributes that are not surrounded in quotes',
            input: html`
                <img src=${'what have we here!?'} />
            `,
            expect: '<img src="what have we here!?" />',
        },
        {
            it: 'should handle unsafe SVG',
            input: unsafeSVG(`<rect width="10" height="10"></rect>`),
            expect: '<rect width="10" height="10"></rect>',
        },
    ]);
});
