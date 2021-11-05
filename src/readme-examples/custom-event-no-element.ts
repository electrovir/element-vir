import {defineCustomEvent} from '..';

export const MyCustomEvent = defineCustomEvent<'myCustomEventName', number>('myCustomEventName');
