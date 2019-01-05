import { IPlace } from '../../../shared/places-api';

const LS_KEY = 'FAVOURITES_PLACES';

export default {
    get() {
        return JSON.parse(localStorage.getItem(LS_KEY) || '[]');
    },

    set(items: IPlace[]) {
        localStorage.setItem(LS_KEY, JSON.stringify(items));

        return items;
    },

    add(prevItems: IPlace[] | null, item: IPlace) {
        const items = (prevItems || []).concat([item]);

        return this.set(items);
    },

    delete(prevItems: IPlace[] | null, id: string) {
        const items = (prevItems || []).filter(place => place.id !== id);

        return this.set(items);
    },
};
