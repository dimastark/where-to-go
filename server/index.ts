import Koa from 'koa';
import cors from '@koa/cors';
import logger from 'koa-logger';

import router from './controllers';
import faviconMiddleware from './middlewares/favicon';
import staticMiddleware from './middlewares/static';

const app = new Koa();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(logger());
app.use(faviconMiddleware());
app.use(staticMiddleware());
app.use(router.routes());

app.listen(port);

console.log(`Server running on port ${port}`);
