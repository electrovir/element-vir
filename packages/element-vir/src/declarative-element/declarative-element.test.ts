import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {
    type AssignMethod,
    type BaseStringName,
    type CustomElementTagName,
    DeclarativeElement,
    type DeclarativeElementDefinition,
    type DeclarativeElementHost,
    type EventsInitMap,
    LitElement,
    type MinimalDefinitionWithInputs,
    type PropertyInitMapBase,
    type StaticDeclarativeElementProperties,
    type UpdateStateCallback,
    defineElement,
    defineElementEvent,
    html,
} from '../index.js';

const InstanceSurfaceElement = defineElement<{myInput: string}>()({
    tagName: 'instance-surface-element',
    testIds: [
        'eventButton',
    ],
    state() {
        return {
            myState: 0 as number,
        };
    },
    render() {
        return html`
            <span>surface</span>
        `;
    },
});

class SubclassedSurfaceElement extends InstanceSurfaceElement {}
window.customElements.define('subclassed-surface-element', SubclassedSurfaceElement);

type SurfaceHost = (typeof InstanceSurfaceElement)['InstanceType'];

describe('DeclarativeElementHost', () => {
    it('always has a shadow root', () => {
        assert.tsType<SurfaceHost['shadowRoot']>().equals<ShadowRoot>();
        assert.tsType<DeclarativeElementHost['shadowRoot']>().equals<ShadowRoot>();
    });

    it('omits definition-only static properties', () => {
        assert.tsType<'assign' extends keyof SurfaceHost ? true : false>().equals<false>();
        assert.tsType<'events' extends keyof SurfaceHost ? true : false>().equals<false>();
        assert.tsType<'init' extends keyof SurfaceHost ? true : false>().equals<false>();
        assert.tsType<'InputsType' extends keyof SurfaceHost ? true : false>().equals<false>();
        assert.tsType<'elementOptions' extends keyof SurfaceHost ? true : false>().equals<false>();
    });

    it('keeps static property names that clash with HTMLElement properties', () => {
        assert.tsType<'tagName' extends keyof SurfaceHost ? true : false>().equals<true>();
        assert.tsType<'style' extends keyof SurfaceHost ? true : false>().equals<true>();
    });

    it('keeps the render instance method callable without a cast', async () => {
        assert.tsType<SurfaceHost['render']>().equals<() => unknown>();

        const fixture = await testWeb.render(html`
            <${InstanceSurfaceElement.assign({
                myInput: 'render method',
            })}></${InstanceSurfaceElement}>
        `);
        assert.instanceOf(fixture, InstanceSurfaceElement);

        assert.isDefined(fixture.render());
    });

    it('omits every static-only definition prop and nothing else', () => {
        type StaticOnlyKeys = Exclude<
            keyof StaticDeclarativeElementProperties<any, any, any, any, any, any, any, any>,
            keyof HTMLElement | 'render'
        >;

        assert.tsType<Extract<keyof SurfaceHost, StaticOnlyKeys>>().equals<never>();
        assert.tsType<Extract<keyof SurfaceHost, 'render'>>().equals<'render'>();
        assert.tsType<Extract<keyof DeclarativeElementHost, StaticOnlyKeys>>().equals<never>();
    });

    it('keeps the render instance method separate from the static render callback', () => {
        assert.tsType<Parameters<SurfaceHost['render']>>().equals<[]>();
        assert.tsType<ReturnType<SurfaceHost['render']>>().equals<unknown>();
        assert.tsType<DeclarativeElementHost['render']>().equals<() => unknown>();
        assert
            .tsType<Parameters<(typeof InstanceSurfaceElement)['render']>['length']>()
            .equals<1>();
    });

    it('keeps the declarative element instance members', () => {
        assert.tsType<SurfaceHost['instanceState']>().equals<{myState: number}>();
        assert.tsType<SurfaceHost['instanceInputs']>().equals<{myInput: string}>();
        assert.tsType<SurfaceHost['destroy']>().equals<() => void>();
        assert.tsType<SurfaceHost['_internalRenderCount']>().equals<number>();
        assert.tsType<keyof SurfaceHost['_lastRenderedProps']>().equals<'inputs' | 'state'>();
    });
});

