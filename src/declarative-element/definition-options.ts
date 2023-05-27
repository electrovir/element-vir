export const IgnoreInputsNotBeenSetBeforeWarningSymbol = Symbol(
    'key for ignoring inputs not having been set yet',
);

export type DeclarativeElementDefinitionOptions = {
    /** For internal use only. */
    [IgnoreInputsNotBeenSetBeforeWarningSymbol]: boolean;
    /**
     * If set to true, state property keys will be allowed to change at run time. Turning this on
     * will greatly reduce type safety and should be avoided at all costs.
     */
    allowPolymorphicState: boolean;
};

export const defaultDeclarativeElementDefinitionOptions: DeclarativeElementDefinitionOptions = {
    [IgnoreInputsNotBeenSetBeforeWarningSymbol]: true,
    allowPolymorphicState: false,
};
