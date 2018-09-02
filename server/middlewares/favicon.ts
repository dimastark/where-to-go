import fs from 'fs';
import path from 'path';

import { Context } from 'koa';
import favicon from 'koa-favicon';

const faviconPath = path.join(__dirname, '..', '..', 'favicon.ico');

export default () => {
    if (fs.existsSync(faviconPath)) {
        return favicon(faviconPath);
    }

    return async (ctx: Context, next: () => Promise<void>) => {
        await next();
    };
};
