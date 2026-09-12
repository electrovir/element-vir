import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {css} from '../../template-transforms/vir-css/vir-css.js';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {defineElement} from '../define-element.js';
import {applyHostClasses, createStylesCallbackInput} from './styles.js';

describe(createStylesCallbackInput.name, () => {
    it('wraps each host class name in a selector and name CSSResult', () => {
        const input = createStylesCallbackInput<
            'foo-element',
            'foo-element-active' | 'foo-element-inactive',
            never,
            readonly []
        >({
            hostClassNames: {
                'foo-element-active': 'foo-element-active',
                'foo-element-inactive': 'foo-element-inactive',
            },
            cssVars: {} as never,
            slotNamesMap: {} as never,
        });

        assert.strictEquals(
            input.hostClasses['foo-element-active'].name.cssText,
            'foo-element-active',
        );
        assert.strictEquals(
            input.hostClasses['foo-element-active'].selector.cssText,
            ':host(.foo-element-active)',
        );
    });

    it('wraps slot names in CSSResult', () => {
        const input = createStylesCallbackInput<
            'foo-element',
            never,
            never,
            readonly ['foo-element-main-slot']
        >({
            hostClassNames: {} as never,
            cssVars: {} as never,
            slotNamesMap: {
                'foo-element-main-slot': 'foo-element-main-slot',
            },
        });
        assert.strictEquals(
            input.slotNames['foo-element-main-slot'].cssText,
            'foo-element-main-slot',
        );
    });

    it('passes css vars straight through by reference', () => {
        const cssVars = {} as never;
        const input = createStylesCallbackInput<'foo-element', never, never, readonly []>({
            hostClassNames: {} as never,
            cssVars,
            slotNamesMap: {} as never,
        });

        assert.strictEquals(input.cssVars, cssVars);
    });

    it('creates new host class and slot name maps rather than reusing the inputs', () => {
        const hostClassNames = {
            'foo-element-active': 'foo-element-active',
        } as const;
        const slotNamesMap = {
            'foo-element-main-slot': 'foo-element-main-slot',
        } as const;
        const input = createStylesCallbackInput<
            'foo-element',
            'foo-element-active',
            never,
            readonly ['foo-element-main-slot']
        >({
            hostClassNames,
            cssVars: {} as never,
            slotNamesMap,
        });

        assert.notStrictEquals(input.hostClasses as object, hostClassNames as object);
        assert.notStrictEquals(input.slotNames as object, slotNamesMap as object);
    });

    it('returns empty maps for empty inputs', () => {
        const input = createStylesCallbackInput<'foo-element', never, never, readonly []>({
            hostClassNames: {} as never,
            cssVars: {} as never,
            slotNamesMap: {} as never,
        });

        assert.isEmpty(Object.keys(input.hostClasses));
        assert.isEmpty(Object.keys(input.slotNames));
    });

    it('uses the mapped host class name rather than its key for the selector', () => {
        const input = createStylesCallbackInput<
            'foo-element',
            'foo-element-key',
            never,
            readonly []
        >({
            hostClassNames: {
                'foo-element-key': 'foo-element-different-name',
            },
            cssVars: {} as never,
            slotNamesMap: {} as never,
        });

        assert.strictEquals(
            input.hostClasses['foo-element-key'].name.cssText,
            'foo-element-different-name',
        );
        assert.strictEquals(
            input.hostClasses['foo-element-key'].selector.cssText,
            ':host(.foo-element-different-name)',
        );
    });
});

