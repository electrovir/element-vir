/** For some reason these aren't defined in lit's types already. */
export type ExtraPartInfoProperties = {
    element: HTMLElement;
    options: {
        host: HTMLElement;
        renderBefore: HTMLElement;
        isConnected: boolean;
    };
};
