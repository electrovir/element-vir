import {assert, waitUntil} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {defineElement} from '../define-element.js';
import {defineElementEvent} from '../properties/element-events.js';
import {listenToActivate, listenToEnter} from './listen-to-activate.js';
import {listen} from './listen.directive.js';

const ActivateTarget = defineElement()({
    tagName: 'listen-to-activate-target',
    events: {
        activated: defineElementEvent<void>(),
    },
    render({events, dispatch}) {
        return html`
            <button
                tabindex="0"
                ${listenToActivate(() => {
                    dispatch(new events.activated());
                })}
            >
                target
            </button>
        `;
    },
});

const EnterTarget = defineElement()({
    tagName: 'listen-to-enter-target',
    events: {
        enterFired: defineElementEvent<void>(),
    },
    render({events, dispatch}) {
        return html`
            <button
                tabindex="0"
                ${listenToEnter(() => {
                    dispatch(new events.enterFired());
                })}
            >
                target
            </button>
        `;
    },
});

function pressKey(target: Element, code: string) {
    target.dispatchEvent(
        new KeyboardEvent('keydown', {
            code,
            bubbles: true,
            cancelable: true,
            composed: true,
        }),
    );
}

describe(listenToActivate.name, () => {
    it('fires the callback on Enter', async () => {
        let count = 0;
        const rendered = await testWeb.render(html`
            <${ActivateTarget}
                ${listen(ActivateTarget.events.activated, () => {
                    count += 1;
                })}
            ></${ActivateTarget}>
        `);
        const button = rendered.shadowRoot?.querySelector('button');
        assert.instanceOf(button, HTMLButtonElement);

        pressKey(button, 'Enter');
        await waitUntil.isTruthy(() => count === 1);
    });

    it('fires the callback on Space', async () => {
        let count = 0;
        const rendered = await testWeb.render(html`
            <${ActivateTarget}
                ${listen(ActivateTarget.events.activated, () => {
                    count += 1;
                })}
            ></${ActivateTarget}>
        `);
        const button = rendered.shadowRoot?.querySelector('button');
        assert.instanceOf(button, HTMLButtonElement);

        pressKey(button, 'Space');
        await waitUntil.isTruthy(() => count === 1);
    });

    it('does not fire on other keys', async () => {
        let count = 0;
        const rendered = await testWeb.render(html`
            <${ActivateTarget}
                ${listen(ActivateTarget.events.activated, () => {
                    count += 1;
                })}
            ></${ActivateTarget}>
        `);
        const button = rendered.shadowRoot?.querySelector('button');
        assert.instanceOf(button, HTMLButtonElement);

        pressKey(button, 'KeyA');
        pressKey(button, 'Tab');
        pressKey(button, 'Escape');

        await new Promise<void>((resolve) => {
            setTimeout(resolve, 50);
        });
        assert.strictEquals(count, 0);
    });
});

describe(listenToEnter.name, () => {
    it('fires on Enter', async () => {
        let count = 0;
        const rendered = await testWeb.render(html`
            <${EnterTarget}
                ${listen(EnterTarget.events.enterFired, () => {
                    count += 1;
                })}
            ></${EnterTarget}>
        `);
        const button = rendered.shadowRoot?.querySelector('button');
        assert.instanceOf(button, HTMLButtonElement);

        pressKey(button, 'Enter');
        await waitUntil.isTruthy(() => count === 1);
    });

    it('does not fire on Space', async () => {
        let count = 0;
        const rendered = await testWeb.render(html`
            <${EnterTarget}
                ${listen(EnterTarget.events.enterFired, () => {
                    count += 1;
                })}
            ></${EnterTarget}>
        `);
        const button = rendered.shadowRoot?.querySelector('button');
        assert.instanceOf(button, HTMLButtonElement);

        pressKey(button, 'Space');

        await new Promise<void>((resolve) => {
            setTimeout(resolve, 50);
        });
        assert.strictEquals(count, 0);
    });
});
