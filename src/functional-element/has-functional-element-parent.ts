import {FunctionalElement} from './functional-element';

export function hasFunctionalElementParent(input: Element): boolean {
    const rootNode = input.getRootNode();

    if (!(rootNode instanceof ShadowRoot)) {
        // functional elements all use shadow DOM, so if a shadow root doesn't exist then we're not
        // in a functional element.
        return false;
    }

    const host = rootNode.host;

    if (host instanceof FunctionalElement) {
        return true;
    } else {
        return hasFunctionalElementParent(host);
    }
}
