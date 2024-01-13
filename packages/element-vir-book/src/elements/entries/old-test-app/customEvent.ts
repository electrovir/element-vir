import {defineTypedEvent} from 'element-vir';

export const MyCustomEvent = defineTypedEvent<number>()('myCustomEventName');
export const MyCustomEvent2 = defineTypedEvent<number>()('myCustomEventName2');
