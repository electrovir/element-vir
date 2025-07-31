import {BookPageControlType, defineBookPage} from 'element-book';
import {css, html, listen} from 'element-vir';
import {ViraCheckbox} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

export const viraCheckboxBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraCheckbox.tagName,
    controls: {
        Checked: {
            controlType: BookPageControlType.Checkbox,
            initValue: false,
        },
        Disabled: {
            controlType: BookPageControlType.Checkbox,
            initValue: false,
        },
    },
    defineExamples({defineExample}) {
        defineExample({
            title: 'checked',
            state() {
                return {
                    checked: true,
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraCheckbox.assign({
                        value: state.checked,
                    })}
                        ${listen(ViraCheckbox.events.valueChange, (event) => {
                            updateState({
                                checked: event.detail,
                            });
                        })}
                    ></${ViraCheckbox}>
                `;
            },
        });
        defineExample({
            title: 'unchecked',
            state() {
                return {
                    checked: false,
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraCheckbox.assign({
                        value: state.checked,
                    })}
                        ${listen(ViraCheckbox.events.valueChange, (event) => {
                            updateState({
                                checked: event.detail,
                            });
                        })}
                    ></${ViraCheckbox}>
                `;
            },
        });
        defineExample({
            title: 'disabled unchecked',
            render() {
                return html`
                    <${ViraCheckbox.assign({
                        value: false,
                        disabled: true,
                    })}></${ViraCheckbox}>
                `;
            },
        });
        defineExample({
            title: 'disabled checked',
            render() {
                return html`
                    <${ViraCheckbox.assign({
                        value: true,
                        disabled: true,
                    })}></${ViraCheckbox}>
                `;
            },
        });
        defineExample({
            title: 'dynamic',
            descriptionParagraphs: ['Should only update when controls change.'],
            render({controls}) {
                return html`
                    <${ViraCheckbox.assign({
                        value: controls.Checked,
                        disabled: controls.Disabled,
                    })}></${ViraCheckbox}>
                `;
            },
        });
        defineExample({
            title: 'no listener',
            descriptionParagraphs: ['Should not update on user clicks.'],
            render() {
                return html`
                    <${ViraCheckbox.assign({
                        value: true,
                    })}></${ViraCheckbox}>
                `;
            },
        });
        defineExample({
            title: 'big',
            styles: css`
                ${ViraCheckbox} {
                    height: 200px;
                    width: 200px;
                }
            `,
            state() {
                return {
                    checked: true,
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraCheckbox.assign({
                        value: state.checked,
                    })}
                        ${listen(ViraCheckbox.events.valueChange, (event) => {
                            updateState({
                                checked: event.detail,
                            });
                        })}
                    ></${ViraCheckbox}>
                `;
            },
        });
    },
});
