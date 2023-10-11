import {randomInteger} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {
    createObservablePropertyWithSetter,
    defineElement,
    defineElementNoInputs,
    html,
    listen,
} from '../../..';

const myObservableProp = createObservablePropertyWithSetter(5);

const VirObservablePropsTestParent = defineElementNoInputs({
    tagName: 'vir-observable-prop-input-test-parent',
    stateInitStatic: {
        renderCount: 0,
    },
    renderCallback({state, updateState}) {
        updateState({renderCount: state.renderCount + 1});
        return html`
            <p>Parent render count (should not change): ${state.renderCount}</p>
            <p>
                <${VirObservablePropsTestChild.assign({
                    observableProp: myObservableProp,
                })}></${VirObservablePropsTestChild}>
            </p>
            <p>
                <button
                    ${listen('click', () => {
                        myObservableProp.setValue(randomInteger({min: 1, max: 100}));
                    })}
                >
                    trigger update from parent
                </button>
            </p>
        `;
    },
});
const VirObservablePropsTestChild = defineElement<{observableProp: typeof myObservableProp}>()({
    tagName: 'vir-observable-prop-input-test-child',
    stateInitStatic: {
        renderCount: 0,
    },
    renderCallback({inputs, state, updateState}) {
        updateState({renderCount: state.renderCount + 1});
        return html`
            <p>child render count (should increase): ${state.renderCount}</p>
            <p>observableProp value: ${inputs.observableProp.value}</p>
            <p>
                <button
                    ${listen('click', () => {
                        inputs.observableProp.setValue(randomInteger({min: 101, max: 200}));
                    })}
                >
                    trigger update from child
                </button>
            </p>
        `;
    },
});

export const observablePropInputTestPage = defineBookPage({
    title: 'observable prop input',
    parent: undefined,
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'test',
            renderCallback() {
                return html`
                    <${VirObservablePropsTestParent}></${VirObservablePropsTestParent}>
                `;
            },
        });
    },
});
