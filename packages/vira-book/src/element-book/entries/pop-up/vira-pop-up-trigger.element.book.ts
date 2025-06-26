import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {HorizontalAnchor, viraFocusCssVars, ViraPopUpTrigger} from 'vira';
import {elementsBookPage} from '../../top-level-pages.js';

export const viraPopUpTriggerBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraPopUpTrigger.tagName,
    defineExamples({defineExample}) {
        defineExample({
            title: 'basic',
            styles: css`
                ${ViraPopUpTrigger} {
                    ${viraFocusCssVars['vira-focus-outline-border-radius'].name}: 0;
                }

                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .pop-up {
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    background-color: #eef9ff;
                }
            `,
            render() {
                return html`
                    <${ViraPopUpTrigger.assign({keepOpenAfterInteraction: true})}>
                        <div class="trigger" slot=${ViraPopUpTrigger.slotNames.trigger}>
                            Trigger Pop Up
                        </div>
                        <div class="pop-up" slot=${ViraPopUpTrigger.slotNames.popUp}>Pop up!</div>
                    </${ViraPopUpTrigger}>
                `;
            },
        });
        defineExample({
            title: 'long clipped content',
            styles: css`
                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .pop-up {
                    box-sizing: border-box;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    white-space: nowrap;
                    background-color: white;
                }
            `,
            render() {
                return html`
                    <${ViraPopUpTrigger.assign({
                        keepOpenAfterInteraction: true,
                    })}>
                        <div slot=${ViraPopUpTrigger.slotNames.trigger}>
                            Trigger Long Clipped Pop Up
                        </div>
                        <div class="pop-up" slot=${ViraPopUpTrigger.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${ViraPopUpTrigger}>
                `;
            },
        });
        defineExample({
            title: 'long right anchored content',
            styles: css`
                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .pop-up {
                    box-sizing: border-box;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    white-space: nowrap;
                    background-color: white;
                }
            `,
            render() {
                return html`
                    <${ViraPopUpTrigger.assign({
                        keepOpenAfterInteraction: true,
                        horizontalAnchor: HorizontalAnchor.Right,
                    })}>
                        <div slot=${ViraPopUpTrigger.slotNames.trigger}>
                            Trigger Long Right Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${ViraPopUpTrigger.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${ViraPopUpTrigger}>
                `;
            },
        });
        defineExample({
            title: 'long left anchored content',
            styles: css`
                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .pop-up {
                    box-sizing: border-box;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    white-space: nowrap;
                    background-color: white;
                }
            `,
            render() {
                return html`
                    <${ViraPopUpTrigger.assign({
                        keepOpenAfterInteraction: true,
                        horizontalAnchor: HorizontalAnchor.Left,
                    })}>
                        <div slot=${ViraPopUpTrigger.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${ViraPopUpTrigger.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${ViraPopUpTrigger}>
                `;
            },
        });
        defineExample({
            title: 'short right anchored content',
            styles: css`
                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .pop-up {
                    box-sizing: border-box;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    white-space: nowrap;
                    background-color: white;
                }
            `,
            render() {
                return html`
                    <${ViraPopUpTrigger.assign({
                        keepOpenAfterInteraction: true,
                        horizontalAnchor: HorizontalAnchor.Right,
                    })}>
                        <div slot=${ViraPopUpTrigger.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${ViraPopUpTrigger.slotNames.popUp}>not long</div>
                    </${ViraPopUpTrigger}>
                `;
            },
        });
    },
});
