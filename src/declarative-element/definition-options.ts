export const IgnoreInputsNotBeenSetBeforeRenderWarningSymbol = Symbol(
    'key for ignoring inputs not having been set yet',
);

export type DeclarativeElementDefinitionOptions = {
    // this cannot be set externally because we don't export this symbol outside of the package
    [IgnoreInputsNotBeenSetBeforeRenderWarningSymbol]: boolean;
};

export const defaultDeclarativeElementDefinitionOptions: DeclarativeElementDefinitionOptions = {
    [IgnoreInputsNotBeenSetBeforeRenderWarningSymbol]: true,
};
