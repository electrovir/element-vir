import {BookPageControlTypeEnum, definePageControl} from './book-page-controls';

describe(definePageControl.name, () => {
    it('requires the initValue to match the control type expected value type', () => {
        definePageControl({
            // this should be boolean
            // @ts-expect-error
            initValue: 'hello',
            controlType: BookPageControlTypeEnum.Checkbox,
        });
        definePageControl({
            initValue: true,
            controlType: BookPageControlTypeEnum.Checkbox,
        });
    });
});
