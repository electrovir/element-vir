export type InputsMap = Record<string, unknown>;

export type FunctionalElementInput<InputsGeneric extends InputsMap> = {
    inputName: keyof InputsGeneric;
};
