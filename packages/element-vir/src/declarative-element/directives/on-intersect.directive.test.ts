import {assert, waitUntil} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {defineElement} from '../define-element.js';
import {defineElementEvent} from '../properties/element-events.js';
import {listen} from './listen.directive.js';
import {onIntersect} from './on-intersect.directive.js';

describe('onIntersect', () => {
    const TestOnIntersectElement = defineElement()({
        tagName: 'test-on-intersect-element',
        events: {
            intersectionChanged: defineElementEvent<boolean>(),
        },
        render({events, dispatch}) {
            return html`
                <div
                    style="height: 50px; width: 50px;"
                    ${onIntersect(
                        {
                            threshold: 0,
                        },
                        ({entry}) => {
                            dispatch(new events.intersectionChanged(entry.isIntersecting));
                        },
                    )}
                >
                    target
                </div>
            `;
        },
    });

    it('fires on initial layout with the intersection state', async () => {
        const observations: boolean[] = [];
        const rendered = await testWeb.render(html`
            <${TestOnIntersectElement}
                ${listen(TestOnIntersectElement.events.intersectionChanged, (event) => {
                    observations.push(event.detail);
                })}
            ></${TestOnIntersectElement}>
        `);
        assert.instanceOf(rendered, TestOnIntersectElement);

        /** Just verify the IntersectionObserver fired the callback at least once. */
        await waitUntil.isTruthy(() => observations.length > 0);
        assert.isAbove(observations.length, 0);
    });
});
