import {sendMouse} from '@web/test-runner-commands';
import {assertInstanceOf} from 'run-time-assertions';

export function getCenterOfElement(element: Element): [number, number] {
    const rect = element.getBoundingClientRect();
    return [
        Math.floor((rect.left + rect.right) / 2),
        Math.floor((rect.bottom + rect.top) / 2),
    ];
}

export async function clickElement(element: Element) {
    await sendMouse({
        position: getCenterOfElement(element),
        type: 'click',
    });
}

export function queryWithAssert<T extends Element>(
    query: string | [string, ...string[]],
    constructor: new (...args: any) => T,
    searchIn: Element | Document,
): T {
    if (!Array.isArray(query)) {
        query = [query];
    }
    const result = queryTree(searchIn, query);
    assertInstanceOf(result, constructor);

    return result;
}

/** Accounts for shadow DOM */
function queryTree(
    context: Element | Document | undefined,
    // at least one string is required or this function makes no sense
    selectors: [string, ...string[]],
): Element | Document | undefined {
    const finalElement = selectors.reduce(
        (
            currentContext: Element | Document | undefined | ShadowRoot,
            selector: string,
        ): Element | undefined => {
            if (!currentContext) {
                return undefined;
            }
            if ('shadowRoot' in currentContext && currentContext.shadowRoot) {
                currentContext = currentContext.shadowRoot;
            }
            console.log(currentContext, selector);
            return currentContext.querySelector(selector) ?? undefined;
        },
        context,
    );

    return finalElement;
}
