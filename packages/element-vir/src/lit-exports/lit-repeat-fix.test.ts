import {assert, waitUntil} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {repeat as litRepeat} from 'lit/directives/repeat.js';
import {
    defineElement,
    html,
    repeat,
    type ItemTemplate as PublicItemTemplate,
    type KeyFn as PublicKeyFn,
} from '../index.js';
// @ts-expect-error: `RepeatDirective` is no longer exported
import {type RepeatDirective} from '../index.js';
import {type HtmlInterpolation} from '../template-transforms/vir-html/html-interpolation.js';
import {type ItemTemplate, type KeyFn, type RepeatDirectiveFn} from './lit-repeat-fix.js';

const TestKeyedRepeatElement = defineElement<{items: ReadonlyArray<string>}>()({
    tagName: 'test-keyed-repeat-element',
    render({inputs}) {
        return html`
            <ul>
                ${repeat(
                    inputs.items,
                    (item) => item,
                    (item, index) => {
                        return html`
                            <li data-index=${index}>${item}</li>
                        `;
                    },
                )}
            </ul>
        `;
    },
});

const TestKeylessRepeatElement = defineElement<{items: ReadonlyArray<string>}>()({
    tagName: 'test-keyless-repeat-element',
    render({inputs}) {
        return html`
            <ul>
                ${repeat(inputs.items, (item, index) => {
                    return html`
                        <li data-index=${index}>${item}</li>
                    `;
                })}
            </ul>
        `;
    },
});

function getListItems(fixture: Element): HTMLLIElement[] {
    const shadowRoot = (fixture as HTMLElement & {shadowRoot: ShadowRoot}).shadowRoot;
    return Array.from(shadowRoot.querySelectorAll('li'));
}

function getListText(fixture: Element): string[] {
    return getListItems(fixture).map((listItem) => listItem.textContent.trim());
}

function getListIndexAttributes(fixture: Element): string[] {
    return getListItems(fixture).map((listItem) => listItem.getAttribute('data-index') || '');
}

async function setItems(
    fixture: InstanceType<typeof TestKeyedRepeatElement | typeof TestKeylessRepeatElement>,
    items: ReadonlyArray<string>,
) {
    fixture.assignInputs({
        items,
    });
    await waitUntil.deepEquals([...items], () => getListText(fixture));
}

