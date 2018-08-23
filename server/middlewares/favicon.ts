import path from 'path';

import favicon from 'koa-favicon';

export default () => favicon(
    path.join(__dirname, '..', 'favicon.ico'),
);
