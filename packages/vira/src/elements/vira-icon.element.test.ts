import {assert, fixture as renderFixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {setCssVarValue} from 'lit-css-vars';
import {assertInstanceOf} from 'run-time-assertions';
import {StatusSuccess24Icon} from '../icons';
import {ColorTypeEnum, extractIconColor} from '../icons/icon-color.test-helper';
import {viraIconCssVars} from '../icons/icon-css-vars';
import {ViraIcon} from './vira-icon.element';

describe(ViraIcon.tagName, () => {
    async function setupFixture() {
        const fixture = await renderFixture(html`
            <div><${ViraIcon.assign({icon: StatusSuccess24Icon})}></${ViraIcon}></div>
        `);

        assertInstanceOf(fixture, HTMLDivElement);

        const viraIconInstance = fixture.querySelector(ViraIcon.tagName);

        assertInstanceOf(viraIconInstance, ViraIcon);
        const internalSvg = viraIconInstance.shadowRoot.querySelector('circle');
        assertInstanceOf(internalSvg, SVGCircleElement);

        return {
            wrapperDiv: fixture,
            viraIconInstance,
            getColor(colorType: ColorTypeEnum) {
                return extractIconColor(internalSvg, colorType);
            },
        };
    }

    describe('icon with stroke', () => {
        it('defaults to current color value', async () => {
            const {getColor} = await setupFixture();

            /** Default color (black) */
            assert.strictEqual(getColor(ColorTypeEnum.Color), 'rgb(0, 0, 0)');
            assert.strictEqual(getColor(ColorTypeEnum.Fill), 'none');
            assert.strictEqual(getColor(ColorTypeEnum.Stroke), 'rgb(0, 0, 0)');
        });

        it("tracks its parent's color value", async () => {
            const {getColor, wrapperDiv} = await setupFixture();

            wrapperDiv.style.color = 'red';

            assert.strictEqual(getColor(ColorTypeEnum.Color), 'rgb(255, 0, 0)');
            assert.strictEqual(getColor(ColorTypeEnum.Fill), 'none');
            assert.strictEqual(getColor(ColorTypeEnum.Stroke), 'rgb(255, 0, 0)');
        });

        it('follows stroke color CSS var', async () => {
            const {getColor, wrapperDiv} = await setupFixture();

            setCssVarValue({
                forCssVar: viraIconCssVars['vira-icon-stroke-color'],
                onElement: wrapperDiv,
                toValue: 'blue',
            });

            assert.strictEqual(getColor(ColorTypeEnum.Color), 'rgb(0, 0, 0)');
            assert.strictEqual(getColor(ColorTypeEnum.Fill), 'none');
            assert.strictEqual(getColor(ColorTypeEnum.Stroke), 'rgb(0, 0, 255)');
        });

        it('follows fill color CSS var', async () => {
            const {getColor, wrapperDiv} = await setupFixture();

            setCssVarValue({
                forCssVar: viraIconCssVars['vira-icon-fill-color'],
                onElement: wrapperDiv,
                toValue: 'white',
            });

            assert.strictEqual(getColor(ColorTypeEnum.Color), 'rgb(0, 0, 0)');
            assert.strictEqual(getColor(ColorTypeEnum.Fill), 'rgb(255, 255, 255)');
            assert.strictEqual(getColor(ColorTypeEnum.Stroke), 'rgb(0, 0, 0)');
        });
    });
});
