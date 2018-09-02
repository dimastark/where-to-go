import path from 'path';

import mount from 'koa-mount';
import serve from 'koa-static';

export default () => mount(
    '/static',
    serve(path.join(__dirname, '..', '..', 'static')),
);
