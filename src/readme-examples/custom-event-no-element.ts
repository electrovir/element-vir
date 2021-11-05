import {createCustomEvent} from '..';

export const MyCustomEvent = createCustomEvent<'myCustomEventName', number>('myCustomEventName');
