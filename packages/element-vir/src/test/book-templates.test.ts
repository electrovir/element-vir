import {assert, assertWrap} from '@augment-vir/assert';
import {collapseWhiteSpace} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {queryThroughShadow} from '@augment-vir/web';
import {defineElement} from '../declarative-element/define-element.js';
import {createAttributeDirective} from '../declarative-element/directives/create-attribute-directive.js';
import {testId, testIdSelector} from '../declarative-element/directives/test-id.directive.js';
import {wrapDefineElement} from '../declarative-element/wrap-define-element.js';
import {unsafeCSS, unsafeHTML} from '../lit-exports/all-lit-exports.js';
import {css} from '../template-transforms/vir-css/vir-css.js';
import {html} from '../template-transforms/vir-html/vir-html.js';

/**
 * These mirror the `element-book` example pages in `packages/element-vir-example/src/e2e-tests`, so
 * that the behavior those pages demonstrate is covered by this package's own test suite.
 */

function findTestId(root: Readonly<Element>, testIdValue: string) {
    return assertWrap.isDefined(
        queryThroughShadow(root, testIdSelector(testIdValue)),
        `no element found for test id '${testIdValue}'`,
    );
}

function readTestIdText(root: Readonly<Element>, testIdValue: string) {
    return collapseWhiteSpace(findTestId(root, testIdValue).textContent || '');
}

describe('load test book', () => {
    const LoadTestElement = defineElement()({
        tagName: 'load-test-element',
        testIds: ['content'],
        render({testIds}) {
            return html`
                <div ${testId(testIds.content)}>The book app loaded successfully.</div>
            `;
        },
    });

    it('renders a plain element with no inputs or state', async () => {
        const fixture = await testWeb.render(html`
            <${LoadTestElement}></${LoadTestElement}>
        `);
        assert.instanceOf(fixture, LoadTestElement);

        assert.strictEquals(
            readTestIdText(fixture, LoadTestElement.testIds.content),
            'The book app loaded successfully.',
        );
    });
});

describe('tag name interpolation book', () => {
    const TagNameInterpolationChild = defineElement<{message: string}>()({
        tagName: 'tag-name-interpolation-child',
        testIds: ['content'],
        render({inputs, testIds}) {
            return html`
                <span ${testId(testIds.content)}>${inputs.message}</span>
            `;
        },
    });

    it('renders the child element and emits its real tag name', async () => {
        const fixture = await testWeb.render(html`
            <${TagNameInterpolationChild.assign({
                message: 'hello',
            })}></${TagNameInterpolationChild}>
        `);

        assert.instanceOf(fixture, TagNameInterpolationChild);
        assert.strictEquals(
            fixture.tagName.toLowerCase(),
            TagNameInterpolationChild.tagName,
            'the interpolated tag name must appear in the DOM',
        );
        assert.strictEquals(
            readTestIdText(fixture, TagNameInterpolationChild.testIds.content),
            'hello',
        );
    });
});

describe('css element interpolation book', () => {
    const CssElementInterpolationChild = defineElement()({
        tagName: 'css-element-interpolation-child',
        render() {
            return html`
                <span>child text</span>
            `;
        },
    });
    const CssElementInterpolationParent = defineElement()({
        tagName: 'css-element-interpolation-parent',
        styles: css`
            ${CssElementInterpolationChild} {
                background-color: rgb(33, 66, 99);
                display: block;
            }
        `,
        render() {
            return html`
                <${CssElementInterpolationChild}></${CssElementInterpolationChild}>
            `;
        },
    });

    it('selects the child by its tag name', async () => {
        const parent = await testWeb.render(html`
            <${CssElementInterpolationParent}></${CssElementInterpolationParent}>
        `);
        assert.instanceOf(parent, CssElementInterpolationParent);
        const child = assertWrap.instanceOf(
            queryThroughShadow(parent, CssElementInterpolationChild),
            CssElementInterpolationChild,
        );

        assert.strictEquals(window.getComputedStyle(child).backgroundColor, 'rgb(33, 66, 99)');
    });
});

