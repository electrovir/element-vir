import {check} from '@augment-vir/assert';
import {extractErrorMessage, type PartialWithUndefined} from '@augment-vir/common';
import {type AsyncProp} from './async-prop.js';

/**
 * Options for {@link renderAsync}.
 *
 * @category Internal
 */
export type RenderAsyncOptions = PartialWithUndefined<{
    /**
     * When set to `true`, uses `lastResolvedValue` instead of `value` from the async prop. This is
     * useful when you want to keep showing the last resolved value while a new promise is pending.
     */
    useLastResolvedValue: boolean;
}>;

/**
 * Properties from AsyncProp used by {@link renderAsync}.
 *
 * @category Internal
 */
export type RenderAsyncPropInput<T> = Pick<AsyncProp<T, any>, 'value' | 'lastResolvedValue'>;

/**
 * Given a {@link AsyncProp} instance, call and return the output of the `resolutionRender` parameter
 * once the {@link AsyncProp} has been resolved, call and return the output of the `errorRender`
 * parameter if the {@link AsyncProp} errored out, return the `fallback` parameter in all other
 * cases.
 *
 * This is the overload for when `resolutionRender` and `errorRender` are both provided.
 *
 * @category Async
 */
export function renderAsync<
    T,
    FallbackResult,
    ResolutionRenderResult = never,
    ErrorRenderResult = never,
>(
    asyncProp: RenderAsyncPropInput<T>,
    fallback: FallbackResult,
    resolutionRender: (resolved: Awaited<T>) => ResolutionRenderResult,
    errorRender: (error: Error) => ErrorRenderResult,
    options?: RenderAsyncOptions,
): FallbackResult | ResolutionRenderResult | ErrorRenderResult;
/**
 * Given a {@link AsyncProp} instance, call and return the output of the `resolutionRender` parameter
 * once the {@link AsyncProp} has been resolved, call and return the output of the `errorRender`
 * parameter if the {@link AsyncProp} errored out, return the `fallback` parameter in all other
 * cases.
 *
 * This is the overload for when `resolutionRender` is provided but `errorRender` is not.
 *
 * @category Async
 */
export function renderAsync<T, FallbackResult, ResolutionRenderResult = never>(
    asyncProp: RenderAsyncPropInput<T>,
    fallback: FallbackResult,
    resolutionRender: (resolved: Awaited<T>) => ResolutionRenderResult,
    errorRender?: undefined,
    options?: RenderAsyncOptions,
): FallbackResult | ResolutionRenderResult | string;
/**
 * Given a {@link AsyncProp} instance, call and return the output of the `resolutionRender` parameter
 * once the {@link AsyncProp} has been resolved, call and return the output of the `errorRender`
 * parameter if the {@link AsyncProp} errored out, return the `fallback` parameter in all other
 * cases.
 *
 * This is the overload for when `resolutionRender` is not provided but `errorRender` is.
 *
 * @category Async
 */
export function renderAsync<T, FallbackResult, ErrorRenderResult = never>(
    asyncProp: RenderAsyncPropInput<T>,
    fallback: FallbackResult,
    resolutionRender: undefined,
    errorRender: (error: Error) => ErrorRenderResult,
    options?: RenderAsyncOptions,
): FallbackResult | Awaited<T> | ErrorRenderResult;
/**
 * Given a {@link AsyncProp} instance, call and return the output of the `resolutionRender` parameter
 * once the {@link AsyncProp} has been resolved, call and return the output of the `errorRender`
 * parameter if the {@link AsyncProp} errored out, return the `fallback` parameter in all other
 * cases.
 *
 * This is the overload for when neither `resolutionRender` or `errorRender` are provided.
 *
 * @category Async
 */
export function renderAsync<T, FallbackResult>(
    asyncProp: RenderAsyncPropInput<T>,
    fallback: FallbackResult,
    resolutionRender?: undefined,
    errorRender?: undefined,
    options?: RenderAsyncOptions,
): FallbackResult | Awaited<T> | string;
/**
 * Given a {@link AsyncProp} instance, call and return the output of the `resolutionRender` parameter
 * once the {@link AsyncProp} has been resolved, call and return the output of the `errorRender`
 * parameter if the {@link AsyncProp} errored out, return the `fallback` parameter in all other
 * cases.
 *
 * This is the full function definition and implementation.
 *
 * @category Async
 */
// eslint-disable-next-line @virmator/prefer-params-object
export function renderAsync<
    T,
    FallbackResult,
    ResolutionRenderResult = never,
    ErrorRenderResult = never,
>(
    asyncProp: RenderAsyncPropInput<T>,
    /** This value will be rendered if the async prop has not settled yet. */
    fallback: FallbackResult,
    resolutionRender?: ((resolved: Awaited<T>) => ResolutionRenderResult) | undefined,
    errorRender?: ((error: Error) => ErrorRenderResult) | undefined,
    options: RenderAsyncOptions = {},
): FallbackResult | Awaited<T> | ResolutionRenderResult | string | ErrorRenderResult {
    const asyncPropValue = options.useLastResolvedValue
        ? asyncProp.lastResolvedValue
        : asyncProp.value;
    if (asyncPropValue instanceof Error) {
        const errorResult: string | ErrorRenderResult = errorRender
            ? errorRender(asyncPropValue)
            : extractErrorMessage(asyncPropValue);
        return errorResult as any;
    } else if (
        check.isPromiseLike(asyncPropValue) ||
        (options.useLastResolvedValue && asyncPropValue === undefined)
    ) {
        const fallbackResult: FallbackResult = fallback;
        return fallbackResult as any;
    } else {
        const resolutionResult: ResolutionRenderResult | Awaited<T> = resolutionRender
            ? resolutionRender(asyncPropValue as Awaited<T>)
            : (asyncPropValue as Awaited<T>);
        return resolutionResult as any;
    }
}
