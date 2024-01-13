import {defineBookPage} from 'element-book';
import {html} from '../../../template-transforms/vir-html/vir-html';

export const undefinedInterpolationBookPage = defineBookPage({
    title: 'undefined interpolation',
    parent: undefined,
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'undefined',
            renderCallback() {
                return html`
                    here: ${undefined}
                `;
            },
        });
        defineExample({
            title: 'empty string',
            renderCallback() {
                return html`
                    here: ${''}
                `;
            },
        });
        defineExample({
            title: 'null',
            renderCallback() {
                return html`
                    here: ${null}
                `;
            },
        });
    },
});