describe('css vars book', () => {
    const CssVarsElement = defineElement()({
        tagName: 'css-vars-element',
        cssVars: {
            'css-vars-element-color': 'rgb(123, 45, 67)',
        },
        styles: ({cssVars}) => css`
            .target {
                color: ${cssVars['css-vars-element-color'].value};
            }
        `,
        testIds: ['target'],
        render({testIds}) {
            return html`
                <span ${testId(testIds.target)} class="target">var</span>
            `;
        },
    });

    it('resolves the css var default value in element styles', async () => {
        const fixture = await testWeb.render(html`
            <${CssVarsElement}></${CssVarsElement}>
        `);
        assert.instanceOf(fixture, CssVarsElement);
        const target = findTestId(fixture, CssVarsElement.testIds.target);

        assert.strictEquals(window.getComputedStyle(target).color, 'rgb(123, 45, 67)');
    });
});

describe('css var override book', () => {
    const CssVarOverrideChild = defineElement()({
        tagName: 'css-var-override-child',
        cssVars: {
            'css-var-override-child-color': 'rgb(1, 1, 1)',
        },
        styles: ({cssVars}) => css`
            .target {
                color: ${cssVars['css-var-override-child-color'].value};
            }
        `,
        testIds: ['target'],
        render({testIds}) {
            return html`
                <span ${testId(testIds.target)} class="target">var</span>
            `;
        },
    });
    const CssVarOverrideParent = defineElement()({
        tagName: 'css-var-override-parent',
        styles: css`
            ${CssVarOverrideChild} {
                --css-var-override-child-color: rgb(50, 100, 150);
            }
        `,
        render() {
            return html`
                <${CssVarOverrideChild}></${CssVarOverrideChild}>
            `;
        },
    });

    it('lets a parent override a child css var', async () => {
        const parent = await testWeb.render(html`
            <${CssVarOverrideParent}></${CssVarOverrideParent}>
        `);
        assert.instanceOf(parent, CssVarOverrideParent);
        const target = findTestId(parent, CssVarOverrideChild.testIds.target);

        assert.strictEquals(window.getComputedStyle(target).color, 'rgb(50, 100, 150)');
    });
});

describe('shadow dom isolation book', () => {
    const ShadowDomIsolationElement = defineElement()({
        tagName: 'shadow-dom-isolation-element',
        styles: css`
            .target {
                color: rgb(11, 22, 33);
            }
        `,
        testIds: ['target'],
        render({testIds}) {
            return html`
                <span ${testId(testIds.target)} class="target">isolated</span>
            `;
        },
    });
    const ShadowDomIsolationParent = defineElement()({
        tagName: 'shadow-dom-isolation-parent',
        styles: css`
            .target {
                color: rgb(200, 0, 0);
            }
        `,
        render() {
            return html`
                <${ShadowDomIsolationElement}></${ShadowDomIsolationElement}>
            `;
        },
    });

    it('does not let parent styles bleed into a child shadow root', async () => {
        const parent = await testWeb.render(html`
            <${ShadowDomIsolationParent}></${ShadowDomIsolationParent}>
        `);
        assert.instanceOf(parent, ShadowDomIsolationParent);
        const target = findTestId(parent, ShadowDomIsolationElement.testIds.target);

        assert.strictEquals(window.getComputedStyle(target).color, 'rgb(11, 22, 33)');
    });
});

describe('unsafe content book', () => {
    const dynamicSelector = '.unsafe-styled-target';

    const UnsafeContentElement = defineElement()({
        tagName: 'unsafe-content-element',
        styles: css`
            ${unsafeCSS(dynamicSelector)} {
                color: rgb(7, 14, 21);
            }
        `,
        testIds: [
            'html',
            'styled',
            'unsafe-bold',
        ],
        render({testIds}) {
            return html`
                <span ${testId(testIds.html)}>
                    ${unsafeHTML(
                        `<strong data-test-id="${testIds['unsafe-bold']}">unsafe content</strong>`,
                    )}
                </span>
                <span ${testId(testIds.styled)} class="unsafe-styled-target">styled</span>
            `;
        },
    });

    it('parses raw HTML into the template', async () => {
        const fixture = await testWeb.render(html`
            <${UnsafeContentElement}></${UnsafeContentElement}>
        `);
        assert.instanceOf(fixture, UnsafeContentElement);
        const bold = findTestId(fixture, UnsafeContentElement.testIds['unsafe-bold']);

        assert.instanceOf(bold, HTMLElement);
        assert.strictEquals(collapseWhiteSpace(bold.textContent || ''), 'unsafe content');
    });

    it('interpolates a literal selector into styles', async () => {
        const fixture = await testWeb.render(html`
            <${UnsafeContentElement}></${UnsafeContentElement}>
        `);
        assert.instanceOf(fixture, UnsafeContentElement);
        const styled = findTestId(fixture, UnsafeContentElement.testIds.styled);

        assert.strictEquals(window.getComputedStyle(styled).color, 'rgb(7, 14, 21)');
    });
});