describe('repeat', () => {
    it('is the exact directive that lit exports', () => {
        assert.strictEquals<unknown, unknown>(repeat, litRepeat);
    });

    it('renders every item in iterable order', async () => {
        const fixture = await testWeb.render(html`
            <${TestKeyedRepeatElement.assign({
                items: [
                    'a',
                    'b',
                    'c',
                ],
            })}></${TestKeyedRepeatElement}>
        `);
        assert.instanceOf(fixture, TestKeyedRepeatElement);

        assert.deepEquals(getListText(fixture), [
            'a',
            'b',
            'c',
        ]);
    });

    it('passes the current index to the item template', async () => {
        const fixture = await testWeb.render(html`
            <${TestKeyedRepeatElement.assign({
                items: [
                    'a',
                    'b',
                    'c',
                ],
            })}></${TestKeyedRepeatElement}>
        `);
        assert.instanceOf(fixture, TestKeyedRepeatElement);

        assert.deepEquals(getListIndexAttributes(fixture), [
            '0',
            '1',
            '2',
        ]);

        /** After a reorder, the index reflects the new position, not the original one. */
        await setItems(fixture, [
            'c',
            'b',
            'a',
        ]);

        assert.deepEquals(getListIndexAttributes(fixture), [
            '0',
            '1',
            '2',
        ]);
    });

    it('moves the existing DOM nodes when keyed items are reordered', async () => {
        const fixture = await testWeb.render(html`
            <${TestKeyedRepeatElement.assign({
                items: [
                    'a',
                    'b',
                    'c',
                ],
            })}></${TestKeyedRepeatElement}>
        `);
        assert.instanceOf(fixture, TestKeyedRepeatElement);

        const originalItems = getListItems(fixture);
        assert.isLengthExactly(originalItems, 3);

        await setItems(fixture, [
            'c',
            'a',
            'b',
        ]);

        assert.deepEquals(getListItems(fixture), [
            originalItems[2],
            originalItems[0],
            originalItems[1],
        ]);
    });

    it('reuses DOM for retained keys when an item is removed', async () => {
        const fixture = await testWeb.render(html`
            <${TestKeyedRepeatElement.assign({
                items: [
                    'a',
                    'b',
                    'c',
                ],
            })}></${TestKeyedRepeatElement}>
        `);
        assert.instanceOf(fixture, TestKeyedRepeatElement);

        const originalItems = getListItems(fixture);
        assert.isLengthExactly(originalItems, 3);
        const removedItem = originalItems[1];

        await setItems(fixture, [
            'a',
            'c',
        ]);

        assert.deepEquals(getListItems(fixture), [
            originalItems[0],
            originalItems[2],
        ]);
        assert.isFalse(fixture.shadowRoot.contains(removedItem));
    });

    it('creates new DOM for a key inserted in the middle', async () => {
        const fixture = await testWeb.render(html`
            <${TestKeyedRepeatElement.assign({
                items: [
                    'a',
                    'c',
                ],
            })}></${TestKeyedRepeatElement}>
        `);
        assert.instanceOf(fixture, TestKeyedRepeatElement);

        const originalItems = getListItems(fixture);
        assert.isLengthExactly(originalItems, 2);

        await setItems(fixture, [
            'a',
            'b',
            'c',
        ]);

        const updatedItems = getListItems(fixture);
        assert.isLengthExactly(updatedItems, 3);
        assert.strictEquals(updatedItems[0], originalItems[0]);
        assert.strictEquals(updatedItems[2], originalItems[1]);
        assert.notStrictEquals(updatedItems[1], originalItems[0]);
        assert.notStrictEquals(updatedItems[1], originalItems[1]);
    });

    it('never reuses DOM across different keys', async () => {
        const fixture = await testWeb.render(html`
            <${TestKeyedRepeatElement.assign({
                items: [
                    'a',
                    'b',
                ],
            })}></${TestKeyedRepeatElement}>
        `);
        assert.instanceOf(fixture, TestKeyedRepeatElement);

        const originalItems = getListItems(fixture);

        await setItems(fixture, [
            'x',
            'y',
        ]);

        getListItems(fixture).forEach((listItem) => {
            assert.isFalse(originalItems.includes(listItem));
        });
    });

    it('renders nothing for an empty iterable and recovers afterwards', async () => {
        const fixture = await testWeb.render(html`
            <${TestKeyedRepeatElement.assign({
                items: [],
            })}></${TestKeyedRepeatElement}>
        `);
        assert.instanceOf(fixture, TestKeyedRepeatElement);

        assert.deepEquals(getListText(fixture), []);

        await setItems(fixture, ['a']);
        assert.deepEquals(getListText(fixture), ['a']);

        await setItems(fixture, []);
        assert.deepEquals(getListText(fixture), []);
    });

    it('reuses DOM in place when no key function is given', async () => {
        const fixture = await testWeb.render(html`
            <${TestKeylessRepeatElement.assign({
                items: [
                    'a',
                    'b',
                    'c',
                ],
            })}></${TestKeylessRepeatElement}>
        `);
        assert.instanceOf(fixture, TestKeylessRepeatElement);

        const originalItems = getListItems(fixture);
        assert.isLengthExactly(originalItems, 3);

        await setItems(fixture, [
            'c',
            'b',
            'a',
        ]);

        /** Without keys the same DOM nodes stay in place and just get new values. */
        assert.deepEquals(getListItems(fixture), originalItems);
    });

    it('truncates DOM when the keyless list shrinks', async () => {
        const fixture = await testWeb.render(html`
            <${TestKeylessRepeatElement.assign({
                items: [
                    'a',
                    'b',
                    'c',
                ],
            })}></${TestKeylessRepeatElement}>
        `);
        assert.instanceOf(fixture, TestKeylessRepeatElement);

        await setItems(fixture, ['a']);

        assert.deepEquals(getListText(fixture), ['a']);
    });

    it('renders every entry for duplicate keys', async () => {
        const rendered = await testWeb.render(html`
            <ul>
                ${repeat(
                    [
                        'a',
                        'b',
                        'a',
                    ],
                    (item) => item,
                    (item) => {
                        return html`
                            <li>${item}</li>
                        `;
                    },
                )}
            </ul>
        `);

        assert.deepEquals(
            Array.from(rendered.querySelectorAll('li')).map((listItem) =>
                listItem.textContent.trim(),
            ),
            [
                'a',
                'b',
                'a',
            ],
        );
    });

    it('accepts any iterable, not just arrays', async () => {
        function* generateItems() {
            yield 'first';
            yield 'second';
        }

        const renderedSet = await testWeb.render(html`
            <ul>
                ${repeat(
                    new Set([
                        'a',
                        'b',
                        'a',
                    ]),
                    (item) => item,
                    (item) => {
                        return html`
                            <li>${item}</li>
                        `;
                    },
                )}
            </ul>
        `);
        assert.deepEquals(
            Array.from(renderedSet.querySelectorAll('li')).map((listItem) =>
                listItem.textContent.trim(),
            ),
            [
                'a',
                'b',
            ],
        );

        const renderedGenerator = await testWeb.render(html`
            <ul>
                ${repeat(generateItems(), (item) => {
                    return html`
                        <li>${item}</li>
                    `;
                })}
            </ul>
        `);
        assert.deepEquals(
            Array.from(renderedGenerator.querySelectorAll('li')).map((listItem) =>
                listItem.textContent.trim(),
            ),
            [
                'first',
                'second',
            ],
        );
    });

    it('is typed to return element-vir html interpolations', () => {
        const keyedResult = repeat(
            ['a'],
            (item) => item,
            (item) => {
                return html`
                    <li>${item}</li>
                `;
            },
        );
        const keylessResult = repeat(['a'], (item) => {
            return html`
                <li>${item}</li>
            `;
        });

        assert.tsType<typeof keyedResult>().equals<HtmlInterpolation[]>();
        assert.tsType<typeof keylessResult>().equals<HtmlInterpolation[]>();
        assert.tsType<typeof repeat>().equals<RepeatDirectiveFn>();
    });

    it('exposes the item template and key function types', () => {
        assert
            .tsType<ItemTemplate<string>>()
            .equals<(item: string, index: number) => HtmlInterpolation>();
        assert.tsType<KeyFn<string>>().equals<(item: string, index: number) => unknown>();
    });

    it('exposes the item template and key function types from the package index', () => {
        assert.tsType<PublicItemTemplate<string>>().equals<ItemTemplate<string>>();
        assert.tsType<PublicKeyFn<string>>().equals<KeyFn<string>>();
    });

    it('no longer exports the RepeatDirective class type', async () => {
        assert.tsType<RepeatDirective>().equals<any>();

        const indexModule: Readonly<Record<string, unknown>> = await import('../index.js');

        assert.isUndefined(indexModule['RepeatDirective']);
        assert.isDefined(indexModule['repeat']);
    });
});
