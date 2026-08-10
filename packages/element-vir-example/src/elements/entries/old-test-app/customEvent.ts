import {defineTypedCustomEvent} from 'element-vir';

export const MyCustomEvent = defineTypedCustomEvent<number>()('myCustomEventName');
export const MyCustomEvent2 = defineTypedCustomEvent<number>()('myCustomEventName2');
