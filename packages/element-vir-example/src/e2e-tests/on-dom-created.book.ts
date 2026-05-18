import {defineElement, html, onDomCreated, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const OnDomCreatedElement = defineElement()({
    tagName: 'on-dom-created-element',
    state() {
        return {
            createdTagName: '' as string,
        };
    },
    testIds: [
        'target',
        'report',
    ],
    render({state, updateState, testIds}) {
        return html`
            <div
                ${testId(testIds.target)}
                ${onDomCreated((element) => {
                    updateState({
                        createdTagName: element.tagName.toLowerCase(),
                    });
                })}
            >
                target
            </div>
            <span ${testId(testIds.report)}>${state.createdTagName}</span>
        `;
    },
});

export const onDomCreatedTest = await defineBookTest(
    'on dom created',
    {
        render() {
            return html`
                <${OnDomCreatedElement}></${OnDomCreatedElement}>
            `;
        },
    },
    {
        async 'onDomCreated fires once with the actual element'({e2eUtil, page}) {
            await e2eUtil
                .expect(page.getByTestId(OnDomCreatedElement.testIds.report))
                .toHaveText('div');
        },
    },
);
