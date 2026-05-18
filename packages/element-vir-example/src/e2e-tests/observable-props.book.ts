import {Observable, defineElement, html, listen, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const observable = new Observable({
    defaultValue: 0,
});

const ObservablePropsChild = defineElement<{observableProp: typeof observable}>()({
    tagName: 'observable-props-child',
    state() {
        return {
            renderCount: 0,
        };
    },
    testIds: [
        'render-count',
        'value',
        'set',
    ],
    render({inputs, state, updateState, testIds}) {
        updateState({
            renderCount: state.renderCount + 1,
        });
        return html`
            <span ${testId(testIds['render-count'])}>${state.renderCount}</span>
            <span ${testId(testIds.value)}>${inputs.observableProp.value}</span>
            <button
                ${testId(testIds.set)}
                ${listen('click', () => {
                    inputs.observableProp.setValue(inputs.observableProp.value + 1);
                })}
            >
                set observable
            </button>
        `;
    },
});

const ObservablePropsParent = defineElement()({
    tagName: 'observable-props-parent',
    state() {
        return {
            parentRenderCount: 0,
            unrelatedToggle: false,
        };
    },
    testIds: [
        'render-count',
        'bump',
    ],
    render({state, updateState, testIds}) {
        updateState({
            parentRenderCount: state.parentRenderCount + 1,
        });
        return html`
            <span ${testId(testIds['render-count'])}>${state.parentRenderCount}</span>
            <button
                ${testId(testIds.bump)}
                ${listen('click', () => {
                    updateState({
                        unrelatedToggle: !state.unrelatedToggle,
                    });
                })}
            >
                bump parent
            </button>
            <${ObservablePropsChild.assign({
                observableProp: observable,
            })}></${ObservablePropsChild}>
        `;
    },
});

export const observablePropsTest = await defineBookTest(
    'observable props',
    {
        render() {
            return html`
                <${ObservablePropsParent}></${ObservablePropsParent}>
            `;
        },
    },
    {
        async 'observable update re-renders only the child, not the parent'({e2eUtil, page}) {
            const parentRender = page.getByTestId(ObservablePropsParent.testIds['render-count']);
            const childRender = page.getByTestId(ObservablePropsChild.testIds['render-count']);
            const observableValue = page.getByTestId(ObservablePropsChild.testIds.value);

            const initialParent = await parentRender.textContent();
            const initialChild = await childRender.textContent();
            const initialObservableValue = Number(await observableValue.textContent());

            await page.getByTestId(ObservablePropsChild.testIds.set).click();

            await e2eUtil.expect(observableValue).toHaveText(String(initialObservableValue + 1));
            await e2eUtil.expect(parentRender).toHaveText(String(initialParent));
            await e2eUtil.expect(childRender).not.toHaveText(String(initialChild));
        },
    },
);
