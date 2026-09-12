import {assert, assertWrap} from '@augment-vir/assert';
import {describe, it, itCases, testWeb} from '@augment-vir/test';
import {html} from '../template-transforms/vir-html/vir-html.js';
import {type DeclarativeElement} from './declarative-element.js';
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

const markerPropertiesOnly = {
    definition: {},
    instanceInputs: {},
    instanceState: {},
};

class NotDeclarativeCustomElement extends HTMLElement {}
window.customElements.define('not-declarative-custom-element', NotDeclarativeCustomElement);

class SubclassedDeclarativeElement extends TestIsDeclarativeElement {}
window.customElements.define('subclassed-declarative-element', SubclassedDeclarativeElement);

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
    it('returns false for a custom element that is not declarative', async () => {
        const fixture = await testWeb.render(html`
            <not-declarative-custom-element></not-declarative-custom-element>
        `);
        assert.instanceOf(fixture, NotDeclarativeCustomElement);
        assert.isFalse(isDeclarativeElement(fixture));
    });
    it('returns true for a subclass of a declarative element', async () => {
        const fixture = await testWeb.render(html`
            <subclassed-declarative-element></subclassed-declarative-element>
        `);
        assert.instanceOf(fixture, SubclassedDeclarativeElement);
        assert.isTrue(isDeclarativeElement(fixture));
    });
    it('returns true for a detached, never-connected declarative element', () => {
        assert.isTrue(
            isDeclarativeElement(document.createElement(TestIsDeclarativeElement.tagName)),
        );
    });
    it('narrows the input type', () => {
        const input: unknown = markerPropertiesOnly;

        if (isDeclarativeElement(input)) {
            assert.tsType(input).equals<DeclarativeElement>();
        } else {
            assert.tsType(input).equals<unknown>();
        }
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
        {
            it: 'rejects null',
            input: null,
            expect: false,
        },
        {
            it: 'rejects a string',
            input: 'instanceState',
            expect: false,
        },
        {
            it: 'rejects a function',
            input() {
                return undefined;
            },
            expect: false,
        },
        {
            it: 'accepts any object with all marker properties',
            input: markerPropertiesOnly,
            expect: true,
        },
        {
            it: 'accepts marker properties with undefined values',
            input: {
                definition: undefined,
                instanceInputs: undefined,
                instanceState: undefined,
            },
            expect: true,
        },
        {
            it: 'rejects an object missing only the definition marker property',
            input: {
                instanceInputs: {},
                instanceState: {},
            },
            expect: false,
        },
        {
            it: 'rejects an object missing only the instanceState marker property',
            input: {
                definition: {},
                instanceInputs: {},
            },
            expect: false,
        },
        {
            it: 'rejects an object missing only the instanceInputs marker property',
            input: {
                definition: {},
                instanceState: {},
            },
            expect: false,
        },
        {
            it: 'accepts marker properties inherited from a prototype',
            input: Object.create(markerPropertiesOnly) as object,
            expect: true,
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
    it('narrows the input type', () => {
        const input: unknown = markerPropertiesOnly;

        assertIsDeclarativeElement(input);
        assert.tsType(input).equals<DeclarativeElement>();
    });
    it("reports a rejected element's uppercase tag name", async () => {
        const fixture = await testWeb.render(html`
            <div>just a div</div>
        `);
        assert.strictEquals(
            assertWrap.throws(() => assertIsDeclarativeElement(fixture)).message,
            'DIV is not a declarative element.',
        );
    });
    it('reports a tagName property from a non-element input', () => {
        assert.strictEquals(
            assertWrap.throws(() => {
                return assertIsDeclarativeElement({
                    tagName: 'fake-tag-name',
                });
            }).message,
            'fake-tag-name is not a declarative element.',
        );
    });
    it('stringifies inputs that have no tagName property', () => {
        assert.strictEquals(
            assertWrap.throws(() => assertIsDeclarativeElement({})).message,
            '[object Object] is not a declarative element.',
        );
        assert.strictEquals(
            assertWrap.throws(() => assertIsDeclarativeElement(undefined)).message,
            'undefined is not a declarative element.',
        );
        assert.strictEquals(
            assertWrap.throws(() => assertIsDeclarativeElement(42)).message,
            '42 is not a declarative element.',
        );
    });
    it('does not throw for a subclassed declarative element', async () => {
        const fixture = await testWeb.render(html`
            <subclassed-declarative-element></subclassed-declarative-element>
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
        {
            it: 'rejects null',
            input: null,
            throws: {
                matchConstructor: Error,
            },
        },
        {
            it: 'passes for any object with all marker properties',
            input: markerPropertiesOnly,
            throws: undefined,
        },
    ]);
});
