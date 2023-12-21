import {assertTypeOf} from 'run-time-assertions';
import {defineTypedEvent} from '../../index';
import {listen} from './listen.directive';

describe(listen.name, () => {
    it('has proper types', () => {
        const MyCustomEvent = defineTypedEvent<number>()('my-custom-event');
        listen(MyCustomEvent, (event) => {
            assertTypeOf(event.detail).toEqualTypeOf<number>();
            assertTypeOf(event.detail).not.toMatchTypeOf<string>();
        });

        listen('click', (event) => {
            assertTypeOf(event).toEqualTypeOf<MouseEvent>();
        });

        (({}) as HTMLInputElement).addEventListener('click', (event) => {
            assertTypeOf(event).toEqualTypeOf<MouseEvent>();
        });
    });
});
