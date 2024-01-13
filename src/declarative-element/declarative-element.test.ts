import {assertTypeOf} from 'run-time-assertions';
import {CustomElementTagName} from './custom-tag-name';
import {DeclarativeElement, StaticDeclarativeElementProperties} from './declarative-element';
import {BaseCssPropertyName} from './properties/css-properties';
import {EventsInitMap} from './properties/element-events';
import {PropertyInitMapBase} from './properties/element-properties';

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
        >().toEqualTypeOf<{hi: number}>();
    });
});

describe(DeclarativeElement.name, () => {
    it('includes all needed declarative element properties', () => {
        assertTypeOf<typeof DeclarativeElement>().toMatchTypeOf<
            StaticDeclarativeElementProperties<
                CustomElementTagName,
                PropertyInitMapBase,
                PropertyInitMapBase,
                EventsInitMap,
                BaseCssPropertyName<CustomElementTagName>,
                BaseCssPropertyName<CustomElementTagName>,
                ReadonlyArray<string>
            >
        >();
    });
});
