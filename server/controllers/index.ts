import fs from 'fs';
import path from 'path';

import Router from 'koa-router';

import api from './api';

const router = new Router();

router.get('/', async ctx => {
    const htmlPath = path.join(__dirname, '..', 'index.html');

    ctx.type = 'html';

    if (fs.existsSync(htmlPath)) {
        ctx.body = fs.createReadStream(htmlPath);
    } else {
        ctx.status = 404;
    }
});

router.use('/api', api.routes());

export default router;