describe('undefined interpolation book', () => {
    const UndefinedInterpolationElement = defineElement()({
        tagName: 'undefined-interpolation-element',
        testIds: [
            'undefined',
            'null',
            'empty',
            'zero',
            'false',
        ],
        render({testIds}) {
            return html`
                <span ${testId(testIds.undefined)}>[${undefined}]</span>
                <span ${testId(testIds.null)}>[${null}]</span>
                <span ${testId(testIds.empty)}>[${''}]</span>
                <span ${testId(testIds.zero)}>[${0}]</span>
                <span ${testId(testIds.false)}>[${false}]</span>
            `;
        },
    });

    it('renders nullish and empty values as nothing but keeps falsy primitives', async () => {
        const fixture = await testWeb.render(html`
            <${UndefinedInterpolationElement}></${UndefinedInterpolationElement}>
        `);
        assert.instanceOf(fixture, UndefinedInterpolationElement);

        assert.deepEquals(
            {
                empty: readTestIdText(fixture, UndefinedInterpolationElement.testIds.empty),
                false: readTestIdText(fixture, UndefinedInterpolationElement.testIds.false),
                null: readTestIdText(fixture, UndefinedInterpolationElement.testIds.null),
                undefined: readTestIdText(fixture, UndefinedInterpolationElement.testIds.undefined),
                zero: readTestIdText(fixture, UndefinedInterpolationElement.testIds.zero),
            },
            {
                empty: '[]',
                false: '[false]',
                null: '[]',
                undefined: '[]',
                zero: '[0]',
            },
        );
    });
});

describe('nested templates book', () => {
    const NestedTemplatesElement = defineElement()({
        tagName: 'nested-templates-element',
        testIds: [
            'inner',
            'fn-result',
            'item-0',
            'item-1',
            'item-2',
        ],
        render({testIds}) {
            const items = [
                'a',
                'b',
                'c',
            ];

            return html`
                <div>
                    ${html`
                        <span ${testId(testIds.inner)}>inner content</span>
                    `}
                </div>
                <ul>
                    ${items.map((label, index) => {
                        return html`
                            <li ${testId(`nested-templates-item-${index}`)}>${label}</li>
                        `;
                    })}
                </ul>
                <span ${testId(testIds['fn-result'])}>${items.join(',')}</span>
            `;
        },
    });

    it('renders a nested template in child position', async () => {
        const fixture = await testWeb.render(html`
            <${NestedTemplatesElement}></${NestedTemplatesElement}>
        `);
        assert.instanceOf(fixture, NestedTemplatesElement);

        assert.strictEquals(
            readTestIdText(fixture, NestedTemplatesElement.testIds.inner),
            'inner content',
        );
    });

    it('renders every item of an array of templates', async () => {
        const fixture = await testWeb.render(html`
            <${NestedTemplatesElement}></${NestedTemplatesElement}>
        `);
        assert.instanceOf(fixture, NestedTemplatesElement);

        assert.deepEquals(
            [
                0,
                1,
                2,
            ].map((index) => readTestIdText(fixture, `nested-templates-item-${index}`)),
            [
                'a',
                'b',
                'c',
            ],
        );
        assert.strictEquals(
            readTestIdText(fixture, NestedTemplatesElement.testIds['fn-result']),
            'a,b,c',
        );
    });
});