describe(applyHostClasses.name, () => {
    it('leaves existing classes alone when there is no host classes init', () => {
        const host = document.createElement('div');
        host.classList.add('foo-element-active');

        applyHostClasses<
            'foo-element',
            Record<string, never>,
            Record<string, never>,
            'foo-element-active'
        >({
            host,
            hostClassesInit: undefined,
            hostClassNames: {
                'foo-element-active': 'foo-element-active',
            },
            state: {},
            inputs: {},
        });

        assert.isTrue(host.classList.contains('foo-element-active'));
    });

    it('adds the class when the callback returns true and removes it when it returns false', () => {
        const host = document.createElement('div');

        applyHostClasses<
            'foo-element',
            Record<string, never>,
            {enabled: boolean},
            'foo-element-active'
        >({
            host,
            hostClassesInit: {
                'foo-element-active'({state}) {
                    return state.enabled;
                },
            },
            hostClassNames: {
                'foo-element-active': 'foo-element-active',
            },
            state: {
                enabled: true,
            },
            inputs: {},
        });
        assert.isTrue(host.classList.contains('foo-element-active'));

        applyHostClasses<
            'foo-element',
            Record<string, never>,
            {enabled: boolean},
            'foo-element-active'
        >({
            host,
            hostClassesInit: {
                'foo-element-active'({state}) {
                    return state.enabled;
                },
            },
            hostClassNames: {
                'foo-element-active': 'foo-element-active',
            },
            state: {
                enabled: false,
            },
            inputs: {},
        });
        assert.isFalse(host.classList.contains('foo-element-active'));
    });

    it('never touches host classes that are defined as false', () => {
        const host = document.createElement('div');
        host.classList.add('foo-element-manual');

        applyHostClasses<
            'foo-element',
            Record<string, never>,
            Record<string, never>,
            'foo-element-manual'
        >({
            host,
            hostClassesInit: {
                'foo-element-manual': false,
            },
            hostClassNames: {
                'foo-element-manual': 'foo-element-manual',
            },
            state: {},
            inputs: {},
        });

        assert.isTrue(host.classList.contains('foo-element-manual'));
    });

    it('passes the given state and inputs into each callback', () => {
        const host = document.createElement('div');
        const state = {
            enabled: true,
        };
        const inputs = {
            label: 'text',
        };
        const callbackInputs: unknown[] = [];

        applyHostClasses<'foo-element', typeof inputs, typeof state, 'foo-element-active'>({
            host,
            hostClassesInit: {
                'foo-element-active'(callbackInput) {
                    callbackInputs.push(callbackInput);
                    return true;
                },
            },
            hostClassNames: {
                'foo-element-active': 'foo-element-active',
            },
            state,
            inputs,
        });

        assert.deepEquals(callbackInputs, [
            {
                state,
                inputs,
            },
        ]);
    });

    it('toggles the mapped class name rather than the host class key', () => {
        const host = document.createElement('div');

        applyHostClasses<
            'foo-element',
            Record<string, never>,
            Record<string, never>,
            'foo-element-key'
        >({
            host,
            hostClassesInit: {
                'foo-element-key'() {
                    return true;
                },
            },
            hostClassNames: {
                'foo-element-key': 'foo-element-mapped-name',
            },
            state: {},
            inputs: {},
        });

        assert.isTrue(host.classList.contains('foo-element-mapped-name'));
        assert.isFalse(host.classList.contains('foo-element-key'));
    });
});

describe('styles callback integration', () => {
    it('applies a host class selector defined via the styles callback', async () => {
        const StylesCallbackElement = defineElement()({
            tagName: 'styles-callback-element',
            state() {
                return {
                    active: true,
                };
            },
            hostClasses: {
                'styles-callback-element-active'({state}) {
                    return state.active;
                },
            },
            styles({hostClasses}) {
                return css`
                    ${hostClasses['styles-callback-element-active'].selector} {
                        color: rgb(10, 20, 30);
                    }
                    .target {
                        color: black;
                    }
                `;
            },
            render() {
                return html`
                    <span class="target">styled</span>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${StylesCallbackElement}></${StylesCallbackElement}>
        `);
        assert.instanceOf(fixture, StylesCallbackElement);
        assert.isTrue(fixture.classList.contains('styles-callback-element-active'));
    });

    it('removes the host class when its callback stops returning true', async () => {
        const ToggleHostClassElement = defineElement()({
            tagName: 'styles-toggle-host-class-element',
            state() {
                return {
                    active: true,
                };
            },
            hostClasses: {
                'styles-toggle-host-class-element-active'({state}) {
                    return state.active;
                },
            },
            render() {
                return html`
                    <span>toggled</span>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${ToggleHostClassElement}></${ToggleHostClassElement}>
        `);
        assert.instanceOf(fixture, ToggleHostClassElement);
        assert.isTrue(fixture.classList.contains('styles-toggle-host-class-element-active'));

        fixture.instanceState.active = false;
        await fixture.updateComplete;

        assert.isFalse(fixture.classList.contains('styles-toggle-host-class-element-active'));
    });

    it('leaves a manually applied host class in place when its init value is false', async () => {
        const ManualHostClassElement = defineElement()({
            tagName: 'styles-manual-host-class-element',
            state() {
                return {
                    count: 0,
                };
            },
            hostClasses: {
                'styles-manual-host-class-element-manual': false,
            },
            render({state}) {
                return html`
                    <span>${state.count}</span>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${ManualHostClassElement}></${ManualHostClassElement}>
        `);
        assert.instanceOf(fixture, ManualHostClassElement);
        assert.isFalse(fixture.classList.contains('styles-manual-host-class-element-manual'));

        fixture.classList.add('styles-manual-host-class-element-manual');
        fixture.instanceState.count = 1;
        await fixture.updateComplete;

        assert.isTrue(fixture.classList.contains('styles-manual-host-class-element-manual'));
    });
});
