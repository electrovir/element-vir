import {BookPageControlType, defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {ViraBoldText} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

export const viraBoldTextPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraBoldText.tagName,
    descriptionParagraphs: [
        "Reserves space for bolded text, even if the text isn't currently bold.",
    ],
    controls: {
        bolded: {
            controlType: BookPageControlType.Checkbox,
            initValue: false,
        },
    },
    defineExamples({defineExample}) {
        defineExample({
            title: 'Not bold',
            render() {
                return html`
                    <${ViraBoldText.assign({
                        text: 'Text here',
                        bold: false,
                    })}></${ViraBoldText}>
                `;
            },
        });
        defineExample({
            title: 'Bold',
            render() {
                return html`
                    <${ViraBoldText.assign({
                        text: 'Text here',
                        bold: true,
                    })}></${ViraBoldText}>
                `;
            },
        });
        defineExample({
            title: 'Dynamic',
            render({controls}) {
                return html`
                    <${ViraBoldText.assign({
                        text: 'Text here',
                        bold: controls.bolded,
                    })}></${ViraBoldText}>
                `;
            },
        });
        defineExample({
            title: 'Resized',
            styles: css`
                ${ViraBoldText} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,
            render() {
                return html`
                    <${ViraBoldText.assign({
                        text: 'Not Bolded',
                        bold: false,
                    })}></${ViraBoldText}>
                    <${ViraBoldText.assign({
                        text: 'Bolded',
                        bold: true,
                    })}></${ViraBoldText}>
                `;
            },
        });

        defineExample({
            title: 'Alignment',
            styles: css`
                ${ViraBoldText} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,
            render() {
                return html`
                    <${ViraBoldText.assign({
                        text: 'Not Bolded',
                        bold: false,
                    })}></${ViraBoldText}>
                    <${ViraBoldText.assign({
                        text: 'Bolded',
                        bold: true,
                    })}></${ViraBoldText}>
                `;
            },
        });
        defineExample({
            title: 'Stylized',
            styles: css`
                ${ViraBoldText} {
                    text-decoration: underline;
                }
            `,
            render() {
                return html`
                    <${ViraBoldText.assign({
                        text: 'Not Bolded',
                        bold: false,
                    })}></${ViraBoldText}>
                    <${ViraBoldText.assign({
                        text: 'Bolded',
                        bold: true,
                    })}></${ViraBoldText}>
                `;
            },
        });
    },
});
