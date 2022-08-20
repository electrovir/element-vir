import {DeclarativeElementDefinition} from './declarative-element';
import {DeclarativeElementInit} from './declarative-element-init';
import {defineElementNoInputs} from './define-element-no-inputs';
import {EventsInitMap} from './element-events';
import {PropertyInitMapBase} from './element-properties';

export function defineElement<InputsGeneric extends PropertyInitMapBase = {}>() {
    return <
        PropertyInitGeneric extends PropertyInitMapBase = {},
        EventsInitGeneric extends EventsInitMap = {},
        HostClassKeys extends string = '',
        CssVarKeys extends string = '',
    >(
        initInput: DeclarativeElementInit<
            InputsGeneric,
            PropertyInitGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        >,
    ): DeclarativeElementDefinition<
        InputsGeneric,
        PropertyInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    > => {
        return defineElementNoInputs(initInput);
    };
}
