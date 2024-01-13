import {css, html} from 'element-vir';
import {isRunTimeType} from 'run-time-assertions';
import {defineBookElement} from '../define-book-element';

export const BookError = defineBookElement<{message: string | ReadonlyArray<string>}>()({
    tagName: 'book-error',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            color: red;
            font-weight: bold;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,
    renderCallback({inputs}) {
        const paragraphs = isRunTimeType(inputs.message, 'array')
            ? inputs.message
            : [inputs.message];

        return paragraphs.map(
            (paragraph) => html`
                <p>${paragraph}</p>
            `,
        );
    },
});
