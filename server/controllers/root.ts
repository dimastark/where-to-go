import fs from 'fs';
import path from 'path';

import Router from 'koa-router';

import { NotFoundError } from 'lib/errors';

const router = new Router();

router.get('/', async (ctx) => {
    const htmlPath = path.join(__dirname, '..', '..', 'index.html');

    if (!fs.existsSync(htmlPath)) {
        throw new NotFoundError();
    }

    ctx.type = 'html';
    ctx.body = fs.createReadStream(htmlPath);
});

export default router;
