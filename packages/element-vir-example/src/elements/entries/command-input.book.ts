import {assertWrap} from '@augment-vir/assert';
import {defineBookPage} from 'element-book';
import {Trigger, defineElement, html, listen, onDomRendered} from 'element-vir';

enum FileUploadCommand {
    OpenFilePicker = 'open-file-picker',
    Clear = 'clear',
}

const VirCommandInputUpload = defineElement<{
    commands: Trigger<FileUploadCommand>;
}>()({
    tagName: 'vir-command-input-upload',
    state() {
        return {
            fileNames: [] as string[],
        };
    },
    render({inputs, state, updateState}) {
        return html`
            <input
                type="file"
                multiple
                hidden
                ${onDomRendered((element) => {
                    const fileInput = assertWrap.instanceOf(element, HTMLInputElement);
                    /**
                     * Consume the trigger in a `onDomRendered` listener so that we for sure have a
                     * reference to the input element (it has already been rendered).
                     */
                    const command = inputs.commands.value;
                    const commandHandlers: Record<FileUploadCommand, () => void> = {
                        [FileUploadCommand.OpenFilePicker]() {
                            fileInput.click();
                        },
                        [FileUploadCommand.Clear]() {
                            updateState({
                                fileNames: [],
                            });
                        },
                    };
                    if (command) {
                        commandHandlers[command]();
                    }
                })}
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
            uploadCommands: new Trigger<FileUploadCommand>(),
        };
    },
    render({state}) {
        return html`
            <button
                ${listen('click', () => {
                    state.uploadCommands.trigger(FileUploadCommand.OpenFilePicker);
                })}
            >
                Choose files
            </button>
            <button
                ${listen('click', () => {
                    state.uploadCommands.trigger(FileUploadCommand.Clear);
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
