import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineElement} from '../../declarative-element/define-element.js';
import {css} from './vir-css.js';

function collapseWhitespace(value: string) {
    return value.trim().replace(/\s+/g, ' ');
}

const VirCssTestChild = defineElement()({
    tagName: 'vir-css-test-child',
    render() {
        return '';
    },
});

describe(css.name, () => {
    it('returns a CSSResult with cssText', () => {
        const result = css`
            :host {
                color: red;
            }
        `;
        assert.isString(result.cssText);
        assert.strictEquals(result.cssText.includes('color: red'), true);
    });

    it('interpolates an element definition as a tag name selector', () => {
        const result = css`
            ${VirCssTestChild} {
                color: blue;
            }
        `;
        assert.strictEquals(result.cssText.includes('vir-css-test-child'), true);
    });

    it('interpolates a number value', () => {
        const result = css`
            :host {
                width: ${42}px;
            }
        `;
        assert.strictEquals(result.cssText.includes('42px'), true);
    });

    it('interpolates another CSSResult', () => {
        const inner = css`
            background-color: pink;
        `;
        const outer = css`
            :host {
                ${inner};
            }
        `;
        assert.strictEquals(outer.cssText.includes('pink'), true);
    });

    it('produces cssText with the tag name written inline and no remaining values', () => {
        const result = css`
            ${VirCssTestChild} {
                color: blue;
            }
        `;
        assert.strictEquals(
            collapseWhitespace(result.cssText),
            'vir-css-test-child { color: blue; }',
        );
    });

    it('interpolates a tag name inside a nested selector', () => {
        const result = css`
            :host {
                & ${VirCssTestChild} {
                    color: blue;
                }
            }
        `;
        assert.strictEquals(
            collapseWhitespace(result.cssText),
            ':host { & vir-css-test-child { color: blue; } }',
        );
    });

    it('interpolates a tag name in a property value position', () => {
        const result = css`
            content: '${VirCssTestChild}';
        `;
        assert.strictEquals(collapseWhitespace(result.cssText), "content: 'vir-css-test-child';");
    });

    it('reuses the same style sheet across calls at the same template literal site', () => {
        function build() {
            return css`
                ${VirCssTestChild} {
                    color: green;
                }
            `;
        }
        const separateSite = css`
            ${VirCssTestChild} {
                color: green;
            }
        `;

        assert.isDefined(build().styleSheet);
        assert.strictEquals(build().styleSheet, build().styleSheet);
        /** The style sheet cache is keyed by template strings identity, not by cssText. */
        assert.strictEquals(
            collapseWhitespace(build().cssText),
            collapseWhitespace(separateSite.cssText),
        );
        assert.notStrictEquals(build().styleSheet, separateSite.styleSheet);
    });

    it('throws for interpolated strings', () => {
        assert.throws(
            () => {
                // @ts-expect-error: css rejects interpolated strings
                const interpolatedString: number = 'red';

                css`
                    color: ${interpolatedString};
                `;
            },
            {
                matchMessage: "Value passed to 'css' function must be a 'css' function result",
            },
        );
    });
});
