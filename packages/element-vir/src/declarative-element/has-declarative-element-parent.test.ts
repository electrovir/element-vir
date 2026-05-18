import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from '../template-transforms/vir-html/vir-html.js';
import {defineElement} from './define-element.js';
import {hasDeclarativeElementParent} from './has-declarative-element-parent.js';

const HasParentInner = defineElement()({
    tagName: 'has-parent-inner',
    render() {
        return html`
            <span class="inner-target">inner</span>
        `;
    },
});

const HasParentOuter = defineElement()({
    tagName: 'has-parent-outer',
    render() {
        return html`
            <${HasParentInner}></${HasParentInner}>
        `;
    },
});

describe(hasDeclarativeElementParent.name, () => {
    it('returns false for an element not in any shadow root', async () => {
        const fixture = await testWeb.render(html`
            <div>plain</div>
        `);
        assert.instanceOf(fixture, HTMLDivElement);
        assert.isFalse(hasDeclarativeElementParent(fixture));
    });
    it('returns true for an element inside a declarative element shadow root', async () => {
        const fixture = await testWeb.render(html`
            <${HasParentOuter}></${HasParentOuter}>
        `);
        assert.instanceOf(fixture, HasParentOuter);

        const innerCustomElement = fixture.shadowRoot.querySelector(HasParentInner.tagName);
        assert.instanceOf(innerCustomElement, HasParentInner);
        const innerSpan = innerCustomElement.shadowRoot.querySelector<HTMLElement>('.inner-target');
        assert.instanceOf(innerSpan, HTMLSpanElement);
        assert.isTrue(hasDeclarativeElementParent(innerSpan));
    });
    it('recurses up through a non-declarative shadow host to find a declarative ancestor', async () => {
        const fixture = await testWeb.render(html`
            <${HasParentOuter}></${HasParentOuter}>
        `);
        assert.instanceOf(fixture, HasParentOuter);

        /**
         * Attach a plain (non-declarative) shadow root containing a span inside the declarative
         * element's shadow tree, then verify the recursion walks past the non-declarative host to
         * reach the declarative ancestor.
         */
        const intermediateHost = document.createElement('div');
        const intermediateShadow = intermediateHost.attachShadow({
            mode: 'open',
        });
        const deepSpan = document.createElement('span');
        intermediateShadow.append(deepSpan);
        fixture.shadowRoot.append(intermediateHost);

        assert.isTrue(hasDeclarativeElementParent(deepSpan));
    });
});
