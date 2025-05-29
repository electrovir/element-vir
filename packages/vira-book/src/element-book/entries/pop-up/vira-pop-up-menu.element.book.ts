import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {ViraPopUpMenu} from 'vira';
import {elementsBookPage} from '../../elements.book.js';

export const viraPopUpMenuBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraPopUpMenu.tagName,
    defineExamples({defineExample}) {
        defineExample({
            title: 'basic',
            styles: css`
                .content {
                    padding: 8px 16px;
                }
            `,
            render() {
                return html`
                    <${ViraPopUpMenu}><div class="content">Contents</div></${ViraPopUpMenu}>
                `;
            },
        });
        defineExample({
            title: 'up',
            styles: css`
                .content {
                    padding: 8px 16px;
                }
            `,
            render() {
                return html`
                    <${ViraPopUpMenu.assign({openUpwards: true})}>
                        <div class="content">Contents</div>
                    </${ViraPopUpMenu}>
                `;
            },
        });
    },
});
