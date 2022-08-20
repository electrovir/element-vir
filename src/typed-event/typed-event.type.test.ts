import {listen} from '../declarative-element/directives/listen.directive';
import {defineTypedEvent} from './typed-event';

// this shouldn't actually be run, it's just used to check types
function main() {
    // @ts-expect-error
    const invalidTypeInput = defineTypedEvent<Record<string, string>>()('');

    const validCustomEvent = defineTypedEvent<Record<string, string>>()(
        'my-valid-custom-typed-event',
    );

    listen(validCustomEvent, (event) => {
        // event.detail should retain its type information
        const value: Record<string, string> = event.detail;
    });

    // @ts-expect-error
    const invalidConstructorParameterInput = new validCustomEvent(4);
    // @ts-expect-error
    const invalidUndefinedInput = new validCustomEvent(undefined);

    const validCustomEventInstance = new validCustomEvent({propName: 'valueName'});
}
