import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {defineElement} from '../define-element.js';
import {
    type HostClassNamesMap,
    type HostClassesInitMap,
    createHostClassNamesMap,
} from './host-classes.js';

describe(createHostClassNamesMap.name, () => {
    it('maps each host class key to itself', () => {
        const hostClassNames = createHostClassNamesMap<
            'my-element',
            'my-element-active' | 'my-element-manual',
            HostClassesInitMap<
                'my-element',
                'my-element-active' | 'my-element-manual',
                Record<string, never>,
                {enabled: boolean}
            >
        >({
            'my-element-active'({state}) {
                return state.enabled;
            },
            'my-element-manual': false,
        });

        assert.deepEquals(hostClassNames, {
            'my-element-active': 'my-element-active',
            'my-element-manual': 'my-element-manual',
        });
    });

    it('returns an empty map when given undefined', () => {
        assert.isEmpty(Object.keys(createHostClassNamesMap()));
    });

    it('does not share references between calls', () => {
        const hostClassesInit = {
            'my-element-active': false,
        } as const;
        const first = createHostClassNamesMap(hostClassesInit);
        const second = createHostClassNamesMap(hostClassesInit);

        assert.notStrictEquals(first as object, second as object);
        assert.deepEquals(first, second);
    });

    it('types host class names as tag-name-prefixed strings', () => {
        assert
            .tsType<HostClassNamesMap<'my-element', 'my-element-active'>>()
            .equals<Record<'my-element-active', `my-element-${string}`>>();
    });
});

describe('host classes in an element definition', () => {
    it('exposes an identity map of host class names on the definition', () => {
        const HostClassNamesElement = defineElement()({
            tagName: 'host-classes-names-element',
            hostClasses: {
                'host-classes-names-element-active'() {
                    return true;
                },
                'host-classes-names-element-manual': false,
            },
            render() {
                return 'hi';
            },
        });

        assert.deepEquals(HostClassNamesElement.hostClasses, {
            'host-classes-names-element-active': 'host-classes-names-element-active',
            'host-classes-names-element-manual': 'host-classes-names-element-manual',
        });
    });

    it('has an empty host class map when no host classes are defined', () => {
        const NoHostClassesElement = defineElement()({
            tagName: 'host-classes-none-element',
            render() {
                return 'hi';
            },
        });

        assert.isEmpty(Object.keys(NoHostClassesElement.hostClasses));
    });

    it('rejects host class keys that are not prefixed with the tag name', () => {
        assert.throws(
            () => {
                return defineElement()({
                    tagName: 'host-classes-invalid-element',
                    hostClasses: {
                        // @ts-expect-error: host class keys must start with the tag name
                        'not-prefixed-active': false,
                    },
                    render() {
                        return 'hi';
                    },
                });
            },
            {
                matchMessage: "Invalid element string name 'not-prefixed-active'",
            },
        );
    });

    it('applies host classes based on inputs as well as state', async () => {
        const InputHostClassElement = defineElement<{highlighted: boolean}>()({
            tagName: 'host-classes-input-element',
            hostClasses: {
                'host-classes-input-element-highlighted'({inputs}) {
                    return inputs.highlighted;
                },
            },
            render() {
                return 'hi';
            },
        });

        const fixture = await testWeb.render(html`
            <${InputHostClassElement.assign({
                highlighted: false,
            })}></${InputHostClassElement}>
        `);
        assert.instanceOf(fixture, InputHostClassElement);
        assert.isFalse(fixture.classList.contains('host-classes-input-element-highlighted'));

        fixture.assignInputs({
            highlighted: true,
        });
        await fixture.updateComplete;

        assert.isTrue(fixture.classList.contains('host-classes-input-element-highlighted'));
    });
});
