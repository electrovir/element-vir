import {elementsBookPage} from './elements.book.js';
import {iconsBookPage} from './entries/icons.book.js';
import {viraMenuItemBookPage} from './entries/pop-up/vira-menu-item.element.book.js';
import {viraMenuTriggerBookPage} from './entries/pop-up/vira-menu-trigger.element.book.js';
import {viraMenuOptionsBookPage} from './entries/pop-up/vira-menu.element.book.js';
import {viraPopUpMenuBookPage} from './entries/pop-up/vira-pop-up-menu.element.book.js';
import {viraPopUpTriggerBookPage} from './entries/pop-up/vira-pop-up-trigger.element.book.js';
import {viraTableBookPage} from './entries/table/vira-table.element.book.js';
import {viraBoldTextPage} from './entries/vira-bold-text.element.book.js';
import {viraButtonBookPage} from './entries/vira-button.element.book.js';
import {viraCollapsibleBookPage} from './entries/vira-collapsible-wrapper.element.book.js';
import {viraDropdownPage} from './entries/vira-dropdown.element.book.js';
import {viraIconBookPage} from './entries/vira-icon.element.book.js';
import {viraImageBookPage} from './entries/vira-image.element.book.js';
import {viraInputBookPage} from './entries/vira-input.element.book.js';
import {viraLinkBookPage} from './entries/vira-link.element.book.js';

export const viraBookPages = [
    elementsBookPage,
    iconsBookPage,

    viraBoldTextPage,
    viraButtonBookPage,
    viraCollapsibleBookPage,
    viraDropdownPage,
    viraIconBookPage,
    viraImageBookPage,
    viraInputBookPage,
    viraLinkBookPage,
    viraMenuItemBookPage,
    viraMenuOptionsBookPage,
    viraMenuTriggerBookPage,
    viraPopUpMenuBookPage,
    viraPopUpTriggerBookPage,
    viraTableBookPage,
].sort((a, b) => a.title.localeCompare(b.title));
