import {BookPageControlType, defineBookPage, definePageControl} from 'element-book';
import {type CSSResult, type HTMLTemplateResult, css, html} from 'element-vir';
import {ViraMenuItem} from 'vira';
import {elementsBookPage} from '../../top-level-pages.js';

const examples: ReadonlyArray<{
    title: string;
    inputs: typeof ViraMenuItem.InputsType;
    customStyle?: CSSResult;
    customTemplate?: HTMLTemplateResult;
}> = [
    {
        title: 'unselected',
        inputs: {
            label: 'my label',
            selected: false,
        },
    },
    {
        title: 'selected',
        inputs: {
            label: 'my label',
            selected: true,
        },
    },
    {
        title: 'with custom child',
        inputs: {
            label: 'custom child',
            selected: true,
        },
        customTemplate: html`
            <b>This is custom</b>
        `,
    },
    {
        title: 'constrained width',
        customStyle: css`
            :host {
                max-width: 100px;
            }
        `,
        inputs: {
            label: 'has more text than is possible to fit',
            selected: true,
        },
    },
    {
        title: 'stretched width',
        customStyle: css`
            ${ViraMenuItem} {
                width: 400px;
            }
        `,
        inputs: {
            label: 'wide',
            selected: true,
        },
    },
];

export const viraMenuItemBookPage = defineBookPage({
    title: ViraMenuItem.tagName,
    parent: elementsBookPage,
    controls: {
        Selected: definePageControl({
            controlType: BookPageControlType.Dropdown,
            initValue: '',
            options: [
                '',
                'all',
                'none',
            ],
        }),
        Label: definePageControl({
            controlType: BookPageControlType.Text,
            initValue: '',
        }),
    },
    defineExamples({defineExample}) {
        examples.forEach((example) => {
            defineExample({
                title: example.title,
                state() {
                    return {
                        selected: example.inputs.selected || [],
                    };
                },
                styles: example.customStyle,
                render({controls}) {
                    const finalInputs: typeof ViraMenuItem.InputsType = {
                        label: controls.Label || example.inputs.label,
                        selected: controls.Selected
                            ? controls.Selected === 'all'
                            : example.inputs.selected,
                    };

                    if (example.customTemplate) {
                        return html`
                            <${ViraMenuItem.assign(finalInputs)}>
                                ${example.customTemplate}
                            </${ViraMenuItem}>
                        `;
                    } else {
                        return html`
                            <${ViraMenuItem.assign(finalInputs)}></${ViraMenuItem}>
                        `;
                    }
                },
            });
        });
    },
});
