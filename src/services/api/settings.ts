import { IPlacesQuery, PlaceCategory } from '../../../shared/places-api';

const LS_KEY = 'SETTINGS';

export default {
    getSettings(): Partial<IPlacesQuery> {
        return JSON.parse(localStorage.getItem(LS_KEY) || '{}');
    },

    setSettings(settings: Partial<IPlacesQuery>) {
        localStorage.setItem(LS_KEY, JSON.stringify(settings));

        return settings;
    },

    set(key: string, value?: any) {
        const settings = this.getSettings();

        if (!value) {
            delete settings[key];
        } else {
            settings[key] = value;
        }

        return this.setSettings(settings);
    },

    getCategory(): PlaceCategory {
        return this.getSettings().category || 'eat-drink';
    },

    setCategory(category?: PlaceCategory): PlaceCategory {
        return this.set('category', category).category || 'eat-drink';
    },

    getRadius(): number {
        return this.getSettings().radius || 500;
    },

    setRadius(radius?: number): number {
        return this.set('radius', radius).radius || 500;
    },
};
