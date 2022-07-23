import {assert} from '@open-wc/testing';
import {
    FunctionalElement,
    FunctionalElementInstance,
} from '../functional-element/functional-element';

/**
 * Wrapper for assert.instanceOf that also works with TypeScript in setting the proper types.
 *
 * Do not use this in production code! It should only be used in testing code.
 */
export function assertInstanceOf<T>(
    value: unknown,
    constructor: new (...args: any) => T,
    message?: string,
): asserts value is T {
    assert.instanceOf(value, constructor, message);
}

export function getAssertedFunctionalElement<FunctionalElementGeneric extends FunctionalElement>(
    searchFor: FunctionalElementGeneric,
    searchIn: Element,
): FunctionalElementInstance<FunctionalElementGeneric> {
    if (searchIn.tagName.toLowerCase() === searchFor.tagName.toLowerCase()) {
        assertInstanceOf(searchIn, searchFor);
        return searchIn as FunctionalElementInstance<FunctionalElementGeneric>;
    }

    const result = queryTree(searchIn, [searchFor.tagName]);
    assertInstanceOf(result, searchFor);
    assert.strictEqual(result!.tagName, searchFor.tagName);

    return result as FunctionalElementInstance<FunctionalElementGeneric>;
}

export function testIdSelector(testId: string): string {
    return `[data-test-id="${testId}"]`;
}

export function getCenterOfElement(element: Element): [number, number] {
    const rect = element.getBoundingClientRect();
    return [
        Math.floor((rect.left + rect.right) / 2),
        Math.floor((rect.bottom + rect.top) / 2),
    ];
}

export function queryWithAssert<T extends Element>(
    query: string | [string, ...string[]],
    constructor: new (...args: any) => T,
    searchIn: Element,
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
    context: Element | undefined,
    // at least one string is required or this function makes no sense
    selectors: [string, ...string[]],
): Element | undefined {
    /**
     * The callback is split out here to appease the Type Gods. Without it, finalElement will be the
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
