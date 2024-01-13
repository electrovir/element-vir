import {assert, fixture} from '@open-wc/testing';
import {assertInstanceOf, assertTypeOf} from 'run-time-assertions';
import {
    BaseCssPropertyName,
    CustomElementTagName,
    DeclarativeElement,
    EventsInitMap,
    PropertyInitMapBase,
    StaticDeclarativeElementProperties,
    defineElementEvent,
    defineElementNoInputs,
    html,
} from '../index';

describe('StaticDeclarativeElementProperties', () => {
    it('excludes observables in inputsType', () => {
        assertTypeOf<
            StaticDeclarativeElementProperties<
                any,
                {hi: number},
                any,
                any,
                any,
                any,
                any
            >['inputsType']
        >().toEqualTypeOf<{hi: number}>();
    });
});

describe(DeclarativeElement.name, () => {
    it('includes all needed declarative element properties', () => {
        assertTypeOf<typeof DeclarativeElement>().toMatchTypeOf<
            StaticDeclarativeElementProperties<
                CustomElementTagName,
                PropertyInitMapBase,
                PropertyInitMapBase,
                EventsInitMap,
                BaseCssPropertyName<CustomElementTagName>,
                BaseCssPropertyName<CustomElementTagName>,
                ReadonlyArray<string>
            >
        >();
    });

    it('has proper types', async () => {
        const definedDeclarativeElementWithEvents = defineElementNoInputs({
            renderCallback() {
                return html``;
            },
            stateInitStatic: {
                thing: '',
            },
            events: {
                stuff: defineElementEvent<boolean>(),
            },
            tagName: 'defined-declarative-element-123',
        });

        const definedDeclarativeElementWithoutEvents = defineElementNoInputs({
            renderCallback() {
                return html``;
            },
            stateInitStatic: {
                thing: 5,
            },
            tagName: 'defined-declarative-element-98765',
        });

        const instanceWithEvents = await fixture(html`
            <${definedDeclarativeElementWithEvents}></${definedDeclarativeElementWithEvents}>
        `);

        assertInstanceOf(instanceWithEvents, definedDeclarativeElementWithEvents);

        // @ts-expect-error: while thing will exist on an instance, it shouldn't be accessible this way from the types
        assert.strictEqual(instanceWithEvents.thing, '');
        assert.strictEqual(instanceWithEvents.instanceState.thing, '');
        // @ts-expect-error: events should not exist on an instance
        assert.isUndefined(instanceWithEvents.events);
        assert.isDefined(instanceWithEvents.definition.events);

        const instanceWithoutEvents = await fixture(html`
            <${definedDeclarativeElementWithoutEvents}></${definedDeclarativeElementWithoutEvents}>
        `);

        assertInstanceOf(instanceWithoutEvents, definedDeclarativeElementWithoutEvents);

        assert.strictEqual(instanceWithoutEvents.instanceState.thing, 5);
        // @ts-expect-error: events does not exist on an instance
        assert.isUndefined(instanceWithoutEvents.events);
        assert.deepStrictEqual(instanceWithoutEvents.definition.events, {});
    });
});
