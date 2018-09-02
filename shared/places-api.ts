export type PlaceCategory = 'eat-drink'
    | 'restaurant'
    | 'coffee-tea'
    | 'snacks-fast-food';

export interface IPlacesQuery {
    category?: PlaceCategory;
    latitude: number;
    longitude: number;
    radius?: number;
}

export interface IPlace {
    id: string;
    distance: number;
    position: [number, number];
    title: string;
    category: ICategory;
    icon: string;
    vicinity: string;
    tags?: ITag[];
    openingHours?: {
        text: string;
        label: string;
        isOpen: boolean;
    };
}

export interface ICategory {
    id: string;
    title: string;
}

export interface ITag {
    id: string;
    title: string;
}
