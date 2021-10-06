import {CSSResult, unsafeCSS} from 'lit';
import {FunctionalElementInstance} from '../functional-element';

export function cssSelector(element: FunctionalElementInstance): CSSResult {
    // This is actually safe because it's not user input.
    // If the dev using this package allows user input for tag names... all hope is lost anyway.
    return unsafeCSS(element.tagName);
}
