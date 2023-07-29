import {randomString} from '@augment-vir/browser';
import {assertTypeOf, typedAssertInstanceOf} from '@augment-vir/browser-testing';
import {assert, fixture as renderFixture} from '@open-wc/testing';
import {html} from '../../template-transforms/vir-html/vir-html';
import {defineElementNoInputs} from '../define-element-no-inputs';
import {perInstance} from './per-instance';

describe(perInstance.name, () => {
    it('allows host to be assigned to instance type', async () => {
        const MyElement = defineElementNoInputs({
            tagName: `some-tag-${randomString()}`,
            stateInitStatic: {
                myPerInstanceProp: perInstance(() => ({stuff: 'hi'})),
            },
            renderCallback({state}) {
                assertTypeOf(state.myPerInstanceProp).toEqualTypeOf<{stuff: string}>();
                return state.myPerInstanceProp.stuff;
            },
        });

        const fixture = await renderFixture(
            html`
                <div>
                    <${MyElement}></${MyElement}>
                    <${MyElement}></${MyElement}>
                </div>
            `,
        );

        typedAssertInstanceOf(fixture, HTMLDivElement);

        const elements = Array.from(fixture.querySelectorAll(MyElement.tagName));

        assert.lengthOf(elements, 2);

        typedAssertInstanceOf(elements[0], MyElement);
        typedAssertInstanceOf(elements[1], MyElement);
        assert.isFalse(
            elements[0].instanceState.myPerInstanceProp ===
                elements[1].instanceState.myPerInstanceProp,
        );
    });
});
