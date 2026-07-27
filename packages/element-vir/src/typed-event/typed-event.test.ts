import {assert, assertWrap} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {defineElement} from '../declarative-element/define-element.js';
import {listen} from '../declarative-element/directives/listen.directive.js';
import {html} from '../template-transforms/vir-html/vir-html.js';
import {type DefinedTypedEvent, TypedEvent, defineTypedEvent} from './typed-event.js';

describe(defineTypedEvent.name, () => {
    it('creates the correct types', () => {
        const eventTypeName = 'my-custom-typed-event';

        const myCustomTypedEvent = defineTypedEvent<number>()(eventTypeName);
        // @ts-expect-error: input should be a number
        const newEventWrongType = new myCustomTypedEvent('not a number');
        // @ts-expect-error: input should be a number
        const typeNotAccepted = new myCustomTypedEvent(eventTypeName);

        const newValidEvent = new myCustomTypedEvent(5);

        assert.strictEquals(newValidEvent.detail, 5);

        assert.strictEquals(myCustomTypedEvent.type, eventTypeName);
        assert.strictEquals(newValidEvent.type, eventTypeName);
    });

    it('has proper types', () => {
        // this shouldn't actually be run, it's just used to check types
        function main() {
            // @ts-expect-error: empty strings are not allowed
            const invalidTypeInput = defineTypedEvent<Record<string, string>>()('');

            const validCustomEvent = defineTypedEvent<Record<string, string>>()(
                'my-valid-custom-typed-event',
            );

            listen(validCustomEvent, (event) => {
                // event.detail should retain its type information
                const value: Record<string, string> = event.detail;
            });

            // @ts-expect-error: input should be an object
            const invalidConstructorParameterInput = new validCustomEvent(4);
            // @ts-expect-error: input should be an object
            const invalidUndefinedInput = new validCustomEvent(undefined);

            const validCustomEventInstance = new validCustomEvent({
                propName: 'valueName',
            });
        }
    });

    it('creates a subclass of TypedEvent and CustomEvent', () => {
        const myCustomTypedEvent = defineTypedEvent<number>()('subclass-typed-event');
        const instance = new myCustomTypedEvent(5);

        assert.instanceOf(instance, myCustomTypedEvent);
        assert.instanceOf(instance, TypedEvent);
        assert.instanceOf(instance, CustomEvent);
        assert.strictEquals(instance._type, 'subclass-typed-event');
        assert.tsType(instance.type).equals<'subclass-typed-event'>();
        assert.tsType(instance.detail).equals<number>();
    });

    it('always bubbles and composes but is not cancelable', () => {
        const myCustomTypedEvent = defineTypedEvent<number>()('bubbling-typed-event');
        const instance = new myCustomTypedEvent(5);

        assert.isTrue(instance.bubbles);
        assert.isTrue(instance.composed);
        assert.isFalse(instance.cancelable);
    });

    it('creates distinct classes for the same event type name', () => {
        const firstDefinition = defineTypedEvent<number>()('duplicated-typed-event');
        const secondDefinition = defineTypedEvent<number>()('duplicated-typed-event');

        assert.notStrictEquals(firstDefinition, secondDefinition);
        assert.strictEquals(firstDefinition.type, secondDefinition.type);
        assert.isFalse(new firstDefinition(1) instanceof secondDefinition);
    });

    it('converts a void detail into null', () => {
        const myVoidEvent = defineTypedEvent<void>()('void-detail-typed-event');
        const instance = new myVoidEvent();

        /** `CustomEvent` itself replaces a missing `detail` with `null`. */
        assert.isNull(instance.detail);
    });

    it('dispatches with the event type name', () => {
        const myCustomTypedEvent = defineTypedEvent<number>()('dispatched-typed-event');
        const caughtEvents: Event[] = [];
        const target = new EventTarget();

        target.addEventListener('dispatched-typed-event', (event) => {
            caughtEvents.push(event);
        });

        const instance = new myCustomTypedEvent(5);
        target.dispatchEvent(instance);

        assert.isLengthExactly(caughtEvents, 1);
        assert.strictEquals(caughtEvents[0], instance);
    });
});

