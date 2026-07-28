import {assert, assertWrap, waitUntil} from '@augment-vir/assert';
import {collapseWhiteSpace} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {extractElementText, queryThroughShadow} from '@augment-vir/web';
import {MyApp} from '../readme-examples/my-app.example.js';
import {MyCustomActionEvent} from '../readme-examples/my-custom-action.example.js';
import {
    defineTransformedVirElement,
    defineVerifiedVirElement,
    defineVirElement,
    type VirTagName,
} from '../readme-examples/my-custom-define.example.js';
import {MySimple} from '../readme-examples/my-simple.example.js';
import {MyWithAssignment} from '../readme-examples/my-with-assignment.example.js';
import {MyWithAsyncProp} from '../readme-examples/my-with-async-prop.example.js';
import {MyWithAssignmentCleanupCallback} from '../readme-examples/my-with-cleanup-callback.example.js';
import {MyWithCssVars} from '../readme-examples/my-with-css-vars.example.js';
import {
    MyWithCustomEventDispatch,
    MyWithCustomEvents,
} from '../readme-examples/my-with-custom-events.example.js';
import {MyWithEventListening} from '../readme-examples/my-with-event-listening.example.js';
import {MyWithEvents} from '../readme-examples/my-with-events.example.js';
import {MyWithHostClassDefinition} from '../readme-examples/my-with-host-class-definition.example.js';
import {MyWithHostClassUsage} from '../readme-examples/my-with-host-class-usage.example.js';
import {MyWithInputs} from '../readme-examples/my-with-inputs.example.js';
import {MyWithOnDomCreated} from '../readme-examples/my-with-on-dom-created.example.js';
import {MyWithOnResize} from '../readme-examples/my-with-on-resize.example.js';
import {MyWithRenderIf} from '../readme-examples/my-with-render-if.example.js';
import {MyWithStylesAndInterpolatedSelector} from '../readme-examples/my-with-styles-and-interpolated-selector.example.js';
import {MyWithStyles} from '../readme-examples/my-with-styles.example.js';
import {MyWithUpdateState} from '../readme-examples/my-with-update-state.example.js';
import {html} from '../template-transforms/vir-html/vir-html.js';

function shadowText(element: Readonly<Element>) {
    return collapseWhiteSpace(assertWrap.isDefined(element.shadowRoot).textContent || '');
}

/**
 * Several readme examples only report their behavior through `console.info`, so capturing it is the
 * only way to observe them.
 */
function captureConsoleInfo() {
    const originalConsoleInfo = console.info;
    const calls: unknown[][] = [];

    console.info = (...args: unknown[]) => {
        calls.push(args);
    };

    return {
        calls,
        restore() {
            console.info = originalConsoleInfo;
        },
    };
}

