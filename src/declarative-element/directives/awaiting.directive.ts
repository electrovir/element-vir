import {extractErrorMessage, isPromiseLike, typedHasProperty} from 'augment-vir';

export type MaybePromise<T> =
    | (T extends Promise<infer ValueType> ? T | ValueType : Promise<T> | T)
    | undefined
    | {error: Error};

export type CreateStateUpdatingPromiseInputs<
    InnerValueGeneric,
    KeyGeneric extends PropertyKey,
    StateGeneric extends Readonly<Record<KeyGeneric, MaybePromise<InnerValueGeneric>>>,
> = {
    updateState: (newState: Partial<StateGeneric>) => void;
    stateKey: KeyGeneric;
} & (
    | {
          createPromiseCallback: () => Promise<InnerValueGeneric>;
          promise?: undefined;
      }
    | {
          promise: Promise<InnerValueGeneric>;
          createPromiseCallback?: undefined;
      }
);

export function createStateUpdatingPromiseIfUndefined<
    InnerValueGeneric,
    KeyGeneric extends PropertyKey,
    StateGeneric extends Readonly<Record<KeyGeneric, MaybePromise<InnerValueGeneric>>>,
>(
    inputs: CreateStateUpdatingPromiseInputs<InnerValueGeneric, KeyGeneric, StateGeneric> & {
        state: StateGeneric;
    },
) {
    const {state, stateKey} = inputs;
    const currentValue = state[stateKey];

    if (currentValue === undefined) {
        createStateUpdatingPromise(inputs);
    }
}

function createStateUpdatingPromise<
    InnerValueGeneric,
    KeyGeneric extends PropertyKey,
    StateGeneric extends Readonly<Record<KeyGeneric, MaybePromise<InnerValueGeneric>>>,
>({
    updateState,
    stateKey,
    createPromiseCallback: promiseCallback,
    promise,
}: CreateStateUpdatingPromiseInputs<InnerValueGeneric, KeyGeneric, StateGeneric>) {
    const output = promise ?? promiseCallback();
    // as casts below are required because, even though all the generics agree, TypeScript can't figure that out here
    if (output instanceof Promise) {
        output
            .then((result) => {
                updateState({[stateKey]: result} as Partial<StateGeneric>);
            })
            .catch((thrownError: unknown) => {
                const guaranteedError = ensureError(thrownError);
                updateState({[stateKey]: {error: guaranteedError}} as Partial<StateGeneric>);
            });
    }
    updateState({[stateKey]: output} as Partial<StateGeneric>);
}

export function awaiting<ValueGeneric, FallbackGeneric, CallbackReturnGeneric>(
    input: MaybePromise<ValueGeneric>,
    notResolvedYetFallback: FallbackGeneric,
    resolvedCallback: (resolved: ValueGeneric) => CallbackReturnGeneric,
): CallbackReturnGeneric | FallbackGeneric | Error | undefined {
    if (isPromiseLike(input) || input == undefined) {
        return notResolvedYetFallback;
    } else if (typedHasProperty(input, 'error')) {
        return input.error as Error;
    } else {
        return resolvedCallback(input as ValueGeneric);
    }
}

export function ensureError(input: unknown): Error {
    if (input instanceof Error) {
        return input;
    } else {
        return new Error(extractErrorMessage(input));
    }
}