describe(TypedEvent.name, () => {
    it('accepts an object with a type property', () => {
        const definedEvent = defineTypedEvent<number>()('object-input-typed-event');
        const caughtEvents: Event[] = [];
        const target = new EventTarget();

        target.addEventListener('object-input-typed-event', (event) => {
            caughtEvents.push(event);
        });

        const instance = new TypedEvent(definedEvent, 5);
        target.dispatchEvent(instance);

        assert.isLengthExactly(caughtEvents, 1);
        assert.strictEquals(caughtEvents[0], instance);
        assert.tsType(instance.detail).equals<number>();
        assert.tsType(instance.type).equals<'object-input-typed-event'>();
        assert.strictEquals(instance.type, 'object-input-typed-event');
        assert.strictEquals(instance.detail, 5);
    });

    it('accepts a plain type object', () => {
        const typeObject: {type: 'plain-object-typed-event'} = {
            type: 'plain-object-typed-event',
        };
        const caughtEvents: Event[] = [];
        const target = new EventTarget();

        target.addEventListener(typeObject.type, (event) => {
            caughtEvents.push(event);
        });

        const instance = new TypedEvent(typeObject, 'hi');
        target.dispatchEvent(instance);

        assert.isLengthExactly(caughtEvents, 1);
        assert.strictEquals(instance.type, 'plain-object-typed-event');
    });

    it('reports the type it was directly constructed with', () => {
        const instance = new TypedEvent('directly-constructed-typed-event', 5);

        assert.strictEquals(instance.type, 'directly-constructed-typed-event');
        assert.strictEquals(instance._type, 'directly-constructed-typed-event');

        const caughtEvents: Event[] = [];
        const target = new EventTarget();
        target.addEventListener('directly-constructed-typed-event', (event) => {
            caughtEvents.push(event);
        });
        target.dispatchEvent(instance);

        assert.isLengthExactly(caughtEvents, 1);
    });

    it('reports the same type through a further subclass', () => {
        const BaseDefinedEvent = defineTypedEvent<number>()('further-subclassed-typed-event');

        class ExtendedEvent extends BaseDefinedEvent {}

        const instance = new ExtendedEvent(5);

        assert.deepEquals(
            {
                instanceType: instance.type,
                instanceUnderscoreType: instance._type,
                extendedStaticType: ExtendedEvent.type,
                baseStaticType: BaseDefinedEvent.type,
                detail: instance.detail,
            },
            {
                instanceType: 'further-subclassed-typed-event',
                instanceUnderscoreType: 'further-subclassed-typed-event',
                extendedStaticType: 'further-subclassed-typed-event',
                baseStaticType: 'further-subclassed-typed-event',
                detail: 5,
            },
        );
    });

    it('sets _type before any subclass field initializer runs', () => {
        const BaseDefinedEvent = defineTypedEvent<number>()('field-order-typed-event');

        class FieldInitializerEvent extends BaseDefinedEvent {
            public readonly typeSeenByFieldInitializer = this._type;
        }

        const instance = new FieldInitializerEvent(5);

        assert.deepEquals(
            {
                typeSeenByFieldInitializer: instance.typeSeenByFieldInitializer,
                type: instance.type,
            },
            {
                typeSeenByFieldInitializer: 'field-order-typed-event',
                type: 'field-order-typed-event',
            },
        );
    });

    it('reads type from _type rather than from CustomEvent', () => {
        const instance = new TypedEvent('read-from-underscore-typed-event', 5);

        assert.tsType<TypedEvent<'abc', number>['type']>().equals<'abc'>();
        assert.tsType<TypedEvent<'abc', number>['_type']>().equals<'abc'>();
        assert.tsType<CustomEvent<number>['type']>().equals<string>();
        assert
            .tsType<Readonly<Pick<TypedEvent<'abc', number>, '_type'>>>()
            .equals<Pick<TypedEvent<'abc', number>, '_type'>>();

        assert.strictEquals(
            Object.getOwnPropertyDescriptor(TypedEvent.prototype, 'type')?.get?.call(instance),
            'read-from-underscore-typed-event',
        );

        // @ts-expect-error: _type is readonly
        instance._type = 'mutated-typed-event';
    });

    it('is caught by the listen directive across a shadow boundary', async () => {
        const myTypedEvent = defineTypedEvent<number>()('listened-typed-event');
        const caughtEvents: Array<Record<string, unknown>> = [];

        const DispatchingElement = defineElement()({
            tagName: 'typed-event-dispatching-element',
            render() {
                return html`
                    <span class="inner"></span>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${DispatchingElement}
                ${listen(myTypedEvent, (event) => {
                    assert.tsType(event.detail).equals<number>();
                    caughtEvents.push({
                        type: event.type,
                        detail: event.detail,
                        bubbles: event.bubbles,
                        composed: event.composed,
                    });
                })}
            ></${DispatchingElement}>
        `);
        assert.instanceOf(fixture, DispatchingElement);

        assertWrap
            .isDefined(fixture.shadowRoot.querySelector('.inner'))
            .dispatchEvent(new myTypedEvent(42));

        assert.deepEquals(caughtEvents, [
            {
                type: 'listened-typed-event',
                detail: 42,
                bubbles: true,
                composed: true,
            },
        ]);
    });

    it('has proper definition types', () => {
        const definedEvent = defineTypedEvent<number>()('defined-type-check-typed-event');

        assert
            .tsType<InstanceType<typeof definedEvent>>()
            .equals<TypedEvent<'defined-type-check-typed-event', number>>();
        assert.tsType(definedEvent.type).equals<'defined-type-check-typed-event'>();

        const asDefinedEvent: DefinedTypedEvent<'defined-type-check-typed-event', number> =
            definedEvent;
        assert.strictEquals(asDefinedEvent.type, 'defined-type-check-typed-event');
    });
});
