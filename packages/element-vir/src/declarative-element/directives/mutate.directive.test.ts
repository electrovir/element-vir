import {assert, assertWrap} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {waitForAnimationFrame} from '@augment-vir/web';
import {defineElement, Directive, html, mutate} from '../../index.js';
import {createMutateDirective, type MutateDirectiveParams} from './mutate.directive.js';

describe('mutate directive', () => {
    it('allows arbitrary element mutation', async () => {
        const fixture = await testWeb.render(html`
            <div
                ${mutate(({element}) => {
                    element.innerText = 'hello there';
                })}
            ></div>
        `);

        assert.instanceOf(fixture, HTMLDivElement);
        assert.strictEquals(fixture.textContent, 'hello there');
    });

    it('has the expected params type', () => {
        assert.tsType<MutateDirectiveParams>().equals<{
            directive: Directive;
            element: HTMLElement;
            params: [];
        }>();
        assert.tsType<MutateDirectiveParams<[string]>>().equals<{
            directive: Directive;
            element: HTMLElement;
            params: [string];
        }>();
    });

    it('passes exactly the directive and element to the callback', async () => {
        const allParams: Omit<MutateDirectiveParams, 'params'>[] = [];

        const fixture = await testWeb.render(html`
            <div
                ${mutate((params) => {
                    allParams.push(params);
                })}
            ></div>
        `);

        assert.instanceOf(fixture, HTMLDivElement);
        assert.isLengthExactly(allParams, 1);
        assert.deepEquals(Object.keys(allParams[0]), [
            'directive',
            'element',
        ]);
        assert.instanceOf(allParams[0].directive, Directive);
        assert.strictEquals(allParams[0].element, fixture);
    });

    it('runs on every render with a stable directive instance', async () => {
        const allParams: Omit<MutateDirectiveParams, 'params'>[] = [];

        const MutateElement = defineElement<{label: string}>()({
            tagName: 'test-mutate-element',
            render({inputs}) {
                return html`
                    <div
                        ${mutate((params) => {
                            allParams.push(params);
                            params.element.setAttribute('data-label', inputs.label);
                        })}
                    >
                        ${inputs.label}
                    </div>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${MutateElement.assign({
                label: 'first',
            })}></${MutateElement}>
        `);
        assert.instanceOf(fixture, MutateElement);
        assert.isLengthExactly([...allParams], 1);
        const firstParams = assertWrap.isDefined(allParams[0]);

        fixture.assignInputs({
            label: 'second',
        });
        await waitForAnimationFrame(2);

        assert.isLengthExactly([...allParams], 2);
        const secondParams = assertWrap.isDefined(allParams[1]);
        assert.strictEquals(secondParams.directive, firstParams.directive);
        assert.strictEquals(secondParams.element, firstParams.element);
        assert.strictEquals(secondParams.element.getAttribute('data-label'), 'second');
    });

    it('throws when attached in a child position', async () => {
        await assert.throws(
            async () => {
                await testWeb.render(html`
                    <div>${mutate(() => {})}</div>
                `);
            },
            {
                matchMessage: 'mutate directive can only be attached directly to an element',
            },
        );
    });

    it('throws when attached to a non-HTML element', async () => {
        await assert.throws(
            async () => {
                await testWeb.render(html`
                    <svg>
                        <rect ${mutate(() => {})}></rect>
                    </svg>
                `);
            },
            {
                matchMessage: "is not an instance of 'HTMLElement'",
            },
        );
    });

    it('throws when attached in an attribute value position', async () => {
        await assert.throws(
            async () => {
                await testWeb.render(html`
                    <div class="${mutate(() => {})}"></div>
                `);
            },
            {
                matchMessage: 'mutate directive can only be attached directly to an element',
            },
        );
    });

    it('names the host element in its error message', async () => {
        const HostElement = defineElement()({
            tagName: 'test-mutate-host-element',
            render() {
                return html`
                    <div>${mutate(() => {})}</div>
                `;
            },
        });

        await assert.throws(
            async () => {
                const rendered = await testWeb.render(html`
                    <${HostElement}></${HostElement}>
                `);
                await assertWrap.instanceOf(rendered, HostElement).updateComplete;
            },
            {
                matchMessage:
                    'mutate directive can only be attached directly to an element: in test-mutate-host-element.',
            },
        );
    });
});

describe(createMutateDirective.name, () => {
    it('forwards all render params to the callback', async () => {
        const allParams: MutateDirectiveParams<
            [
                string,
                number,
            ]
        >[] = [];
        const paramsDirective = createMutateDirective<
            [
                string,
                number,
            ]
        >('testParamsDirective', (params) => {
            allParams.push(params);
        });

        const fixture = await testWeb.render(html`
            <div ${paramsDirective('hello', 42)}></div>
        `);

        assert.instanceOf(fixture, HTMLDivElement);
        assert.isLengthExactly(allParams, 1);
        assert.deepEquals(allParams[0].params, [
            'hello',
            42,
        ]);
        assert.strictEquals(allParams[0].element, fixture);
        assert.instanceOf(allParams[0].directive, Directive);
    });

    it('reuses the same directive instance across renders', async () => {
        const allParams: MutateDirectiveParams<[string]>[] = [];
        const labelDirective = createMutateDirective<[string]>('testLabelDirective', (params) => {
            allParams.push(params);
        });

        const LabelElement = defineElement<{label: string}>()({
            tagName: 'test-created-mutate-element',
            render({inputs}) {
                return html`
                    <div ${labelDirective(inputs.label)}>${inputs.label}</div>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${LabelElement.assign({
                label: 'first',
            })}></${LabelElement}>
        `);
        assert.instanceOf(fixture, LabelElement);
        assert.isLengthExactly([...allParams], 1);
        const firstParams = assertWrap.isDefined(allParams[0]);

        fixture.assignInputs({
            label: 'second',
        });
        await waitForAnimationFrame(2);

        assert.isLengthExactly([...allParams], 2);
        const secondParams = assertWrap.isDefined(allParams[1]);
        assert.strictEquals(secondParams.directive, firstParams.directive);
        assert.strictEquals(secondParams.element, firstParams.element);
        assert.deepEquals(secondParams.params, ['second']);
    });

    it('throws when attached to a non-HTML element', async () => {
        const svgDirective = createMutateDirective<[]>('testSvgDirective', () => {});

        await assert.throws(
            async () => {
                await testWeb.render(html`
                    <svg>
                        <rect ${svgDirective()}></rect>
                    </svg>
                `);
            },
            {
                matchMessage: "is not an instance of 'HTMLElement'",
            },
        );
    });

    it('uses the given directive name in its child position error', async () => {
        const namedDirective = createMutateDirective<[]>('testNamedDirective', () => {});

        await assert.throws(
            async () => {
                await testWeb.render(html`
                    <div>${namedDirective()}</div>
                `);
            },
            {
                matchMessage:
                    'testNamedDirective directive can only be attached directly to an element',
            },
        );
    });
});
