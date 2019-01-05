import path from 'path';

import mount from 'koa-mount';
import serve from 'koa-static';

const staticPath = path.join(__dirname, '..', '..', 'static');

export default () => mount('/static', serve(staticPath));
