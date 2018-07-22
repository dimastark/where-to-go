import qs from 'querystring';

import fetch from 'node-fetch';

const API_KEY = process.env.PLACES_API_KEY || 'AIzaSyCgruEeA8V3XPN6Rsoh8MWu7uPqSPAaVss';
const API_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

export type PlaceType = 'cafe' | 'restaurant';

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
    types: string[],
}

export async function getAllPlaces({ latitude, longitude }: IMapLocation, type: PlaceType = 'restaurant'): Promise<IPlace[]> {
    const query = {
        key: API_KEY,
        location: `${latitude},${longitude}`,
        radius: 500,
        language: 'ru',
        opennow: true,
        type,
    };

    const json = await fetch(`${API_URL}?${qs.stringify(query)}`)
        .then(response => response.json());

    if (!['OK', 'ZERO_RESULTS'].includes(json.status) || !Array.isArray(json.results)) {
        throw new Error('Places fetch error.');
    }

    return json.results;
}
