import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {ViraMenuOptions} from 'vira';
import {elementsBookPage} from '../../elements.book.js';

const options = [
    {
        id: 1,
        label: 'one',
    },
    {
        id: 2,
        label: 'two',
    },
    {
        id: 3,
        label: 'three',
    },
] as const;

const examples: {title: string; inputs?: Partial<typeof ViraMenuOptions.InputsType> | undefined}[] =
    [
        {
            title: 'basic',
        },
        {
            title: 'with selection',
            inputs: {
                selectedOptions: [
                    options[1],
                ],
            },
        },
    ];

export const viraMenuOptionsBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraMenuOptions.tagName,
    defineExamples({defineExample}) {
        examples.forEach((example) => {
            defineExample({
                title: example.title,
                render() {
                    return html`
                        <${ViraMenuOptions.assign({
                            isMultiSelect: false,
                            navController: undefined,
                            options,
                            selectedOptions: [],
                            ...example.inputs,
                        })}></${ViraMenuOptions}>
                    `;
                },
            });
        });
    },
});
