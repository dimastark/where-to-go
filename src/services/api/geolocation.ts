export default {
    get(): Promise<Position> {
        if ('geolocation' in navigator) {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject, {
                    enableHighAccuracy: true,
                    maximumAge: 0,
                });
            });
        } else {
            throw new Error('Geolocation error.');
        }
    },
};
