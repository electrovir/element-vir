import {getEnumValues} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {PopUpMenuCornerStyle, PopUpMenuDirection, ViraPopUpMenu} from 'vira';
import {elementsBookPage} from '../../top-level-pages.js';

const examples: {title: string; inputs: typeof ViraPopUpMenu.InputsType}[] = [];

getEnumValues(PopUpMenuDirection).forEach((direction) => {
    getEnumValues(PopUpMenuCornerStyle).forEach((cornerStyle) => {
        examples.push({
            title: [
                direction,
                cornerStyle,
            ].join(' '),
            inputs: {
                cornerStyle,
                direction,
            },
        });
    });
});

export const viraPopUpMenuBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraPopUpMenu.tagName,
    defineExamples({defineExample}) {
        examples.forEach((example) => {
            defineExample({
                title: example.title,
                styles: css`
                    .content {
                        padding: 8px 16px;
                    }
                `,
                render() {
                    return html`
                        <${ViraPopUpMenu.assign(example.inputs)}>
                            <div class="content">Contents</div>
                        </${ViraPopUpMenu}>
                    `;
                },
            });
        });
    },
});
