import {type PartialWithUndefined} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {css, html, type CSSResult} from 'element-vir';
import {ViraProgress} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

const examples: ({
    title: string;
} & PartialWithUndefined<{
    styles: CSSResult;
    inputs: (typeof ViraProgress)['InputsType'];
}>)[] = [
    {
        title: 'basic',
    },
    {
        title: 'adjusted min',
        inputs: {
            min: -100,
            value: -50,
        },
    },
    {
        title: 'out of bounds',
        inputs: {
            value: 200,
        },
    },
    {
        title: 'tiny progress',
        inputs: {
            value: 0.5,
        },
    },
    {
        title: 'tiny bit more progress',
        inputs: {
            value: 2,
        },
    },
    {
        title: 'no progress',
        inputs: {
            value: 0,
        },
    },
    {
        title: 'full progress',
        inputs: {
            value: 100,
        },
    },
    {
        title: 'custom styles tiny progress',
        styles: css`
            :host {
                ${ViraProgress.cssVars['vira-progress-background-color'].name}: red;
                ${ViraProgress.cssVars['vira-progress-foreground-color'].name}: black;
                ${ViraProgress.cssVars['vira-progress-border-radius'].name}: 5px;
            }

            ${ViraProgress} {
                height: 50px;
                width: 200px;
            }
        `,
        inputs: {
            value: 0.5,
        },
    },
    {
        title: 'custom styles half',
        styles: css`
            :host {
                ${ViraProgress.cssVars['vira-progress-background-color'].name}: red;
                ${ViraProgress.cssVars['vira-progress-foreground-color'].name}: yellow;
                ${ViraProgress.cssVars['vira-progress-border-radius'].name}: 5px;
            }

            ${ViraProgress} {
                height: 50px;
                width: 200px;
            }
        `,
    },
    {
        title: 'custom styles full',
        styles: css`
            :host {
                ${ViraProgress.cssVars['vira-progress-background-color'].name}: red;
                ${ViraProgress.cssVars['vira-progress-foreground-color'].name}: yellow;
                ${ViraProgress.cssVars['vira-progress-border-radius'].name}: 5px;
            }

            ${ViraProgress} {
                height: 50px;
                width: 200px;
            }
        `,
        inputs: {
            value: 100,
        },
    },
];

export const viraProgressBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraProgress.tagName,
    defineExamples({defineExample}) {
        examples.forEach((example) => {
            defineExample({
                title: example.title,
                styles: css`
                    ${example.styles || css``}
                `,
                render() {
                    return html`
                        <${ViraProgress.assign({
                            value: 50,
                            ...example.inputs,
                        })}></${ViraProgress}>
                    `;
                },
            });
        });
    },
});
