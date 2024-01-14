import {assert, fixture as renderFixture} from '@open-wc/testing';
import Color from 'colorjs.io';
import {html} from 'element-vir';
import {assertInstanceOf, assertThrows} from 'run-time-assertions';
import {rgbCssColorFormat} from '../styles/color';
import {ColorTypeEnum, extractIconColor} from './icon-color.test-helper';
import {createColoredIcon} from './icon-svg';
import {Element24Icon} from './icon-svgs/element-24.icon';

describe(createColoredIcon.name, () => {
    it('fails if a given color is invalid', () => {
        assertThrows(() =>
            createColoredIcon(Element24Icon, {'vira-icon-fill-color': '" onclick="doThing()"'}),
        );
    });

    it('renders as a colored SVG', async () => {
        const testColor = new Color('purple');
        const coloredIcon = createColoredIcon(Element24Icon, {
            'vira-icon-stroke-color': testColor.toString({format: rgbCssColorFormat}),
        });
        const rendered = await renderFixture(html`
            ${coloredIcon.svgTemplate}
        `);
        const pathElement = rendered.querySelector('path');
        assertInstanceOf(pathElement, SVGPathElement);

        const appliedColor = extractIconColor(pathElement, ColorTypeEnum.Stroke);

        assert.strictEqual(appliedColor, testColor.toString({format: rgbCssColorFormat}));
    });
});
