import {assertTypeOf} from 'run-time-assertions';
import {renderIf} from '../../declarative-element/directives/render-if.directive';
import {RenderCallback} from '../../declarative-element/render-callback';
import {classMap} from '../../lit-exports/all-lit-exports';
import {DirectiveOutput, HtmlInterpolation} from './html-interpolation';
import {html} from './vir-html';

describe('HtmlInterpolation', () => {
    it('blocks raw objects', () => {
        assertTypeOf<{something: string}>().not.toMatchTypeOf<HtmlInterpolation>();
        html`
            hello there
            ${
                // @ts-expect-error raw objects are not allowed
                {something: 'hi'}
            }
        `;
        assertTypeOf<{something: string}>().not.toMatchTypeOf<DirectiveOutput>();
    });

    it('blocks symbols', () => {
        assertTypeOf(Symbol('hello')).not.toMatchTypeOf<HtmlInterpolation>();
    });

    /** In order to support directive results, this must also be the case. */
    it('allows empty objects sadly', () => {
        assertTypeOf({} as const).toMatchTypeOf<HtmlInterpolation>();
    });

    it('allows directives', () => {
        assertTypeOf(renderIf(true, 'hi')).toMatchTypeOf<HtmlInterpolation>();
        assertTypeOf(
            classMap({
                disabled: true,
            }),
        ).toMatchTypeOf<HtmlInterpolation>();
        html`
            hello there ${classMap({disabled: true})}
        `;
        assertTypeOf(classMap({disabled: true})).toMatchTypeOf<DirectiveOutput>();
    });

    it('allows function interpolation', () => {
        html`
            <div
                @click=${() => {
                    console.info('you clicked me!');
                }}
            ></div>
        `;
    });

    it('allows vira icon definitions', () => {
        assertTypeOf<
            RenderCallback<
                'vira-icon',
                {
                    fitContainer?: boolean | undefined;
                },
                {},
                {},
                'vira-icon-fit-container',
                `vira-icon-${string}`,
                string[]
            >
        >().toMatchTypeOf<RenderCallback<any, any, any, any, any, any, any>>();
    });
});
