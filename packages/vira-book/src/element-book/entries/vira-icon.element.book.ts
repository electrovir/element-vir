import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {Element24Icon, ViraIcon, createColoredIcon} from 'vira';
import {elementsBookPage} from '../elements.book';

export const viraIconBookPage = defineBookPage({
    title: ViraIcon.tagName,
    parent: elementsBookPage,
    descriptionParagraphs: [
        "See the 'Icons' page for a list of all included icons.",
    ],
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'basic',
            renderCallback() {
                return html`
                    <${ViraIcon.assign({icon: Element24Icon})}></${ViraIcon}>
                `;
            },
        });
        defineExample({
            title: 'using createColoredIcon',
            renderCallback() {
                return html`
                    <${ViraIcon.assign({
                        icon: createColoredIcon(Element24Icon, {
                            'vira-icon-stroke-color': 'red',
                        }),
                    })}></${ViraIcon}>
                `;
            },
        });
    },
});
