import {defineCustomEvent} from '..';

export const MyCustomEvent = defineCustomEvent<'myCustomEventName', number>('myCustomEventName');
export const MyCustomEvent2 = defineCustomEvent<'myCustomEventName2', number>('myCustomEventName2');
