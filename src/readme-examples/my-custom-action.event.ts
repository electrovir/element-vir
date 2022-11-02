import {defineTypedEvent} from '..';

export const MyCustomActionEvent = defineTypedEvent<number>()('my-custom-action');
