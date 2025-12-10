import {isNotNoUpdate, type AsyncValue} from 'observavir';

/**
 * Maps an async value to a new async value.
 *
 * @category Util
 */
export function mapAsyncValue<const OriginalValue, const MappedValue>(
    asyncValue: AsyncValue<OriginalValue>,
    mapper: (value: NoInfer<OriginalValue>) => MappedValue,
): AsyncValue<MappedValue> {
    if (asyncValue instanceof Error) {
        return asyncValue;
    } else if (asyncValue instanceof Promise) {
        return asyncValue.then((value) => {
            const mapped = mapper(value);

            if (isNotNoUpdate(mapped)) {
                return mapped;
            } else {
                throw new Error('Cannot map to no update.');
            }
        });
    } else {
        const mapped = mapper(asyncValue);

        if (isNotNoUpdate(mapped)) {
            return mapped;
        } else {
            throw new Error('Cannot map to no update.');
        }
    }
}
