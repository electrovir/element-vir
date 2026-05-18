import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineElement} from '../../declarative-element/define-element.js';
import {css} from './vir-css.js';

const VirCssTestChild = defineElement()({
    tagName: 'vir-css-test-child',
    render() {
        return '';
    },
});

describe(css.name, () => {
    it('returns a CSSResult with cssText', () => {
        const result = css`
            :host {
                color: red;
            }
        `;
        assert.isString(result.cssText);
        assert.strictEquals(result.cssText.includes('color: red'), true);
    });

    it('interpolates an element definition as a tag name selector', () => {
        const result = css`
            ${VirCssTestChild} {
                color: blue;
            }
        `;
        assert.strictEquals(result.cssText.includes('vir-css-test-child'), true);
    });

    it('interpolates a number value', () => {
        const result = css`
            :host {
                width: ${42}px;
            }
        `;
        assert.strictEquals(result.cssText.includes('42px'), true);
    });

    it('interpolates another CSSResult', () => {
        const inner = css`
            background-color: pink;
        `;
        const outer = css`
            :host {
                ${inner};
            }
        `;
        assert.strictEquals(outer.cssText.includes('pink'), true);
    });
});
