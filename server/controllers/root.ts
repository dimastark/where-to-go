import fs from 'fs';
import path from 'path';

import Router from 'koa-router';

import { NotFoundError } from 'lib/errors';

const router = new Router();

const htmlPath = path.join(__dirname, '..', '..', 'index.html');

router.get('/', async ctx => {
    if (!fs.existsSync(htmlPath)) {
        throw new NotFoundError();
    }

    ctx.type = 'html';
    ctx.body = fs.createReadStream(htmlPath);
});

export default router;
