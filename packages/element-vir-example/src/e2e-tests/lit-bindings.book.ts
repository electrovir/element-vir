import {defineElement, html, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const LitBindingsElement = defineElement()({
    tagName: 'lit-bindings-element',
    state() {
        return {
            inputValue: 'initial',
            disabled: false,
            clickCount: 0,
        };
    },
    testIds: [
        'input',
        'button',
        'report',
    ],
    render({state, updateState, testIds}) {
        return html`
            <input
                ${testId(testIds.input)}
                type="text"
                .value=${state.inputValue}
                @input=${(event: Event) => {
                    updateState({
                        inputValue: (event.target as HTMLInputElement).value,
                    });
                }}
            />
            <button
                ${testId(testIds.button)}
                ?disabled=${state.disabled}
                @click=${() => {
                    updateState({
                        clickCount: state.clickCount + 1,
                    });
                }}
            >
                click
            </button>
            <span ${testId(testIds.report)}>${state.inputValue}/${state.clickCount}</span>
        `;
    },
});

export const litBindingsTest = await defineBookTest(
    'lit bindings',
    {
        render() {
            return html`
                <${LitBindingsElement}></${LitBindingsElement}>
            `;
        },
    },
    {
        async 'property binding sets the .value property on inputs'({e2eUtil, page}) {
            await e2eUtil
                .expect(page.getByTestId(LitBindingsElement.testIds.input))
                .toHaveValue('initial');
        },
        async 'native event binding fires the listener'({e2eUtil, page}) {
            await page.getByTestId(LitBindingsElement.testIds.button).click();
            await page.getByTestId(LitBindingsElement.testIds.button).click();
            await e2eUtil
                .expect(page.getByTestId(LitBindingsElement.testIds.report))
                .toHaveText('initial/2');
        },
        async 'input event updates state via property binding round-trip'({e2eUtil, page}) {
            await page.getByTestId(LitBindingsElement.testIds.input).fill('changed');
            await e2eUtil
                .expect(page.getByTestId(LitBindingsElement.testIds.report))
                .toHaveText('changed/0');
        },
    },
);
