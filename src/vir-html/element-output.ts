export type OutputObject<Name extends OutputName> = {
    outputName: Name;
};

export type OutputName = number | symbol | string;
