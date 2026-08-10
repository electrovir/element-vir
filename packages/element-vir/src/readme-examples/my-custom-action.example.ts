import {defineTypedCustomEvent} from '../index.js';

export const MyCustomActionEvent = defineTypedCustomEvent<number>()('my-custom-action');
