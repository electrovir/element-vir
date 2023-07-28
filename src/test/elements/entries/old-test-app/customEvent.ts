import {defineTypedEvent} from '../../../..';

export const MyCustomEvent = defineTypedEvent<number>()('myCustomEventName');
export const MyCustomEvent2 = defineTypedEvent<number>()('myCustomEventName2');