describe('readme examples', () => {
    it('renders my-simple', async () => {
        const instance = await testWeb.renderElement(MySimple);

        assert.strictEquals(MySimple.tagName, 'my-simple');
        assert.strictEquals(shadowText(instance), 'Hello there!');
        assert.instanceOf(queryThroughShadow(instance, 'span'), HTMLSpanElement);
    });

    it('renders my-app with a nested my-simple instance', async () => {
        const instance = await testWeb.renderElement(MyApp);

        const header = assertWrap.instanceOf(
            queryThroughShadow(instance, 'h1'),
            HTMLHeadingElement,
        );
        assert.strictEquals(extractElementText(header), 'My App');

        const child = assertWrap.instanceOf(queryThroughShadow(instance, MySimple), MySimple);
        assert.strictEquals(shadowText(child), 'Hello there!');
    });

    it('applies my-with-styles styles', async () => {
        const instance = await testWeb.renderElement(MyWithStyles);

        const spans = queryThroughShadow(instance, 'span', {
            all: true,
        });
        assert.isLengthExactly(spans, 2);

        assert.strictEquals(window.getComputedStyle(instance).display, 'flex');
        assert.strictEquals(window.getComputedStyle(instance).flexDirection, 'column');
        assert.strictEquals(window.getComputedStyle(spans[0]).marginTop, '0px');
        assert.strictEquals(window.getComputedStyle(spans[1]).marginTop, '16px');
    });

    it('interpolates element definitions into css as their tag names', async () => {
        assert.isTrue(
            MyWithStylesAndInterpolatedSelector.styles.cssText.includes(MySimple.tagName),
            MyWithStylesAndInterpolatedSelector.styles.cssText,
        );

        const instance = await testWeb.renderElement(MyWithStylesAndInterpolatedSelector);
        const child = assertWrap.instanceOf(queryThroughShadow(instance, MySimple), MySimple);

        assert.strictEquals(window.getComputedStyle(child).backgroundColor, 'rgb(0, 0, 255)');
    });

    it('renders my-with-inputs from its inputs', async () => {
        const instance = await testWeb.renderElement(MyWithInputs, {
            email: 'me@example.com',
            username: 'me',
        });

        assert.strictEquals(shadowText(instance), 'Hello there me!');

        instance.assignInputs({
            email: 'you@example.com',
            username: 'you',
        });
        await waitUntil.strictEquals('Hello there you!', () => shadowText(instance));
    });

    it('updates my-with-update-state state on click', async () => {
        const instance = await testWeb.renderElement(MyWithUpdateState);

        assert.strictEquals(shadowText(instance), 'Hello there dev!');
        assert.deepEquals(
            {
                ...instance.instanceState,
            },
            {
                email: undefined,
                username: 'dev',
            },
        );

        await testWeb.click(assertWrap.isDefined(queryThroughShadow(instance, 'span')));

        /** The example's new username value itself ends in `!`, before the template's own `!`. */
        await waitUntil.strictEquals('Hello there new name!!', () => shadowText(instance));
        assert.strictEquals(instance.instanceState.username, 'new name!');
    });

    it('assigns inputs to a child element in my-with-assignment', async () => {
        const instance = await testWeb.renderElement(MyWithAssignment);

        const child = assertWrap.instanceOf(
            queryThroughShadow(instance, MyWithInputs),
            MyWithInputs,
        );

        assert.deepEquals(
            {
                ...child.instanceInputs,
            },
            {
                email: 'user@example.com',
                username: 'user',
            },
        );
        assert.strictEquals(shadowText(child), 'Hello there user!');
    });

    it('runs the my-with-cleanup-callback cleanup on removal', async () => {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const originalSetInterval = window.setInterval;
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const originalClearInterval = window.clearInterval;
        const clearedIntervalIds: unknown[] = [];
        const fakeIntervalId = 987_654;

        // @ts-expect-error: the stub omits the overloads that these tests never reach
        window.setInterval = () => fakeIntervalId;
        window.clearInterval = (id) => {
            clearedIntervalIds.push(id);
        };

        try {
            const instance = await testWeb.renderElement(MyWithAssignmentCleanupCallback);

            assert.strictEquals(instance.instanceState.intervalId, fakeIntervalId);
            assert.isEmpty([...clearedIntervalIds]);

            instance.remove();

            assert.deepEquals(clearedIntervalIds, [fakeIntervalId]);
        } finally {
            window.setInterval = originalSetInterval;
            window.clearInterval = originalClearInterval;
        }
    });

    it('names my-with-events element events after the tag name', () => {
        assert.deepEquals(
            {
                logoutClick: MyWithEvents.events.logoutClick.type,
                randomNumber: MyWithEvents.events.randomNumber.type,
            },
            {
                logoutClick: 'my-with-events-logoutClick',
                randomNumber: 'my-with-events-randomNumber',
            },
        );
    });

    it('dispatches my-with-events events from the host', async () => {
        const instance = await testWeb.renderElement(MyWithEvents);
        const caught: {type: string; detail: unknown}[] = [];

        instance.addEventListener(MyWithEvents.events.logoutClick.type, (event) => {
            caught.push({
                type: event.type,
                detail: (event as CustomEvent).detail,
            });
        });
        instance.addEventListener(MyWithEvents.events.randomNumber.type, (event) => {
            caught.push({
                type: event.type,
                detail: (event as CustomEvent).detail,
            });
        });

        const buttons = queryThroughShadow(instance, 'button', {
            all: true,
        });
        assert.isLengthExactly(buttons, 2);

        await testWeb.click(buttons[0]);
        await testWeb.click(buttons[1]);

        assert.isLengthExactly(caught, 2);
        assert.deepEquals(
            caught.map((event) => event.type),
            [
                'my-with-events-logoutClick',
                'my-with-events-randomNumber',
            ],
        );
        /** A `void` event detail becomes `null`, per the native `CustomEvent` constructor. */
        assert.isNull(caught[0].detail);
        assert.isNumber(caught[1].detail);
    });

    it('updates my-with-event-listening state from a child element event', async () => {
        const instance = await testWeb.renderElement(MyWithEventListening);
        const child = assertWrap.instanceOf(
            queryThroughShadow(instance, MyWithEvents),
            MyWithEvents,
        );

        assert.strictEquals(shadowText(instance), 'My App -1');

        const details: number[] = [];
        child.addEventListener(MyWithEvents.events.randomNumber.type, (event) => {
            details.push((event as CustomEvent<number>).detail);
        });

        const buttons = queryThroughShadow(child, 'button', {
            all: true,
        });
        assert.isLengthExactly(buttons, 2);
        await testWeb.click(buttons[1]);

        assert.isLengthExactly(details, 1);
        const dispatchedNumber = assertWrap.isNumber(details[0]);
        await waitUntil.strictEquals(dispatchedNumber, () => instance.instanceState.myNumber);
        assert.strictEquals(shadowText(instance), `My App ${dispatchedNumber}`);
    });

    it('creates a bubbling, composed typed event', () => {
        const event = new MyCustomActionEvent(42);

        assert.strictEquals(MyCustomActionEvent.type, 'my-custom-action');
        assert.deepEquals(
            {
                bubbles: event.bubbles,
                composed: event.composed,
                detail: event.detail,
                type: event.type,
            },
            {
                bubbles: true,
                composed: true,
                detail: 42,
                type: 'my-custom-action',
            },
        );
    });

    it('catches a custom event dispatched by a child element', async () => {
        const consoleInfo = captureConsoleInfo();

        try {
            const instance = await testWeb.renderElement(MyWithCustomEvents);
            const child = assertWrap.instanceOf(
                queryThroughShadow(instance, MyWithCustomEventDispatch),
                MyWithCustomEventDispatch,
            );
            const caught: unknown[] = [];
            child.addEventListener(MyCustomActionEvent.type, (event) => {
                caught.push((event as CustomEvent<number>).detail);
            });

            await testWeb.click(
                assertWrap.instanceOf(queryThroughShadow(child, 'button'), HTMLButtonElement),
            );

            assert.isLengthExactly(caught, 1);
            const dispatchedNumber = assertWrap.isNumber(caught[0]);
            assert.deepEquals(consoleInfo.calls, [[`Got a number! ${dispatchedNumber}`]]);
        } finally {
            consoleInfo.restore();
        }
    });

    it('only applies automatic host classes when their callback passes', async () => {
        const instance = await testWeb.renderElement(MyWithHostClassDefinition);

        assert.deepEquals(
            {
                ...MyWithHostClassDefinition.hostClasses,
            },
            {
                'my-with-host-class-definition-a': 'my-with-host-class-definition-a',
                'my-with-host-class-definition-automatic':
                    'my-with-host-class-definition-automatic',
            },
        );
        assert.isTrue(
            MyWithHostClassDefinition.styles.cssText.includes(
                ':host(.my-with-host-class-definition-automatic)',
            ),
            MyWithHostClassDefinition.styles.cssText,
        );

        assert.isEmpty([...instance.classList]);

        instance.instanceState.myProp = 'foo';
        await waitUntil.isTrue(() =>
            instance.classList.contains('my-with-host-class-definition-automatic'),
        );
        assert.strictEquals(window.getComputedStyle(instance).color, 'rgb(0, 0, 255)');

        instance.instanceState.myProp = 'hello there';
        await waitUntil.isFalse(() =>
            instance.classList.contains('my-with-host-class-definition-automatic'),
        );
    });

    it('applies a manual host class from a consumer', async () => {
        const instance = await testWeb.renderElement(MyWithHostClassUsage);
        const child = assertWrap.instanceOf(
            queryThroughShadow(instance, MyWithHostClassDefinition),
            MyWithHostClassDefinition,
        );

        assert.deepEquals([...child.classList], ['my-with-host-class-definition-a']);
        assert.strictEquals(window.getComputedStyle(child).color, 'rgb(255, 0, 0)');
    });

    it('sets and reads css vars in my-with-css-vars', async () => {
        assert.deepEquals(
            {
                name: MyWithCssVars.cssVars['my-with-css-vars-my-var'].name.cssText,
                value: MyWithCssVars.cssVars['my-with-css-vars-my-var'].value.cssText,
            },
            {
                name: '--my-with-css-vars-my-var',
                value: 'var(--my-with-css-vars-my-var, blue)',
            },
        );

        const instance = await testWeb.renderElement(MyWithCssVars);

        assert.strictEquals(window.getComputedStyle(instance).color, 'rgb(255, 255, 0)');
    });

    it('defines elements through the wrapped definition functions', () => {
        const PlainVirElement = defineVirElement()({
            tagName: 'vir-readme-plain',
            render() {
                return html`
                    plain
                `;
            },
        });
        const VerifiedVirElement = defineVerifiedVirElement()({
            tagName: 'vir-readme-verified',
            render() {
                return html`
                    verified
                `;
            },
        });

        assert.deepEquals(
            {
                plain: PlainVirElement.tagName,
                verified: VerifiedVirElement.tagName,
            },
            {
                plain: 'vir-readme-plain',
                verified: 'vir-readme-verified',
            },
        );

        assert.throws(
            () => {
                defineVerifiedVirElement()({
                    tagName: 'bad-readme-prefix' as VirTagName,
                    render() {
                        return html`
                            bad
                        `;
                    },
                });
            },
            {
                matchMessage: 'all custom elements must start with "vir-"',
            },
        );
    });

    it('leaves an already prefixed tag name alone in the transform example', () => {
        const TransformedVirElement = defineTransformedVirElement()({
            tagName: 'vir-readme-transformed',
            render() {
                return html`
                    transformed
                `;
            },
        });

        assert.tsType(TransformedVirElement.tagName).equals<'vir-readme-transformed'>();
        assert.strictEquals(TransformedVirElement.tagName, 'vir-readme-transformed');
        assert.isDefined(globalThis.window.customElements.get('vir-readme-transformed'));
        /** The transform also attaches an error handler. */
        assert.isDefined(TransformedVirElement.elementOptions.errorHandler);
    });

    it('fires onDomCreated with the created element', async () => {
        const consoleInfo = captureConsoleInfo();

        try {
            const instance = await testWeb.renderElement(MyWithOnDomCreated);
            const span = assertWrap.isDefined(queryThroughShadow(instance, 'span'));

            /** The directive defers its callback to the next animation frame. */
            assert.isEmpty([...consoleInfo.calls]);
            await waitUntil.isTruthy(() => consoleInfo.calls.length);

            assert.deepEquals(consoleInfo.calls, [[span]]);
        } finally {
            consoleInfo.restore();
        }
    });

    it('fires onResize with the observed element', async () => {
        const consoleInfo = captureConsoleInfo();

        try {
            const instance = await testWeb.renderElement(MyWithOnResize);
            const span = assertWrap.isDefined(queryThroughShadow(instance, 'span'));

            await waitUntil.isTruthy(() => consoleInfo.calls.length);

            const entry = assertWrap.isDefined(consoleInfo.calls[0]?.[0]) as {
                target: Element;
                contentRect: DOMRectReadOnly;
            };
            assert.strictEquals(entry.target, span);
            /**
             * The example's `<span>` is a non-replaced inline element, which `ResizeObserver`
             * always reports as having an empty content rect.
             */
            assert.deepEquals(
                {
                    height: entry.contentRect.height,
                    keys: Object.keys(entry).toSorted(),
                    width: entry.contentRect.width,
                },
                {
                    height: 0,
                    keys: [
                        'contentRect',
                        'target',
                    ],
                    width: 0,
                },
            );
        } finally {
            consoleInfo.restore();
        }
    });

    it('renders conditionally with renderIf', async () => {
        const instance = await testWeb.renderElement(MyWithRenderIf, {
            shouldRender: false,
        });

        assert.strictEquals(shadowText(instance), '');

        instance.assignInputs({
            shouldRender: true,
        });
        await waitUntil.strictEquals("I'm conditionally rendered!", () => shadowText(instance));

        instance.assignInputs({
            shouldRender: false,
        });
        await waitUntil.strictEquals('', () => shadowText(instance));
    });

    it('renders an asyncProp fallback and then its resolved value', async () => {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const originalFetch = window.fetch;
        const fetchedUrls: string[] = [];
        const fetchResolvers: ((response: Response) => void)[] = [];

        window.fetch = (url) => {
            fetchedUrls.push(assertWrap.isString(url));
            return new Promise<Response>((resolve) => {
                fetchResolvers.push(resolve);
            });
        };

        try {
            const instance = await testWeb.renderElement(MyWithAsyncProp, {
                endpoint: 'my-endpoint',
            });

            assert.deepEquals(fetchedUrls, ['/api/my-endpoint']);
            assert.isTrue(shadowText(instance).includes('Loading...'), shadowText(instance));

            assertWrap.isDefined(fetchResolvers[0])(new Response('[1,2,3]'));
            await waitUntil.isTrue(() => shadowText(instance).includes('Got the data:'));
            assert.deepEquals(
                instance.instanceState.data.value,
                [
                    1,
                    2,
                    3,
                ],
            );

            const refreshButton = assertWrap.instanceOf(
                queryThroughShadow(instance, 'button'),
                HTMLButtonElement,
            );
            await testWeb.click(refreshButton);

            assert.deepEquals(fetchedUrls, [
                '/api/my-endpoint',
                '/api/my-endpoint',
            ]);
            assertWrap.isDefined(fetchResolvers[1])(new Response('[4,5]'));
            await waitUntil.deepEquals(
                [
                    4,
                    5,
                ],
                () => instance.instanceState.data.value,
            );
        } finally {
            window.fetch = originalFetch;
        }
    });
});
