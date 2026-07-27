import {assert} from '@augment-vir/assert';
import {createArray} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {defineElement} from '../declarative-element/define-element.js';
import {html} from '../template-transforms/vir-html/vir-html.js';

describe('template performance', () => {
    it('reuses one transformed strings array for every call at a template site', () => {
        function build(value: number) {
            return html`
                <span>${value}</span>
            `;
        }

        const templates = createArray(2000, build);

        assert.isLengthAtLeast(templates, 1);
        templates.forEach((template) => {
            assert.strictEquals(template.strings, templates[0].strings);
        });
    });

    it('inspects each interpolated value only a few times per cached call', () => {
        const tagNameReads: string[] = [];
        /** A tag name is the only part of an interpolated value that the transforms read. */
        const countingDefinition = {
            get tagName() {
                tagNameReads.push('read');
                return 'performance-counting-tag-name';
            },
        };
        function build() {
            return html`
                <span>${countingDefinition}</span>
            `;
        }

        build();
        const uncachedReadCount = tagNameReads.length;
        const cachedCallCount = 20;
        createArray(cachedCallCount, build);
        const readsPerCachedCall = (tagNameReads.length - uncachedReadCount) / cachedCallCount;

        /**
         * A cached call only reads enough to build the template's cache key. An extra pass over the
         * values, or a lost cache, shows up as a higher count here.
         */
        assert.isAtMost(readsPerCachedCall, 5);
        assert.isBelow(readsPerCachedCall, uncachedReadCount);
    });

    it('builds cached templates without per value overhead', () => {
        const child = {
            tagName: 'performance-budget-child',
        };
        function build(index: number) {
            return html`
                <div>
                    <${child}>${index}</${child}>
                </div>
            `;
        }

        /** Cache the transform so that only the per call work is measured. */
        build(0);
        const startTime = performance.now();
        createArray(1000, build);
        const duration = performance.now() - startTime;

        /**
         * This takes under a millisecond. The budget is twenty times that so that it only fails on
         * per value overhead of the kind that used to make this twelve times slower, rather than on
         * a busy machine.
         */
        assert.isBelow(duration, 20);
    });
});

describe('render performance', () => {
    it('renders once for a batch of state updates', async () => {
        const BatchedUpdates = defineElement()({
            tagName: 'performance-batched-updates',
            state() {
                return {
                    first: 0,
                    second: 0,
                    third: 0,
                };
            },
            render({state}) {
                return html`
                    <span>${state.first}${state.second}${state.third}</span>
                `;
            },
        });

        const instance = await testWeb.renderElement(BatchedUpdates);
        const renderCountAfterMount = instance._internalRenderCount;

        instance.instanceState.first = 1;
        instance.instanceState.second = 2;
        instance.instanceState.third = 3;
        await instance.updateComplete;

        assert.deepEquals(
            {
                afterBatch: instance._internalRenderCount,
                afterMount: renderCountAfterMount,
            },
            {
                afterBatch: 2,
                afterMount: 1,
            },
        );
    });

    it('renders each element in a nested tree exactly once on first mount', async () => {
        const renderCounts = {
            deepest: 0,
            middle: 0,
            top: 0,
        };

        const Deepest = defineElement<{value: string}>()({
            tagName: 'performance-tree-deepest',
            render({inputs}) {
                renderCounts.deepest++;
                return html`
                    <span>${inputs.value}</span>
                `;
            },
        });
        const Middle = defineElement<{value: string}>()({
            tagName: 'performance-tree-middle',
            render({inputs}) {
                renderCounts.middle++;
                return html`
                    <${Deepest.assign({
                        value: inputs.value,
                    })}></${Deepest}>
                `;
            },
        });
        const Top = defineElement()({
            tagName: 'performance-tree-top',
            render() {
                renderCounts.top++;
                return html`
                    <${Middle.assign({
                        value: 'value',
                    })}></${Middle}>
                `;
            },
        });

        await testWeb.renderElement(Top);

        assert.deepEquals(
            {
                ...renderCounts,
            },
            {
                deepest: 1,
                middle: 1,
                top: 1,
            },
        );
    });

    it('reuses list child DOM when only one item changes', async () => {
        const itemCount = 50;
        const initialItems: string[] = createArray(itemCount, (index) => {
            return `item ${index}`;
        });

        const ItemList = defineElement()({
            tagName: 'performance-item-list',
            state() {
                return {
                    items: initialItems,
                };
            },
            render({state}) {
                return html`
                    ${state.items.map((item) => {
                        return html`
                            <span class="item">${item}</span>
                        `;
                    })}
                `;
            },
        });

        const instance = await testWeb.renderElement(ItemList);
        const originalItemElements = [...instance.shadowRoot.querySelectorAll('.item')];

        assert.isLengthExactly(originalItemElements, itemCount);

        instance.instanceState.items = instance.instanceState.items.map((item, index) => {
            return index === 10 ? 'changed' : item;
        });
        await instance.updateComplete;

        const updatedItemElements = [...instance.shadowRoot.querySelectorAll('.item')];
        /** Every item element must be the exact same node: an update in place, not a rebuild. */
        const reusedItemElements = updatedItemElements.filter((itemElement, index) => {
            return itemElement === originalItemElements[index];
        });

        assert.isLengthExactly(reusedItemElements, itemCount);
        assert.strictEquals(updatedItemElements[10]?.textContent, 'changed');
    });
});
