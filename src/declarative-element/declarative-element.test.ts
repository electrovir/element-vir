import {assertTypeOf} from '@augment-vir/browser-testing';
import {StaticDeclarativeElementProperties} from './declarative-element';

describe('StaticDeclarativeElementProperties', () => {
    it('excludes observables in inputsType', () => {
        assertTypeOf<
            StaticDeclarativeElementProperties<
                any,
                {hi: number},
                any,
                any,
                any,
                any,
                any
            >['inputsType']
        >().toEqualTypeOf<Readonly<{hi: number}>>();
    });
});
