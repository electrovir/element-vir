import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {type PartInfo, PartType} from '../../lit-exports/all-lit-exports.js';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {defineElement} from '../define-element.js';
import {
    assertIsElementPartInfo,
    extractElement,
    type FullElementPartInfo,
} from './directive-helpers.js';
import {testId} from './test-id.directive.js';

function createFakePartInfo(partInfo: {type: PartType; element?: Element; host?: unknown}) {
    return {
        type: partInfo.type,
        element: partInfo.element,
        options:
            'host' in partInfo
                ? {
                      host: partInfo.host,
                  }
                : undefined,
    } as PartInfo;
}

describe('directive helpers', () => {
    it('throws when an element-binding directive is used in child position', async () => {
        await assert.throws(
            async () => {
                await testWeb.render(html`
                    <div>${testId('this-should-not-work')}</div>
                `);
            },
            {
                matchMessage: 'directive can only be attached directly to an element',
            },
        );
    });

    it('names the failing directive after the attribute name and the host element', async () => {
        const HostElement = defineElement()({
            tagName: 'directive-helpers-host-element',
            render() {
                return html`
                    <div>${testId('this-should-not-work')}</div>
                `;
            },
        });

        await assert.throws(
            async () => {
                await testWeb.render(html`
                    <${HostElement}></${HostElement}>
                `);
            },
            {
                matchMessage:
                    'data-test-id directive can only be attached directly to an element: in directive-helpers-host-element.',
                matchConstructor: Error,
            },
        );
    });

    it('extracts the exact element instance from an element part', () => {
        const element = document.createElement('div');

        assert.strictEquals(
            extractElement(
                createFakePartInfo({
                    type: PartType.ELEMENT,
                    element,
                }),
                'my-directive',
            ),
            element,
        );
    });

    it('omits the host suffix when the host is missing', () => {
        assert.throws(
            () =>
                assertIsElementPartInfo(
                    createFakePartInfo({
                        type: PartType.CHILD,
                    }),
                    'my-directive',
                ),
            {
                matchMessage: 'my-directive directive can only be attached directly to an element.',
                matchConstructor: Error,
            },
        );
    });

    it('omits the host suffix when the host is not an element', () => {
        assert.throws(
            () =>
                assertIsElementPartInfo(
                    createFakePartInfo({
                        type: PartType.CHILD,
                        host: {
                            notAnElement: true,
                        },
                    }),
                    'my-directive',
                ),
            {
                matchMessage: 'my-directive directive can only be attached directly to an element.',
            },
        );
    });

    it('includes the lowercase host tag name in the failure message', () => {
        const host = document.createElement('section');

        assert.throws(
            () =>
                assertIsElementPartInfo(
                    createFakePartInfo({
                        type: PartType.CHILD,
                        host,
                    }),
                    'my-directive',
                ),
            {
                matchMessage:
                    'my-directive directive can only be attached directly to an element: in section.',
            },
        );
    });

    it('rejects every non-element part type', () => {
        [
            PartType.ATTRIBUTE,
            PartType.BOOLEAN_ATTRIBUTE,
            PartType.CHILD,
            PartType.EVENT,
            PartType.PROPERTY,
        ].forEach((partType) => {
            assert.throws(() =>
                assertIsElementPartInfo(
                    createFakePartInfo({
                        type: partType,
                    }),
                    'my-directive',
                ),
            );
        });
    });

    it('does not throw for an element part and narrows its type', () => {
        const partInfo = createFakePartInfo({
            type: PartType.ELEMENT,
            element: document.createElement('div'),
        });

        assert.tsType(partInfo).equals<PartInfo>();
        assertIsElementPartInfo(partInfo, 'my-directive');
        assert.tsType(partInfo).equals<FullElementPartInfo>();
        assert.tsType(partInfo.element).equals<Element>();
        assert.tsType<FullElementPartInfo['options']['host']>().equals<Element>();
        assert.tsType<FullElementPartInfo['options']['renderBefore']>().equals<Element>();
        assert.tsType<FullElementPartInfo['options']['isConnected']>().equals<boolean>();
    });
});
