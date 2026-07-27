// cspell:word Spacebar

import {assert, waitUntil} from '@augment-vir/assert';
import {wait} from '@augment-vir/common';
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

function createKeyEvent({code, key}: Readonly<{code: string; key: string}>) {
    return new KeyboardEvent('keydown', {
        code,
        key,
        bubbles: true,
        cancelable: true,
        composed: true,
    });
}

function pressKey(target: Element, code: string) {
    const event = createKeyEvent({
        code,
        key: code,
    });
    target.dispatchEvent(event);
    return event;
}

async function renderActivateTarget() {
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

    return {
        button,
        getCount() {
            return count;
        },
    };
}

async function renderEnterTarget() {
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

    return {
        button,
        getCount() {
            return count;
        },
    };
}

describe(listenToActivate.name, () => {
    it('fires the callback on Enter', async () => {
        const target = await renderActivateTarget();

        pressKey(target.button, 'Enter');
        await waitUntil.isTruthy(() => target.getCount() === 1);
    });

    it('fires the callback on Space', async () => {
        const target = await renderActivateTarget();

        pressKey(target.button, 'Space');
        await waitUntil.isTruthy(() => target.getCount() === 1);
    });

    it('does not fire on other keys', async () => {
        const target = await renderActivateTarget();

        pressKey(target.button, 'KeyA');
        pressKey(target.button, 'Tab');
        pressKey(target.button, 'Escape');

        await wait({
            milliseconds: 50,
        });
        assert.strictEquals(target.getCount(), 0);
    });

    it('fires on any key code that contains enter or return', async () => {
        const target = await renderActivateTarget();

        pressKey(target.button, 'NumpadEnter');
        pressKey(target.button, 'Return');

        await waitUntil.strictEquals(2, () => target.getCount());
    });

    it('requires an exact space code match', async () => {
        const target = await renderActivateTarget();

        pressKey(target.button, 'Backspace');
        pressKey(target.button, 'Spacebar');

        await wait({
            milliseconds: 50,
        });
        assert.strictEquals(target.getCount(), 0);
    });

    it('uses the event code instead of the event key', async () => {
        const target = await renderActivateTarget();

        target.button.dispatchEvent(
            createKeyEvent({
                code: 'KeyJ',
                key: 'Enter',
            }),
        );
        await wait({
            milliseconds: 50,
        });
        assert.strictEquals(target.getCount(), 0);

        target.button.dispatchEvent(
            createKeyEvent({
                code: 'Enter',
                key: 'j',
            }),
        );
        await waitUntil.strictEquals(1, () => target.getCount());
    });

    it('prevents the default only for activating keys', async () => {
        const target = await renderActivateTarget();

        assert.isTrue(pressKey(target.button, 'Enter').defaultPrevented);
        assert.isTrue(pressKey(target.button, 'Space').defaultPrevented);
        assert.isFalse(pressKey(target.button, 'KeyA').defaultPrevented);
    });

    it('stops immediate propagation only for activating keys', async () => {
        const target = await renderActivateTarget();
        const laterListenerKeys: string[] = [];
        target.button.addEventListener('keydown', (event) => {
            laterListenerKeys.push(event.code);
        });

        pressKey(target.button, 'Enter');
        pressKey(target.button, 'Space');
        pressKey(target.button, 'KeyA');

        await waitUntil.deepEquals(['KeyA'], () => laterListenerKeys);
    });

    it('fires once per key press', async () => {
        const target = await renderActivateTarget();

        pressKey(target.button, 'Enter');
        pressKey(target.button, 'Enter');

        await waitUntil.strictEquals(2, () => target.getCount());
        await wait({
            milliseconds: 50,
        });
        assert.strictEquals(target.getCount(), 2);
    });
});

describe(listenToEnter.name, () => {
    it('fires on Enter', async () => {
        const target = await renderEnterTarget();

        pressKey(target.button, 'Enter');
        await waitUntil.isTruthy(() => target.getCount() === 1);
    });

    it('does not fire on Space', async () => {
        const target = await renderEnterTarget();

        pressKey(target.button, 'Space');

        await wait({
            milliseconds: 50,
        });
        assert.strictEquals(target.getCount(), 0);
    });

    it('fires on any key code that contains enter or return', async () => {
        const target = await renderEnterTarget();

        pressKey(target.button, 'NumpadEnter');
        pressKey(target.button, 'Return');

        await waitUntil.strictEquals(2, () => target.getCount());
    });

    it('prevents the default only for enter keys', async () => {
        const target = await renderEnterTarget();

        assert.isTrue(pressKey(target.button, 'Enter').defaultPrevented);
        assert.isFalse(pressKey(target.button, 'Space').defaultPrevented);
        assert.isFalse(pressKey(target.button, 'KeyA').defaultPrevented);
    });

    it('stops immediate propagation only for enter keys', async () => {
        const target = await renderEnterTarget();
        const laterListenerKeys: string[] = [];
        target.button.addEventListener('keydown', (event) => {
            laterListenerKeys.push(event.code);
        });

        pressKey(target.button, 'Enter');
        pressKey(target.button, 'Space');

        await waitUntil.deepEquals(['Space'], () => laterListenerKeys);
    });
});
