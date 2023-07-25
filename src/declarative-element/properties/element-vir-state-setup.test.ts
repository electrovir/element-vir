import {assertTypeOf} from '@augment-vir/browser-testing';
import {ElementVirStateSetup, FlattenElementVirStateSetup} from './element-vir-state-setup';

describe('FlattenElementVirPropSetup', () => {
    it('allows union types', () => {
        type Original = {
            input: string;
            maybeSetup: string | ElementVirStateSetup<RegExp>;
        };

        type Flattened = FlattenElementVirStateSetup<Original>;

        assertTypeOf<Flattened>().toEqualTypeOf<{
            input: string;
            maybeSetup: string | RegExp;
        }>();
    });
    it('allows non-union types', () => {
        type Original = {
            input: string;
            maybeSetup: ElementVirStateSetup<RegExp>;
        };

        type Flattened = FlattenElementVirStateSetup<Original>;

        assertTypeOf<Flattened>().toEqualTypeOf<{
            input: string;
            maybeSetup: RegExp;
        }>();
    });
});
