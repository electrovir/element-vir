import {defineElement, defineElementEvent, html, listen, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const DeepGrandchild = defineElement<{message: string}>()({
    tagName: 'deep-grandchild',
    events: {
        echoed: defineElementEvent<string>(),
    },
    render({inputs, events, dispatch}) {
        return html`
            <span ${testId('deep-grandchild-message')}>${inputs.message}</span>
            <button
                ${testId('deep-grandchild-echo')}
                ${listen('click', () => {
                    dispatch(new events.echoed(`echo: ${inputs.message}`));
                })}
            >
                echo
            </button>
        `;
    },
});

const DeepChild = defineElement<{forward: string}>()({
    tagName: 'deep-child',
    render({inputs}) {
        return html`
            <${DeepGrandchild.assign({
                message: inputs.forward,
            })}></${DeepGrandchild}>
        `;
    },
});

const DeepParent = defineElement<{seed: string}>()({
    tagName: 'deep-parent',
    render({inputs}) {
        return html`
            <${DeepChild.assign({
                forward: inputs.seed,
            })}></${DeepChild}>
        `;
    },
});

export const deepNestingTest = await defineBookTest(
    'deep nesting',
    {
        state() {
            return {
                received: 'none',
            };
        },
        render({state, updateState}) {
            return html`
                <span ${testId('deep-root-report')}>${state.received}</span>
                <${DeepParent.assign({
                    seed: 'forwarded',
                })}
                    ${listen(DeepGrandchild.events.echoed, (event) => {
                        updateState({
                            received: event.detail,
                        });
                    })}
                ></${DeepParent}>
            `;
        },
    },
    {
        async 'inputs propagate down three levels'({e2eUtil, page}) {
            await e2eUtil
                .expect(page.getByTestId('deep-grandchild-message'))
                .toHaveText('forwarded');
        },
        async 'events bubble up three levels'({e2eUtil, page}) {
            await page.getByTestId('deep-grandchild-echo').click();
            await e2eUtil
                .expect(page.getByTestId('deep-root-report'))
                .toHaveText('echo: forwarded');
        },
    },
);
