import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {viraFocusCssVars, ViraPopUpTrigger} from 'vira';
import {elementsBookPage} from '../elements.book.js';

export const viraPopUpTriggerBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraPopUpTrigger.tagName,
    defineExamples({defineExample}) {
        defineExample({
            title: 'basic',
            styles: css`
                ${ViraPopUpTrigger} {
                    ${viraFocusCssVars['vira-focus-outline-border-radius'].name}: 0;
                }

                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .menu {
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    background-color: #eef9ff;
                }
            `,
            render() {
                return html`
                    <${ViraPopUpTrigger}>
                        <div class="trigger" slot=${ViraPopUpTrigger.slotNames.trigger}>
                            Trigger Pop Up
                        </div>
                        <div class="menu" slot=${ViraPopUpTrigger.slotNames.popUp}>Pop up!</div>
                    </${ViraPopUpTrigger}>
                `;
            },
        });
    },
});
