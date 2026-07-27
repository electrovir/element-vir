/* eslint-disable @typescript-eslint/no-empty-object-type */

import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineElement} from '../../declarative-element/define-element.js';
import {renderIf} from '../../declarative-element/directives/render-if.directive.js';
import {type RenderCallback} from '../../declarative-element/render-callback.js';
import {classMap, ifDefined, type nothing} from '../../lit-exports/all-lit-exports.js';
import {
    type DirectiveOutput,
    type HtmlInterpolation,
    type VerifyHtmlValues,
} from './html-interpolation.js';
import {html} from './vir-html.js';

describe('HtmlInterpolation', () => {
    it('blocks raw objects', () => {
        assert.tsType<{something: string}>().notMatches<HtmlInterpolation>();
        html`
            hello there
            ${{
                // @ts-expect-error raw objects are not allowed
                something: 'hi',
            }}
        `;
        assert.tsType<{something: string}>().notMatches<DirectiveOutput>();
    });

    it('blocks symbols', () => {
        assert.tsType(Symbol('hello')).notMatches<HtmlInterpolation>();
    });

    it('allows the ifDefined directive', () => {
        assert.isDefined(html`
            <div title=${ifDefined(Math.random() > 0.5 ? undefined : 'hello')}></div>
        `);
    });

    /** In order to support directive results, this must also be the case. */
    it('allows empty objects sadly', () => {
        assert.tsType({} as const).matches<HtmlInterpolation>();
    });

    it('allows directives', () => {
        assert.tsType(renderIf(true, 'hi')).matches<HtmlInterpolation>();
        assert
            .tsType(
                classMap({
                    disabled: true,
                }),
            )
            .matches<HtmlInterpolation>();
        html`
            hello there
            ${classMap({
                disabled: true,
            })}
        `;
        assert
            .tsType(
                classMap({
                    disabled: true,
                }),
            )
            .matches<DirectiveOutput>();
    });

    it('prevents missing input assignment', () => {
        const NoInputs = defineElement()({
            tagName: 'html-interpolation-test-no-inputs',
            render() {
                return '';
            },
        });
        const WithInputs = defineElement<{param1: string}>()({
            tagName: 'html-interpolation-test-with-inputs',
            render() {
                return '';
            },
        });
        const MaybeWithInputs = defineElement<{param1?: string}>()({
            tagName: 'html-interpolation-test-with-inputs',
            render() {
                return '';
            },
        });

        html`
            <${NoInputs}></${NoInputs}>
            <${WithInputs.assign({
                param1: 'hi',
            })}></${WithInputs}>
            <${WithInputs.assign({
                param1: 'hi',
            })}></${WithInputs}>
            <${MaybeWithInputs}></${MaybeWithInputs}>
            <${
                // @ts-expect-error: this is missing its inputs
                WithInputs
            }></${WithInputs}>
        `;
    });

    it('allows function interpolation', () => {
        assert.isDefined(html`
            <div
                @click=${() => {
                    console.info('you clicked me!');
                }}
            ></div>
        `);
    });

    it('allows vira icon definitions', () => {
        assert
            .tsType<
                RenderCallback<
                    'vira-icon',
                    {
                        fitContainer?: boolean | undefined;
                    },
                    {},
                    {},
                    'vira-icon-fit-container',
                    `vira-icon-${string}`,
                    readonly [],
                    readonly []
                >
            >()
            .matches<RenderCallback>();
    });

    it('allows empty and primitive interpolations', () => {
        assert.tsType<null>().matches<HtmlInterpolation>();
        assert.tsType<undefined>().matches<HtmlInterpolation>();
        assert.tsType<string>().matches<HtmlInterpolation>();
        assert.tsType<number>().matches<HtmlInterpolation>();
        assert.tsType<boolean>().matches<HtmlInterpolation>();
        assert.tsType<bigint>().matches<HtmlInterpolation>();
        assert.tsType<typeof nothing>().matches<HtmlInterpolation>();
        assert.tsType<Element>().matches<HtmlInterpolation>();
        assert.tsType<HtmlInterpolation[]>().matches<HtmlInterpolation>();
        assert.tsType<ReadonlyArray<HtmlInterpolation>>().matches<HtmlInterpolation>();
    });
});

describe('VerifyHtmlValues', () => {
    const NoInputs = defineElement()({
        tagName: 'verify-html-values-no-inputs',
        render() {
            return '';
        },
    });
    const WithInputs = defineElement<{param1: string}>()({
        tagName: 'verify-html-values-with-inputs',
        render() {
            return '';
        },
    });

    it('passes through definitions that need no inputs', () => {
        assert.tsType<VerifyHtmlValues<[typeof NoInputs]>>().equals<[typeof NoInputs]>();
    });

    it('replaces definitions that are missing their inputs with an error string', () => {
        assert
            .tsType<VerifyHtmlValues<[typeof WithInputs]>>()
            .equals<['ERROR: This element is missing its inputs.']>();
        assert
            .tsType<
                VerifyHtmlValues<
                    [
                        typeof WithInputs,
                        typeof WithInputs,
                    ]
                >
            >()
            .equals<
                [
                    'ERROR: This element is missing its inputs.',
                    'ERROR: This element is missing its inputs.',
                ]
            >();
    });

    it('allows a definition after its inputs were assigned', () => {
        type Assigned = ReturnType<typeof WithInputs.assign>;

        assert
            .tsType<
                VerifyHtmlValues<
                    [
                        Assigned,
                        typeof WithInputs,
                    ]
                >
            >()
            .equals<
                [
                    Assigned,
                    typeof WithInputs,
                ]
            >();
    });

    it('passes through values that are not element definitions', () => {
        assert
            .tsType<
                VerifyHtmlValues<
                    [
                        string,
                        number,
                    ]
                >
            >()
            .equals<
                [
                    string,
                    number,
                ]
            >();
    });
});
