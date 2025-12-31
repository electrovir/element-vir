import {type MaybePromise} from '@augment-vir/common';

/**
 * Extra options for defining elements. These should be used very rarely.
 *
 * @category Internal
 */
export type DeclarativeElementDefinitionOptions = {
    /**
     * If set to true, state property keys will be allowed to change at run time. Turning this on
     * will greatly reduce type safety and should be avoided.
     */
    allowPolymorphicState: boolean;
    /** An error handler that will be called if render errors are encountered. */
    errorHandler: ((error: Error) => MaybePromise<void>) | undefined;
};

/**
 * Default values for {@link DeclarativeElementDefinitionOptions}.
 *
 * @category Internal
 */
export const defaultDeclarativeElementDefinitionOptions: DeclarativeElementDefinitionOptions = {
    allowPolymorphicState: false,
    errorHandler: undefined,
};