describe('template caching book', () => {
    const TemplateCachingElement = defineElement()({
        tagName: 'template-caching-element',
        state() {
            return {
                count: 0,
            };
        },
        testIds: [
            'a',
            'b',
        ],
        render({state, testIds}) {
            function buildRow(label: 'a' | 'b', value: number) {
                return html`
                    <span ${testId(testIds[label])}>${label}=${value}</span>
                `;
            }

            return html`
                ${buildRow('a', state.count)} ${buildRow('b', state.count * 2)}
            `;
        },
    });

    it('updates both rows built from one template site across renders', async () => {
        const fixture = await testWeb.render(html`
            <${TemplateCachingElement}></${TemplateCachingElement}>
        `);
        assert.instanceOf(fixture, TemplateCachingElement);
        const rowA = findTestId(fixture, TemplateCachingElement.testIds.a);
        const rowB = findTestId(fixture, TemplateCachingElement.testIds.b);

        assert.deepEquals(
            [
                collapseWhiteSpace(rowA.textContent || ''),
                collapseWhiteSpace(rowB.textContent || ''),
            ],
            [
                'a=0',
                'b=0',
            ],
        );

        fixture.instanceState.count = 1;
        await fixture.updateComplete;

        assert.deepEquals(
            [
                collapseWhiteSpace(rowA.textContent || ''),
                collapseWhiteSpace(rowB.textContent || ''),
            ],
            [
                'a=1',
                'b=2',
            ],
        );

        fixture.instanceState.count = 2;
        await fixture.updateComplete;

        /** The same DOM nodes are still in place: the template strings were reused. */
        assert.deepEquals(
            [
                collapseWhiteSpace(rowA.textContent || ''),
                collapseWhiteSpace(rowB.textContent || ''),
            ],
            [
                'a=2',
                'b=4',
            ],
        );
        assert.strictEquals(rowA, findTestId(fixture, TemplateCachingElement.testIds.a));
    });
});

describe('multiple slots book', () => {
    const MultipleSlotsElement = defineElement()({
        tagName: 'multiple-slots-element',
        render() {
            return html`
                <div class="main">
                    <slot name="main-slot"></slot>
                </div>
                <div class="secondary">
                    <slot name="secondary-slot"></slot>
                </div>
            `;
        },
    });

    async function renderMultipleSlots() {
        const fixture = await testWeb.render(html`
            <${MultipleSlotsElement}>
                <p slot="main-slot" data-test-id="multiple-slots-main">main content</p>
                <p slot="secondary-slot" data-test-id="multiple-slots-secondary-1">one</p>
                <p slot="secondary-slot" data-test-id="multiple-slots-secondary-2">two</p>
                <p slot="secondary-slot" data-test-id="multiple-slots-secondary-3">three</p>
            </${MultipleSlotsElement}>
        `);
        assert.instanceOf(fixture, MultipleSlotsElement);
        return fixture;
    }

    it('renders distinct content in each slot', async () => {
        const fixture = await renderMultipleSlots();

        assert.deepEquals(
            [
                'multiple-slots-main',
                'multiple-slots-secondary-1',
                'multiple-slots-secondary-2',
                'multiple-slots-secondary-3',
            ].map((testIdValue) => {
                /** Slotted content stays in the host's light DOM, not its shadow root. */
                const slotted = assertWrap.isDefined(
                    fixture.querySelector(testIdSelector(testIdValue)),
                );
                return collapseWhiteSpace(slotted.textContent || '');
            }),
            [
                'main content',
                'one',
                'two',
                'three',
            ],
        );
    });

    it('assigns every secondary child to the secondary slot', async () => {
        const fixture = await renderMultipleSlots();
        const slots = queryThroughShadow(fixture, 'slot', {
            all: true,
        });

        assert.deepEquals(
            slots.map((slot) => {
                return assertWrap
                    .instanceOf(slot, HTMLSlotElement)
                    .assignedElements()
                    .map((assigned) => {
                        return collapseWhiteSpace(assigned.textContent || '');
                    });
            }),
            [
                ['main content'],
                [
                    'one',
                    'two',
                    'three',
                ],
            ],
        );
    });
});

