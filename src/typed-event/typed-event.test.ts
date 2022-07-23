import {assert} from '@open-wc/testing';
import {defineTypedEvent} from './typed-event';

describe(defineTypedEvent.name, () => {
    it('should create the correct types', () => {
        const eventTypeName = 'my-custom-typed-event';

        const myCustomTypedEvent = defineTypedEvent<number>()(eventTypeName);
        // @ts-expect-error
        const newEventWrongType = new myCustomTypedEvent('not a number');
        // @ts-expect-error
        const typeNotAccepted = new myCustomTypedEvent(eventTypeName);

        const newValidEvent = new myCustomTypedEvent(5);

        assert.strictEqual(newValidEvent.detail, 5);

        assert.strictEqual(myCustomTypedEvent.type, eventTypeName);
        assert.strictEqual(newValidEvent.type, eventTypeName);
    });
});
