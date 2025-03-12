import type {ArrayElement} from '@augment-vir/common';
import type {IsNever} from 'type-fest';

/**
 * The largest number in this tuple is the largest number of nestings of the same element that
 * `element-vir` will support with types (in runtime it'll support any level of nesting the same
 * element).
 *
 * @category Internal
 */
export type Incrementable = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
];

/**
 * Increments the given number. If an invalid type parameter is given, it is treated as `0` and this
 * will output `1`. If the upper bound of increments has been reached, this will output `never`.
 *
 * @category Internal
 */
export type Increment<T> =
    IsNever<Extract<ArrayElement<Incrementable>, T>> extends true
        ? IsNever<T> extends true
            ? 1
            : never
        : Incrementable extends [any, ...infer Rest]
          ? T extends keyof Rest
              ? Rest[T] extends undefined
                  ? never
                  : Rest[T]
              : 1
          : 1;

/**
 * Decrements the given number. If an invalid type parameter is given, `never` is the output.
 *
 * @category Internal
 */
export type Decrement<T> =
    IsNever<Extract<ArrayElement<Incrementable>, T>> extends true
        ? never
        : T extends keyof Incrementable
          ? [never, ...Incrementable][T]
          : never;
