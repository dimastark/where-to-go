export default {
    placesApiUrl: {
        development: 'https://places.cit.api.here.com/places/v1/discover/explore',
        production: 'https://places.api.here.com/places/v1/discover/explore',
    }[process.env.NODE_ENV!],
    placesAppCode: process.env.API_APP_CODE,
    placesAppId: process.env.API_APP_ID,
    placesPageSize: 1000,
};
