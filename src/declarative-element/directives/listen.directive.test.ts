import {defineTypedEvent} from '../../index';
import {listen} from './listen.directive';

function genericListen<EventTypeName extends keyof HTMLElementEventMap>(
    eventName: EventTypeName,
    callback: (event: HTMLElementEventMap[EventTypeName]) => void,
) {}

function main() {
    const MyCustomEvent = defineTypedEvent<number>()('my-custom-event');
    listen(MyCustomEvent, (event) => {
        const properNumber: number = event.detail;
        // @ts-expect-error
        const notNumber: string = event.detail;
    });

    genericListen('click', (event) => {
        const innerEvent: MouseEvent = event;
    });

    listen('click', (event) => {
        const innerEvent: MouseEvent = event;
    });

    // need to extract the types from here
    (({}) as HTMLInputElement).addEventListener('click', (event) => {
        const innerEvent: MouseEvent = event;
    });
}