describe('slot names book', () => {
    const SlotNamesElement = defineElement()({
        tagName: 'slot-names-element',
        slotNames: [
            'slot-names-element-primary',
            'slot-names-element-secondary',
        ],
        render({slotNames}) {
            return html`
                <header data-region="primary">
                    <slot name=${slotNames['slot-names-element-primary']}></slot>
                </header>
                <footer data-region="secondary">
                    <slot name=${slotNames['slot-names-element-secondary']}></slot>
                </footer>
            `;
        },
    });

    it('maps tag prefixed slot names to themselves', () => {
        assert.deepEquals(
            {
                ...SlotNamesElement.slotNames,
            },
            {
                'slot-names-element-primary': 'slot-names-element-primary',
                'slot-names-element-secondary': 'slot-names-element-secondary',
            },
        );
    });

    it('lands slotted content in the matching slot region', async () => {
        const fixture = await testWeb.render(html`
            <${SlotNamesElement}>
                <span slot=${SlotNamesElement.slotNames['slot-names-element-primary']}>
                    primary content
                </span>
                <span slot=${SlotNamesElement.slotNames['slot-names-element-secondary']}>
                    secondary content
                </span>
            </${SlotNamesElement}>
        `);
        assert.instanceOf(fixture, SlotNamesElement);

        assert.deepEquals(
            [
                'primary',
                'secondary',
            ].map((region) => {
                const slot = assertWrap.instanceOf(
                    queryThroughShadow(fixture, `[data-region="${region}"] slot`),
                    HTMLSlotElement,
                );
                return slot.assignedElements().map((assigned) => {
                    return collapseWhiteSpace(assigned.textContent || '');
                });
            }),
            [
                ['primary content'],
                ['secondary content'],
            ],
        );
    });
});

describe('test id book', () => {
    const interpolatedSuffix = 'suffix';

    const TestIdElement = defineElement()({
        tagName: 'test-id-element',
        testIds: [
            'direct',
            'interpolated',
        ],
        render({testIds}) {
            return html`
                <div ${testId(testIds.direct)}>direct</div>
                <div ${testId(`${testIds.interpolated}-${interpolatedSuffix}`)}>interpolated</div>
            `;
        },
    });

    it('applies the data-test-id attribute', async () => {
        const fixture = await testWeb.render(html`
            <${TestIdElement}></${TestIdElement}>
        `);
        assert.instanceOf(fixture, TestIdElement);
        const direct = findTestId(fixture, TestIdElement.testIds.direct);

        assert.strictEquals(collapseWhiteSpace(direct.textContent || ''), 'direct');
        assert.strictEquals(
            direct.getAttribute('data-test-id'),
            TestIdElement.testIds.direct,
            'the raw attribute must match the test id selector',
        );
    });

    it('supports interpolated test id strings', async () => {
        const fixture = await testWeb.render(html`
            <${TestIdElement}></${TestIdElement}>
        `);
        assert.instanceOf(fixture, TestIdElement);

        assert.strictEquals(
            readTestIdText(fixture, `${TestIdElement.testIds.interpolated}-${interpolatedSuffix}`),
            'interpolated',
        );
    });
});

describe('create attribute directive book', () => {
    const {
        attributeDirective: dataKind,
        attributeName,
        attributeSelector,
    } = createAttributeDirective('data-custom-kind');

    const CreateAttributeDirectiveElement = defineElement()({
        tagName: 'create-attribute-directive-element',
        testIds: ['target'],
        render({testIds}) {
            return html`
                <span ${testId(testIds.target)} ${dataKind('demo')}>via directive</span>
            `;
        },
    });

    it('sets the configured attribute name and value', async () => {
        const fixture = await testWeb.render(html`
            <${CreateAttributeDirectiveElement}></${CreateAttributeDirectiveElement}>
        `);
        assert.instanceOf(fixture, CreateAttributeDirectiveElement);
        const target = findTestId(fixture, CreateAttributeDirectiveElement.testIds.target);

        assert.strictEquals(target.getAttribute(attributeName), 'demo');
        assert.strictEquals(target.getAttribute('data-custom-kind'), 'demo');
    });

    it('builds a matching css selector', () => {
        assert.strictEquals(attributeSelector('demo'), '[data-custom-kind="demo"]');
    });
});

describe('wrap define element book', () => {
    const transformedTagsSink: string[] = [];

    const defineWrappedElement = wrapDefineElement({
        transformInputs(inputs) {
            transformedTagsSink.push(inputs.tagName);
            return inputs;
        },
    });

    const WrappedElement = defineWrappedElement()({
        tagName: 'wrapped-element',
        testIds: ['target'],
        render({testIds}) {
            return html`
                <span ${testId(testIds.target)}>wrapped</span>
            `;
        },
    });

    it('runs transformInputs at definition time', () => {
        assert.deepEquals(transformedTagsSink, ['wrapped-element']);
    });

    it('renders the wrapped element normally', async () => {
        const fixture = await testWeb.render(html`
            <${WrappedElement}></${WrappedElement}>
        `);
        assert.instanceOf(fixture, WrappedElement);

        assert.strictEquals(readTestIdText(fixture, WrappedElement.testIds.target), 'wrapped');
    });
});
