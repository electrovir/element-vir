import {defineTypedEvent} from 'element-vir';
import {BookFullRoute} from '../../routing/book-routing';

export const ChangeRouteEvent = defineTypedEvent<Partial<BookFullRoute>>()(
    'element-book-change-route',
);
