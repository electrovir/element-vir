import {randomInteger} from '@augment-vir/browser';
import {defineBookPage} from 'element-book';
import {
    createObservablePropertyWithSetter,
    defineElement,
    defineElementNoInputs,
    html,
    listen,
} from '../../../../';

const myObservableProp = createObservablePropertyWithSetter(5);

const VirObservablePropInputTestParent = defineElementNoInputs({
    tagName: 'vir-observable-prop-input-test-parent',
    stateInitStatic: {
        renderCount: 0,
    },
    renderCallback({state, updateState}) {
        updateState({renderCount: state.renderCount + 1});
        return html`
            <p>Parent render count (should not change): ${state.renderCount}</p>
            <p>
                <${VirObservablePropInputTestChild.assign({
                    observableProp: myObservableProp,
                })}></${VirObservablePropInputTestChild}>
            </p>
            <p>
                <button
                    ${listen('click', () => {
                        myObservableProp.setValue(randomInteger({min: 1, max: 100}));
                    })}
                >
                    trigger update
                </button>
            </p>
        `;
    },
});
const VirObservablePropInputTestChild = defineElement<{observableProp: typeof myObservableProp}>()({
    tagName: 'vir-observable-prop-input-test-child',
    stateInitStatic: {
        renderCount: 0,
    },
    renderCallback({inputs, state, updateState}) {
        updateState({renderCount: state.renderCount + 1});
        return html`
            <p>child render count (should increase): ${state.renderCount}</p>
            <p>observableProp value: ${inputs.observableProp.value}</p>
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
                    <${VirObservablePropInputTestParent}></${VirObservablePropInputTestParent}>
                `;
            },
        });
    },
});
