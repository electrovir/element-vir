import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {Observable} from 'observavir';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {defineElement} from '../define-element.js';

const PropertyProxyChild = defineElement<{value: number; obs: Observable<string>}>()({
    tagName: 'property-proxy-child',
    render({inputs}) {
        return html`
            <span class="value">${inputs.value}</span>
            <span class="obs">${inputs.obs.value}</span>
        `;
    },
});

describe('property-proxy', () => {
    it('reads input values back through the proxy', async () => {
        const initialObservable = new Observable({
            defaultValue: 'first',
        });
        const fixture = await testWeb.render(html`
            <${PropertyProxyChild.assign({
                value: 7,
                obs: initialObservable,
            })}></${PropertyProxyChild}>
        `);
        assert.instanceOf(fixture, PropertyProxyChild);
        assert.strictEquals(fixture.instanceInputs.value, 7);
    });

    it('re-renders the child when an observable input value changes', async () => {
        const observable = new Observable({
            defaultValue: 'before',
        });
        const fixture = await testWeb.render(html`
            <${PropertyProxyChild.assign({
                value: 1,
                obs: observable,
            })}></${PropertyProxyChild}>
        `);
        assert.instanceOf(fixture, PropertyProxyChild);

        const obsSpan = fixture.shadowRoot.querySelector('.obs');
        assert.instanceOf(obsSpan, HTMLSpanElement);
        assert.strictEquals(obsSpan.textContent.trim(), 'before');

        observable.setValue('after');
        await fixture.updateComplete;
        assert.strictEquals(obsSpan.textContent.trim(), 'after');
    });

    it('detaches the listener from a previous observable when an input is reassigned', async () => {
        const first = new Observable({
            defaultValue: 'first',
        });
        const second = new Observable({
            defaultValue: 'second',
        });
        const fixture = await testWeb.render(html`
            <${PropertyProxyChild.assign({
                value: 1,
                obs: first,
            })}></${PropertyProxyChild}>
        `);
        assert.instanceOf(fixture, PropertyProxyChild);

        fixture.assignInputs({
            value: 1,
            obs: second,
        });
        await fixture.updateComplete;

        const obsSpan = fixture.shadowRoot.querySelector('.obs');
        assert.instanceOf(obsSpan, HTMLSpanElement);
        assert.strictEquals(obsSpan.textContent.trim(), 'second');

        /** Updating the first (now-detached) observable should not affect rendering. */
        first.setValue('first-updated');
        await fixture.updateComplete;
        assert.strictEquals(obsSpan.textContent.trim(), 'second');

        /** Updating the new observable should still re-render. */
        second.setValue('second-updated');
        await fixture.updateComplete;
        assert.strictEquals(obsSpan.textContent.trim(), 'second-updated');
    });

    it('clears the listener entry when an observable input is replaced with a non-observable', async () => {
        const ObsOrStringChild = defineElement<{obs: Observable<string> | string}>()({
            tagName: 'property-proxy-obs-or-string',
            render({inputs}) {
                const value = typeof inputs.obs === 'string' ? inputs.obs : inputs.obs.value;
                return html`
                    <span class="value">${value}</span>
                `;
            },
        });
        const observable = new Observable({
            defaultValue: 'before',
        });
        const fixture = await testWeb.render(html`
            <${ObsOrStringChild.assign({
                obs: observable,
            })}></${ObsOrStringChild}>
        `);
        assert.instanceOf(fixture, ObsOrStringChild);

        fixture.assignInputs({
            obs: 'literal',
        });
        await fixture.updateComplete;

        const span = fixture.shadowRoot.querySelector('.value');
        assert.instanceOf(span, HTMLSpanElement);
        assert.strictEquals(span.textContent.trim(), 'literal');

        /** Listener should be cleared so observable mutations no longer cause re-renders. */
        observable.setValue('orphan');
        await fixture.updateComplete;
        assert.strictEquals(span.textContent.trim(), 'literal');
    });

    it('throws when reading a non-existent state property through the state proxy', async () => {
        const StateProxyElement = defineElement()({
            tagName: 'property-proxy-state-element',
            state() {
                return {
                    real: 0,
                };
            },
            render() {
                return 'hi';
            },
        });
        const fixture = await testWeb.render(html`
            <${StateProxyElement}></${StateProxyElement}>
        `);
        assert.instanceOf(fixture, StateProxyElement);

        assert.throws(
            () => {
                /** State proxy uses shouldAlreadyExist=true; missing keys throw. */
                (fixture.instanceState as Record<string, unknown>).nonExistentKey;
            },
            {
                matchMessage: 'does not exist on',
            },
        );
    });
});
