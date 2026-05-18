import {testPlaywright} from '@augment-vir/test';
import {expect} from '@playwright/test';
import {e2eTestName} from './data/e2e-test-name.js';
import {e2eNavigateTo} from './test-util/e2e-navigate.mock.js';
import {assertSizedScreenshots} from './test-util/e2e-sized-screenshots.mock.js';
import {createFullE2eTestName} from './test-util/e2e-test-name.mock.js';
import {getE2eFrontendUrl} from './test-util/e2e-urls.mock.js';

export {type Locator, type Page} from '@playwright/test';

export const e2eUtil = {
    expect,
    assertSizedScreenshots,
    createFullE2eTestName,
    e2eTestName,
    getFrontendUrl: getE2eFrontendUrl,
    ...testPlaywright,
    navigation: {
        ...testPlaywright.navigation,
        navigateTo: e2eNavigateTo,
    },
};