describe('DeclarativeElementDefinition', () => {
    it('constructs its host type', () => {
        assert.tsType<InstanceType<typeof InstanceSurfaceElement>>().equals<SurfaceHost>();
        assert.tsType<(typeof InstanceSurfaceElement)['InstanceType']>().equals<SurfaceHost>();
    });

    it('exposes the state and update state types', () => {
        assert
            .tsType<(typeof InstanceSurfaceElement)['StateType']>()
            .equals<Readonly<{myState: number}>>();
        assert
            .tsType<(typeof InstanceSurfaceElement)['UpdateStateType']>()
            .equals<UpdateStateCallback<{myState: number}>>();
        assert.tsType<(typeof InstanceSurfaceElement)['InputsType']>().equals<{myInput: string}>();
    });

    it('extends the abstract DeclarativeElement class', () => {
        const genericInstance: DeclarativeElementDefinition = InstanceSurfaceElement;

        assert.strictEquals(Object.getPrototypeOf(InstanceSurfaceElement), DeclarativeElement);
        assert.tsType<typeof InstanceSurfaceElement>().matches<DeclarativeElementDefinition>();
    });
});

describe('AssignMethod', () => {
    it('blocks assignment for elements without inputs', () => {
        assert
            // eslint-disable-next-line @typescript-eslint/no-empty-object-type
            .tsType<AssignMethod<'no-inputs-element', {}>>()
            .equals<(inputsObject: never) => never>();
    });

    it('accepts readonly inputs and returns a minimal definition', () => {
        assert
            .tsType<AssignMethod<'with-inputs-element', {myInput: string}>>()
            .equals<
                (
                    inputsObject: Readonly<{myInput: string}>,
                ) => MinimalDefinitionWithInputs<'with-inputs-element'>
            >();
    });

    it('degrades to any for any inputs', () => {
        assert.tsType<AssignMethod<'any-inputs-element', any>>().equals<any>();
    });
});

describe('StaticDeclarativeElementProperties', () => {
    it('excludes observables in InputsType', () => {
        assert
            .tsType<
                StaticDeclarativeElementProperties<
                    any,
                    {hi: number},
                    any,
                    any,
                    any,
                    any,
                    any,
                    any
                >['InputsType']
            >()
            .equals<{hi: number}>();
    });
});

