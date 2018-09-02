import qs from 'querystring';

const API_URL = 'https://static-maps.yandex.ru/1.x/';

interface IOptions {
    from: {
        latitude: number,
        longitude: number,
    };
    to: {
        latitude: number,
        longitude: number,
    };
}

export default function(options: IOptions) {
    const { from, to } = options;
    const fromStr = `${from.longitude},${from.latitude}`;
    const toStr = `${to.longitude},${to.latitude}`;

    const params = {
        l: 'map,skl',
        pt: `${fromStr},pm2al~${toStr},pm2bl`,
        size: '360,250',
    };

    return `${API_URL}?${qs.stringify(params)}`;
}
