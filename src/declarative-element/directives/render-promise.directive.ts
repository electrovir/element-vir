import {ensureError} from '@augment-vir/common';
import {CachedPromise, GetCachedPromiseInput} from '@electrovir/cached-promise';
import {until} from 'lit/directives/until.js';
import {RequireExactlyOne} from 'type-fest';
import {RenderOutput} from '../render-callback';

export type RenderPromiseInput<T> = RequireExactlyOne<{
    promise: Promise<T>;
    resolved: T;
    error: Error;
}>;

export function renderPromise<T>(
    maybePromise: Promise<T> | T,
    renderer: (input: RenderPromiseInput<T>) => RenderOutput,
) {
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

export type RenderCachedPromiseInputs<T> = {
    cachedPromise: CachedPromise<T>;
    render: (input: RenderPromiseInput<T>) => RenderOutput;
} & GetCachedPromiseInput<T>;

export function renderCachedPromise<T>({
    cachedPromise,
    render,
    triggers,
    createPromise,
}: RenderCachedPromiseInputs<T>) {
    return renderPromise<T>(
        cachedPromise.get({
            createPromise,
            triggers,
        }),
        render,
    );
}