describe(DeclarativeElement.name, () => {
    it('includes all needed declarative element properties', () => {
        assert
            .tsType<typeof DeclarativeElement>()
            .matches<
                StaticDeclarativeElementProperties<
                    CustomElementTagName,
                    PropertyInitMapBase,
                    PropertyInitMapBase,
                    EventsInitMap,
                    BaseStringName<CustomElementTagName>,
                    BaseStringName<CustomElementTagName>,
                    ReadonlyArray<string>,
                    ReadonlyArray<string>
                >
            >();
    });

    it('has proper types', async () => {
        const definedDeclarativeElementWithEvents = defineElement()({
            render() {
                return html``;
            },
            state() {
                return {
                    thing: '',
                };
            },
            events: {
                stuff: defineElementEvent<boolean>(),
            },
            tagName: 'defined-declarative-element-123',
        });

        const definedDeclarativeElementWithoutEvents = defineElement()({
            render() {
                return html``;
            },
            state() {
                return {
                    thing: 5,
                };
            },
            tagName: 'defined-declarative-element-98765',
        });

        const instanceWithEvents = await testWeb.render(html`
            <${definedDeclarativeElementWithEvents}></${definedDeclarativeElementWithEvents}>
        `);

        assert.instanceOf(instanceWithEvents, definedDeclarativeElementWithEvents);

        // @ts-expect-error: while thing will exist on an instance, it shouldn't be accessible this way from the types
        assert.strictEquals(instanceWithEvents.thing, '');
        assert.strictEquals(instanceWithEvents.instanceState.thing, '');
        // @ts-expect-error: events should not exist on an instance
        assert.isUndefined(instanceWithEvents.events);
        assert.isDefined(instanceWithEvents.definition.events);

        const instanceWithoutEvents = await testWeb.render(html`
            <${definedDeclarativeElementWithoutEvents}></${definedDeclarativeElementWithoutEvents}>
        `);

        assert.instanceOf(instanceWithoutEvents, definedDeclarativeElementWithoutEvents);

        assert.strictEquals(instanceWithoutEvents.instanceState.thing, 5);
        // @ts-expect-error: events does not exist on an instance
        assert.isUndefined(instanceWithoutEvents.events);
        assert.deepEquals(instanceWithoutEvents.definition.events, {});
    });

    it('renders into an open shadow root without adding host attributes', async () => {
        const fixture = await testWeb.render(html`
            <${InstanceSurfaceElement.assign({
                myInput: 'surface input',
            })}></${InstanceSurfaceElement}>
        `);
        assert.instanceOf(fixture, InstanceSurfaceElement);

        assert.strictEquals(fixture.shadowRoot.mode, 'open');
        assert.strictEquals(fixture.shadowRoot.host, fixture);
        assert.isFalse(fixture.shadowRoot.delegatesFocus);
        assert.isEmpty(fixture.getAttributeNames());
        assert.strictEquals(fixture.tagName, 'INSTANCE-SURFACE-ELEMENT');
    });

    it('inherits from LitElement and the abstract DeclarativeElement', async () => {
        const fixture = await testWeb.render(html`
            <${InstanceSurfaceElement.assign({
                myInput: 'surface input',
            })}></${InstanceSurfaceElement}>
        `);

        assert.instanceOf(fixture, DeclarativeElement);
        assert.instanceOf(fixture, LitElement);
        assert.instanceOf(fixture, HTMLElement);
    });

    it('gives each instance its own state and inputs proxies', async () => {
        const first = await testWeb.render(html`
            <${InstanceSurfaceElement.assign({
                myInput: 'surface input',
            })}></${InstanceSurfaceElement}>
        `);
        const second = await testWeb.render(html`
            <${InstanceSurfaceElement.assign({
                myInput: 'surface input',
            })}></${InstanceSurfaceElement}>
        `);
        assert.instanceOf(first, InstanceSurfaceElement);
        assert.instanceOf(second, InstanceSurfaceElement);

        assert.notStrictEquals(first.instanceState, second.instanceState);
        assert.notStrictEquals(first.instanceInputs, second.instanceInputs);
        assert.notStrictEquals(
            first.observablePropertyListenerMap,
            second.observablePropertyListenerMap,
        );

        first.instanceState.myState = 5;

        assert.strictEquals(first.instanceState.myState, 5);
        assert.strictEquals(second.instanceState.myState, 0);
    });

    it('points a subclass instance at the parent definition', async () => {
        const fixture = await testWeb.render(html`
            <subclassed-surface-element></subclassed-surface-element>
        `);
        assert.instanceOf(fixture, SubclassedSurfaceElement);

        assert.strictEquals(fixture.definition, InstanceSurfaceElement);
        assert.notStrictEquals(fixture.definition, SubclassedSurfaceElement);
        assert.strictEquals(fixture.definition.tagName, 'instance-surface-element');
    });

    it('snapshots the last rendered props separately from the live state', async () => {
        const fixture = await testWeb.render(html`
            <${InstanceSurfaceElement.assign({
                myInput: 'first',
            })}></${InstanceSurfaceElement}>
        `);
        assert.instanceOf(fixture, InstanceSurfaceElement);

        assert.deepEquals(
            {
                ...fixture._lastRenderedProps,
            },
            {
                inputs: {
                    myInput: 'first',
                },
                state: {
                    myState: 0,
                },
            },
        );
        assert.notStrictEquals(fixture._lastRenderedProps.state, fixture.instanceState);

        fixture.instanceState.myState = 42;
        const staleSnapshotValue = fixture._lastRenderedProps.state.myState;
        await fixture.updateComplete;

        assert.strictEquals(staleSnapshotValue, 0);
        assert.strictEquals(fixture._lastRenderedProps.state.myState, 42);
    });

    it('has no render error and a zero render count before rendering', () => {
        const detached = document.createElement(InstanceSurfaceElement.tagName) as InstanceType<
            typeof InstanceSurfaceElement
        >;

        assert.isUndefined(detached._lastRenderError);
        assert.strictEquals(detached._internalRenderCount, 0);
        assert.isUndefined(detached._lastRenderedProps);
        assert.strictEquals(detached.definition, InstanceSurfaceElement);
        assert.isNull(detached.shadowRoot as ShadowRoot | null);
    });
});
