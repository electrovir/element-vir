import {defineElement, html, listen, mutate, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const MutateDirectiveElement = defineElement()({
    tagName: 'mutate-directive-element',
    state() {
        return {
            highlight: false,
        };
    },
    testIds: [
        'target',
        'toggle',
    ],
    render({state, updateState, testIds}) {
        return html`
            <button
                ${testId(testIds.toggle)}
                ${listen('click', () => {
                    updateState({
                        highlight: !state.highlight,
                    });
                })}
            >
                toggle
            </button>
            <span
                ${testId(testIds.target)}
                ${mutate(({element}) => {
                    if (state.highlight) {
                        element.setAttribute('data-mutated', 'yes');
                    } else {
                        element.removeAttribute('data-mutated');
                    }
                })}
            >
                target
            </span>
        `;
    },
});

export const mutateDirectiveTest = await defineBookTest(
    'mutate directive',
    {
        render() {
            return html`
                <${MutateDirectiveElement}></${MutateDirectiveElement}>
            `;
        },
    },
    {
        async 'mutate runs the callback with the element each render'({e2eUtil, page}) {
            const target = page.getByTestId(MutateDirectiveElement.testIds.target);
            await e2eUtil.expect(target).not.toHaveAttribute('data-mutated');

            await page.getByTestId(MutateDirectiveElement.testIds.toggle).click();
            await e2eUtil.expect(target).toHaveAttribute('data-mutated', 'yes');

            await page.getByTestId(MutateDirectiveElement.testIds.toggle).click();
            await e2eUtil.expect(target).not.toHaveAttribute('data-mutated');
        },
    },
);
