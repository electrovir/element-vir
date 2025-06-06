import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {SpaRouter} from 'spa-router-vir';
import {type MenuItem, PopUpMenuCornerStyle, ViraMenuTrigger} from 'vira';
import {elementsBookPage} from '../../elements.book.js';

const mockMenuItems: MenuItem[] = [
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
    {
        id: 4,
        label: 'four',
    },
    {
        id: 5,
        label: 'five',
    },
    {
        id: 6,
        label: 'six',
    },
    {
        id: 7,
        label: 'link here',
        route: {
            route: {
                paths: [
                    'test',
                ],
            },
            router: new SpaRouter({
                sanitizeRoute(rawRoute) {
                    return rawRoute;
                },
            }),
        },
    },
];

const examples: {title: string; inputs?: Partial<typeof ViraMenuTrigger.InputsType>}[] = [
    {
        title: 'basic',
    },
    {
        title: 'multi',
        inputs: {
            isMultiSelect: true,
        },
    },
    {
        title: 'rounded',
        inputs: {
            menuCornerStyle: PopUpMenuCornerStyle.AllRounded,
        },
    },
    {
        title: 'no checks',
        inputs: {
            hideCheckIcons: true,
        },
    },
    {
        title: 'disabled',
        inputs: {
            isDisabled: true,
        },
    },
];

export const viraMenuTriggerBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraMenuTrigger.tagName,
    defineExamples({defineExample}) {
        examples.forEach((example) => {
            defineExample({
                title: example.title,
                styles: css`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,
                render() {
                    return html`
                        <${ViraMenuTrigger.assign({
                            items: mockMenuItems,
                            popUpOffset: {
                                vertical: -1,
                            },
                            ...example.inputs,
                        })}>
                            <div class="trigger">Trigger Menu</div>
                        </${ViraMenuTrigger}>
                    `;
                },
            });
        });
    },
});
