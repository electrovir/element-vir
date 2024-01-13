import {defineTypedEvent} from '../index';

export const MyCustomActionEvent = defineTypedEvent<number>()('my-custom-action');
