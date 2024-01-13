export type DeclarativeElementDefinitionOptions = {
    /** For internal use only. */
    ignoreUnsetInputs: boolean;
    /**
     * If set to true, state property keys will be allowed to change at run time. Turning this on
     * will greatly reduce type safety and should be avoided.
     */
    allowPolymorphicState: boolean;
};

export const defaultDeclarativeElementDefinitionOptions: DeclarativeElementDefinitionOptions = {
    ignoreUnsetInputs: true,
    allowPolymorphicState: false,
};
