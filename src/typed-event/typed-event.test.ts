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

        expect(newValidEvent.detail).toBe(5);

        expect(myCustomTypedEvent.type).toBe(eventTypeName);
        expect(newValidEvent.type).toBe(eventTypeName);
    });
});
