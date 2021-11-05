import {createCustomEvent} from '..';

export const MyCustomEvent = createCustomEvent<'myCustomEventName', number>('myCustomEventName');
export const MyCustomEvent2 = createCustomEvent<'myCustomEventName2', number>('myCustomEventName2');
