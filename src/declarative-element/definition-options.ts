export const IgnoreInputsNotBeenSetBeforeRenderWarningSymbol = Symbol(
    'key for ignoring inputs not having been set yet',
);

export type DeclarativeElementDefinitionOptions = {
    /** For internal use only. */
    [IgnoreInputsNotBeenSetBeforeRenderWarningSymbol]: boolean;
    /**
     * If set to true, state properties keys will be allowed to change at run time. Turning this on
     * will greatly reduce type safety and should be avoided at all costs.
     */
    allowPolymorphicState: boolean;
};

export const defaultDeclarativeElementDefinitionOptions: DeclarativeElementDefinitionOptions = {
    [IgnoreInputsNotBeenSetBeforeRenderWarningSymbol]: true,
    allowPolymorphicState: false,
};
