import qs from 'query-string';

const API_URL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:8000/api';

interface IQuery {
    [key: string]: any,
}

interface IRequestInit extends RequestInit {
    query?: IQuery,
}

function getRequestUrl(url: string, query: IQuery = {}) {
    if (query) {
        return `${API_URL}/${url}?${qs.stringify(query)}`;
    }

    return `${API_URL}/${url}`;
}

export default async function <TResult> (url: string, options: IRequestInit = {}): Promise<TResult> {
    return fetch(getRequestUrl(url, options.query), options)
        .then(response => response.json());
}
