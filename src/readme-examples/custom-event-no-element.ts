import {defineTypedEvent} from '..';

export const MyCustomEvent = defineTypedEvent<number>()('myCustomEventName');
