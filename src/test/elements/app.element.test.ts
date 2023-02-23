import {typedAssertInstanceOf} from '@augment-vir/browser-testing';
import {RequiredAndNotNullBy} from '@augment-vir/common';
import {assert, expect, fixture, waitUntil} from '@open-wc/testing';
import {html} from '../..';
import {clickElement} from '../../augments/testing.test-helper';
import {AppElement} from './app.element';
import {TestChildElement} from './child.element';

function assertDefined<T>(value: T, message?: string): asserts value is NonNullable<T> {
    assert.isDefined(value, message);
    assert.isNotNull(value, message);
}

/** Accounts for shadow DOM */
function queryTree(
    context: Element | undefined,
    // at least one string is required or this function makes no sense
    selectors: [string, ...string[]],
): Element | undefined {
    /**
     * The callback is split out here to appears the Type Gods. Without it, finalElement will be the
     * type of the internal currentContext (which is incorrect).
     */
    const reduceCallback = (
        currentContext: Element | undefined | ShadowRoot,
        selector: string,
    ): Element | undefined => {
        if (!currentContext) {
            return undefined;
        }
        if ('shadowRoot' in currentContext && currentContext.shadowRoot) {
            currentContext = currentContext.shadowRoot;
        }
        return currentContext.querySelector(selector) ?? undefined;
    };

    const finalElement = selectors.reduce(reduceCallback, context);

    return finalElement;
}

function assertHasShadowRoot<T extends Element>(
    element: T,
    message?: string,
): asserts element is T & RequiredAndNotNullBy<Element, 'shadowRoot'> {
    assert.isEmpty(element.innerHTML, message);
    assertDefined(element.shadowRoot, message);
}

describe(AppElement.tagName, () => {
    async function renderApp() {
        return await fixture(
            html`
                <${AppElement}></${AppElement}>
            `,
        );
    }

    function getAppElement(context: Element) {
        if (AppElement.isStrictInstance(context)) {
            return context;
        }
        const appElement = context.querySelector(AppElement.tagName);
        typedAssertInstanceOf(appElement, AppElement);
        assertHasShadowRoot(appElement);
        return appElement;
    }

    it('should change input numbers', async () => {
        function getDisplayedInputNumber(appElement: HTMLElement): number {
            const inputNumberSpan = queryTree(appElement, [
                TestChildElement.tagName,
                'span:nth-of-type(3)',
            ]);
            typedAssertInstanceOf(inputNumberSpan, HTMLSpanElement);
            expect(inputNumberSpan.innerText).to.contain('input number');
            assert.strictEqual(inputNumberSpan.childNodes.length, 3);
            const lastNode = inputNumberSpan.childNodes[2];
            typedAssertInstanceOf(lastNode, Text);
            const inputNumber = Number(lastNode.nodeValue);
            assert.isNotNaN(inputNumber);
            return inputNumber;
        }

        async function clickAssignNewNumberButton(context: HTMLElement) {
            const assignNewNumberButton = queryTree(context, ['button']);
            typedAssertInstanceOf(assignNewNumberButton, HTMLButtonElement);
            expect(assignNewNumberButton.innerText).to.contain('assign NEW number to child');

            await clickElement(assignNewNumberButton);
        }
        const rendered = await renderApp();

        const appElement = getAppElement(rendered);

        const firstInputNumber = getDisplayedInputNumber(appElement);

        await clickAssignNewNumberButton(appElement);

        await waitUntil(() => {
            const secondInputNumber = getDisplayedInputNumber(appElement);
            return firstInputNumber !== secondInputNumber;
        }, 'the child input number did not change');
    });

    it('inputs should be spreadable', async () => {
        const rendered = await renderApp();
        const childElement = queryTree(rendered, [
            TestChildElement.tagName,
        ]);

        typedAssertInstanceOf(childElement, TestChildElement);
        assert('speak' in childElement.definition.events);
        const currentInputs = {...childElement.instanceInputs};
        assert.deepStrictEqual(currentInputs, {
            displayNumber: childElement.instanceInputs.displayNumber,
            width: childElement.instanceInputs.width,
        });
    });

    it('should render unique elements with identical strings', async () => {
        const rendered = await renderApp();

        const appElement = getAppElement(rendered);
        const childrenWithDataAttribute = Array.from(appElement.children).filter((child) =>
            child.hasAttribute('data-tag-name'),
        );

        const tagNames = new Set(childrenWithDataAttribute.map((child) => child.tagName));

        assert.strictEqual(
            tagNames.size,
            childrenWithDataAttribute.length,
            'tag names were not unique between data children',
        );
    });
});
