import {AssertionError, check} from '@augment-vir/assert';
import {getObjectTypedKeys, wrapInTry} from '@augment-vir/common';
import {
    type DeclarativeElementDefinition,
    type StaticDeclarativeElementProperties,
} from './declarative-element.js';

const expectedStaticProperties = getObjectTypedKeys({
    assign: '',
    assignedInputs: '',
    cssVars: '',
    elementOptions: '',
    events: '',
    hostClasses: '',
    init: '',
    InputsType: '',
    render: '',
    slotNames: '',
    testIds: '',
    StateType: '',
    styles: '',
    tagName: '',
    UpdateStateType: '',
} satisfies Readonly<
    Record<keyof StaticDeclarativeElementProperties<any, any, any, any, any, any, any, any>, ''>
>);

/** `assignedInputs` is only populated by the template transforms, so it is legitimately unset. */
const staticPropertiesAllowedToBeUndefined: ReadonlyArray<
    keyof StaticDeclarativeElementProperties<any, any, any, any, any, any, any, any>
> = ['assignedInputs'];

/**
 * The type-only statics (such as `InputsType`) are getters that throw, so their descriptors must be
 * inspected instead of their values.
 */
function findStaticDescriptor(
    input: Readonly<object>,
    key: PropertyKey,
): PropertyDescriptor | undefined {
    const ownDescriptor = Object.getOwnPropertyDescriptor(input, key);

    if (ownDescriptor) {
        return ownDescriptor;
    }

    const parent = Object.getPrototypeOf(input) as object | null;

    return parent == undefined ? undefined : findStaticDescriptor(parent, key);
}

/**
 * Asserts that the given input is a declarative element definition.
 *
 * @category Util
 * @see {@link isDeclarativeElementDefinition}
 */
export function assertDeclarativeElementDefinition(
    input: unknown,
    failMessage?: string | undefined,
): asserts input is DeclarativeElementDefinition {
    if (!check.isFunction(input)) {
        throw new AssertionError('Input is not a declarative element constructor', failMessage);
    }
    expectedStaticProperties.forEach((expectedProperty) => {
        const descriptor = findStaticDescriptor(input, expectedProperty);

        if (!descriptor) {
            throw new AssertionError(`missing prop '${expectedProperty}'`, failMessage);
        } else if (
            !descriptor.get &&
            descriptor.value === undefined &&
            !staticPropertiesAllowedToBeUndefined.includes(expectedProperty)
        ) {
            throw new AssertionError(`undefined prop '${expectedProperty}'`, failMessage);
        }
    });
}

/**
 * Checks that the given input is a declarative element definition.
 *
 * @category Util
 * @see {@link assertDeclarativeElementDefinition}
 */
export function isDeclarativeElementDefinition(
    input: unknown,
): input is DeclarativeElementDefinition {
    return wrapInTry(
        () => {
            assertDeclarativeElementDefinition(input);
            return true;
        },
        {
            fallbackValue: false,
        },
    );
}
