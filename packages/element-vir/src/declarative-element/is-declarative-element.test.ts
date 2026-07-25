import {assert} from '@augment-vir/assert';
import {describe, it, itCases, testWeb} from '@augment-vir/test';
import {html} from '../template-transforms/vir-html/vir-html.js';
import {defineElement} from './define-element.js';
import {assertIsDeclarativeElement, isDeclarativeElement} from './is-declarative-element.js';

const TestIsDeclarativeElement = defineElement()({
    tagName: 'test-is-declarative-element',
    render() {
        return html`
            hello
        `;
    },
});

describe(isDeclarativeElement.name, () => {
    it('returns true for a rendered declarative element instance', async () => {
        const fixture = await testWeb.render(html`
            <${TestIsDeclarativeElement}></${TestIsDeclarativeElement}>
        `);

        assert.isTrue(isDeclarativeElement(fixture));
    });
    it('returns false for a plain HTMLDivElement', async () => {
        const fixture = await testWeb.render(html`
            <div>just a div</div>
        `);
        assert.isFalse(isDeclarativeElement(fixture));
    });
    itCases(isDeclarativeElement, [
        {
            it: 'rejects undefined',
            input: undefined,
            expect: false,
        },
        {
            it: 'rejects a plain object',
            input: {},
            expect: false,
        },
        {
            it: 'rejects a number',
            input: 42,
            expect: false,
        },
    ]);
});

describe(assertIsDeclarativeElement.name, () => {
    it('passes for a rendered declarative element instance', async () => {
        const fixture = await testWeb.render(html`
            <${TestIsDeclarativeElement}></${TestIsDeclarativeElement}>
        `);
        assert.doesNotThrow(() => assertIsDeclarativeElement(fixture));
    });
    itCases(assertIsDeclarativeElement, [
        {
            it: 'rejects a plain object',
            input: {},
            throws: {
                matchConstructor: Error,
            },
        },
        {
            it: 'rejects undefined',
            input: undefined,
            throws: {
                matchConstructor: Error,
            },
        },
    ]);
});
