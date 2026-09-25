import {assertWrap} from '@augment-vir/assert';
import {defineBookPage} from 'element-book';
import {Observable, defineElement, html, listen} from 'element-vir';

enum FileUploadCommand {
    OpenFilePicker = 'open-file-picker',
    Clear = 'clear',
}

const VirCommandInputUpload = defineElement<{
    commands: Observable<FileUploadCommand | undefined>;
}>()({
    tagName: 'vir-command-input-upload',
    state() {
        return {
            fileNames: [] as string[],
            /** Any state value with a `destroy` method is destroyed when the element disconnects. */
            commandListener: undefined as undefined | {destroy: () => void},
        };
    },
    init({inputs, host, updateState}) {
        const commandHandlers: Record<FileUploadCommand, () => void> = {
            [FileUploadCommand.OpenFilePicker]() {
                host.shadowRoot.querySelector('input')?.click();
            },
            [FileUploadCommand.Clear]() {
                updateState({
                    fileNames: [],
                });
            },
        };

        const removeListener = inputs.commands.listen(false, (command) => {
            if (command) {
                commandHandlers[command]();
            }
        });

        updateState({
            commandListener: {
                destroy() {
                    removeListener();
                },
            },
        });
    },
    render({state, updateState}) {
        return html`
            <input
                type="file"
                multiple
                hidden
                ${listen('change', (event) => {
                    const fileInput = assertWrap.instanceOf(event.currentTarget, HTMLInputElement);

                    updateState({
                        fileNames: Array.from(fileInput.files || [], (file) => file.name),
                    });
                    fileInput.value = '';
                })}
            />
            <p>Selected files: ${state.fileNames.length ? state.fileNames.join(', ') : 'none'}</p>
        `;
    },
});

const VirCommandInputParent = defineElement()({
    tagName: 'vir-command-input-parent',
    state() {
        return {
            uploadCommands: new Observable<FileUploadCommand | undefined>({
                defaultValue: undefined,
                /** Fire listeners on every `setValue`, even when the same command is sent twice. */
                equalityCheck: undefined,
            }),
        };
    },
    render({state}) {
        return html`
            <button
                ${listen('click', () => {
                    state.uploadCommands.setValue(FileUploadCommand.OpenFilePicker);
                })}
            >
                Choose files
            </button>
            <button
                ${listen('click', () => {
                    state.uploadCommands.setValue(FileUploadCommand.Clear);
                })}
            >
                Clear
            </button>
            <${VirCommandInputUpload.assign({
                commands: state.uploadCommands,
            })}></${VirCommandInputUpload}>
        `;
    },
});

export const commandInputPage = defineBookPage({
    title: 'command input',
    parent: undefined,
    defineExamples({defineExample}) {
        defineExample({
            title: 'parent triggers child file picker',
            render() {
                return html`
                    <${VirCommandInputParent}></${VirCommandInputParent}>
                `;
            },
        });
    },
});
