import {ensureError} from '@augment-vir/common';
import {CachedPromise, GetCachedPromiseInput} from '@electrovir/cached-promise';
import {until} from 'lit/directives/until.js';
import {RequireExactlyOne} from 'type-fest';
import {RequireNonVoidReturn} from '../../augments/type';

export type RenderPromiseInput<ValueType> = RequireExactlyOne<{
    promise: Promise<ValueType>;
    resolved: ValueType;
    error: Error;
}>;

export type RenderPromiseRenderer<ValueType, RenderOutput> = RequireNonVoidReturn<
    RenderOutput,
    (input: RenderPromiseInput<ValueType>) => RenderOutput
>;

export function renderPromise<ValueType, RenderOutput>(
    maybePromise: Promise<ValueType> | ValueType,
    renderer: RenderPromiseRenderer<ValueType, RenderOutput>,
) {
    if (typeof renderer === 'string') {
        throw new Error(`Cannot pass string renderer`);
    }

    if (maybePromise instanceof Promise) {
        return until(
            maybePromise
                .catch((error) => {
                    return ensureError(error);
                })
                .then((resolved) => {
                    if (resolved instanceof Error) {
                        return renderer({error: resolved});
                    } else {
                        return renderer({resolved});
                    }
                }),
            renderer({promise: maybePromise}),
        );
    } else {
        return renderer({resolved: maybePromise});
    }
}

export type RenderCachedPromiseInputs<ValueType, RenderOutput> = {
    cachedPromise: CachedPromise<ValueType>;
    render: RenderPromiseRenderer<ValueType, RenderOutput>;
} & GetCachedPromiseInput<ValueType>;

export function renderCachedPromise<ValueType, RenderOutput>({
    cachedPromise,
    render,
    triggers,
    createPromise,
}: RenderCachedPromiseInputs<ValueType, RenderOutput>) {
    return renderPromise<ValueType, RenderOutput>(
        cachedPromise.get({
            createPromise,
            triggers,
        }),
        render,
    );
}
