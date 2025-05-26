import {check} from '@augment-vir/assert';
import {getEnumValues, getObjectTypedKeys} from '@augment-vir/common';
import {defineBookPage, type BookPage} from 'element-book';
import {html, type DeclarativeElementDefinition} from 'element-vir';
import {HeadingLevel} from '../create-theme/theme-options.js';
import {type Theme} from '../create-theme/theme.js';

export function createThemeBookPages<TagName extends string>(
    theme: Readonly<Theme<TagName>>,
): ReadonlyArray<Readonly<BookPage>> {
    const elementsBookPage = defineBookPage({
        title: 'elements',
        parent: undefined,
    });

    const fontEntries = getObjectTypedKeys(theme.elements)
        .map((elementKey) => {
            if (elementKey === 'heading') {
                return undefined;
            }
            const themeElement: DeclarativeElementDefinition = theme.elements[elementKey];

            return defineBookPage({
                title: themeElement.tagName,
                parent: elementsBookPage,
                defineExamples({defineExample}) {
                    defineExample({
                        title: 'basic',
                        render() {
                            return html`
                                <${themeElement}>This is ${elementKey}</${themeElement}>
                            `;
                        },
                    });
                },
            });
        })
        .filter(check.isTruthy);

    return [
        defineBookPage({
            title: theme.elements.heading.tagName,
            parent: elementsBookPage,
            defineExamples({defineExample}) {
                getEnumValues(HeadingLevel).forEach((headingLevel) => {
                    defineExample({
                        title: headingLevel,
                        render() {
                            return html`
                                <${theme.elements.heading.assign({
                                    headingLevel,
                                })}>
                                    This is heading ${headingLevel}
                                </${theme.elements.heading}>
                            `;
                        },
                    });
                });
            },
        }),
        ...fontEntries,
    ].sort((a, b) => a.title.localeCompare(b.title));
}
