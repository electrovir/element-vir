import {assert, waitUntil} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {defineElement} from '../define-element.js';
import {defineElementEvent} from '../properties/element-events.js';
import {listen} from './listen.directive.js';
import {attachOnResize, onResize, type OnResizeCallback} from './on-resize.directive.js';

describe('onResize', () => {
    const TestOnResizeElement = defineElement<{width: number}>()({
        tagName: 'test-on-resize-element',
        events: {
            sized: defineElementEvent<Parameters<OnResizeCallback>>(),
        },
        render({inputs, events, dispatch}) {
            return html`
                <div
                    style="width: ${inputs.width}px; height: 40px;"
                    ${onResize((size, element) => {
                        dispatch(
                            new events.sized([
                                size,
                                element,
                            ]),
                        );
                    })}
                >
                    target
                </div>
            `;
        },
    });

    it('fires the callback on initial layout', async () => {
        const observations: Parameters<OnResizeCallback>[] = [];
        const rendered = await testWeb.render(html`
            <${TestOnResizeElement.assign({
                width: 200,
            })}
                ${listen(TestOnResizeElement.events.sized, (event) => {
                    observations.push(event.detail);
                })}
            ></${TestOnResizeElement}>
        `);
        assert.instanceOf(rendered, TestOnResizeElement);

        await waitUntil.isTruthy(() => observations.length > 0);
        const firstObservation = observations[0];
        assert.isDefined(firstObservation);
        const [
            firstSize,
            firstElement,
        ] = firstObservation;
        assert.strictEquals(Math.round(firstSize.contentRect.width), 200);
        assert.instanceOf(firstElement, HTMLDivElement);
    });

    it('fires again when the element resizes', async () => {
        const observations: Parameters<OnResizeCallback>[] = [];
        const rendered = await testWeb.render(html`
            <${TestOnResizeElement.assign({
                width: 200,
            })}
                ${listen(TestOnResizeElement.events.sized, (event) => {
                    observations.push(event.detail);
                })}
            ></${TestOnResizeElement}>
        `);
        assert.instanceOf(rendered, TestOnResizeElement);

        await waitUntil.isTruthy(() => observations.length > 0);
        const initialCount = observations.length;

        rendered.assignInputs({
            width: 350,
        });

        await waitUntil.isTruthy(() => {
            return observations.some(([size]) => Math.round(size.contentRect.width) === 350);
        });
        assert.isAbove(observations.length, initialCount);
    });
});

describe(attachOnResize.name, () => {
    it('observes the given element and fires the callback when it resizes', async () => {
        const target = document.createElement('div');
        target.style.cssText = 'width: 100px; height: 20px;';
        document.body.append(target);

        const observations: number[] = [];
        const handle = attachOnResize(target, (size) => {
            observations.push(Math.round(size.contentRect.width));
        });

        try {
            await waitUntil.isTruthy(() => observations.length > 0);
            assert.strictEquals(observations.at(-1), 100);

            target.style.width = '250px';
            await waitUntil.isTruthy(() => observations.includes(250));
        } finally {
            handle.resizeObserver.disconnect();
            target.remove();
        }
    });
});
