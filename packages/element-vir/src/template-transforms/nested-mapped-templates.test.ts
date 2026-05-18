import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineElement} from '../declarative-element/define-element.js';
import {html} from './vir-html/vir-html.js';

const NestedTemplateA = defineElement()({
    tagName: 'nested-template-a',
    render() {
        return html`
            a
        `;
    },
});

const NestedTemplateB = defineElement()({
    tagName: 'nested-template-b',
    render() {
        return html`
            b
        `;
    },
});

describe('nested-mapped-templates', () => {
    it('returns the same strings array across identical template literal sites', () => {
        function build(value: number) {
            return html`
                value: ${value}
            `;
        }
        assert.strictEquals(build(1).strings, build(2).strings);
    });

    it('differentiates cached strings by interpolated tag-name element', () => {
        function build(value: number) {
            return html`
                <${NestedTemplateA}></${NestedTemplateA}>
                count: ${value}
            `;
        }
        function buildOther(value: number) {
            return html`
                <${NestedTemplateB}></${NestedTemplateB}>
                count: ${value}
            `;
        }
        const aStrings = build(1).strings;
        const bStrings = buildOther(1).strings;
        assert.notStrictEquals(aStrings, bStrings);
    });
});
