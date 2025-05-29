import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {ViraMenu} from 'vira';
import {elementsBookPage} from '../../elements.book.js';

const items = [
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

const examples: {title: string; inputs?: Partial<typeof ViraMenu.InputsType> | undefined}[] = [
    {
        title: 'basic',
    },
    {
        title: 'with selection',
        inputs: {
            selected: [
                2,
            ],
        },
    },
];

export const viraMenuOptionsBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraMenu.tagName,
    defineExamples({defineExample}) {
        examples.forEach((example) => {
            defineExample({
                title: example.title,
                render() {
                    return html`
                        <${ViraMenu.assign({
                            isMultiSelect: false,
                            navController: undefined,
                            items,
                            selected: [],
                            ...example.inputs,
                        })}></${ViraMenu}>
                    `;
                },
            });
        });
    },
});
