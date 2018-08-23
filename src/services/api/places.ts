import request from '../request';

export interface IMapLocation {
    latitude: number,
    longitude: number,
}

export interface IPlaceLocation {
    lat: number,
    lng: number,
}

export interface IPhoto {
    height: number,
    width: number,
    htmlAttributions: string[],
    photoReference: string,
}

export interface IPlace {
    id: string,
    placeId: string,
    reference: string,
    name: string,
    vicinity?: string
    icon: string,
    geometry: {
        location: IPlaceLocation,
        viewport?: {
            northeast: IPlaceLocation,
            southwest: IPlaceLocation,
        },
    },
    openingHours: {
        openNow: boolean,
        weekdayText: string[],
    },
    photos: IPhoto[],
    priceLevel?: 0 | 1 | 2 | 3 | 4,
    rating: number,
}

export default {
    filter(query: IMapLocation): Promise<IPlace[]> {
        return request('places', { query });
    }
}
