import cors from '@koa/cors';
import Koa from 'koa';
import logger from 'koa-logger';

import router from 'controllers';
import errorHandlerMiddleware from 'middlewares/error-handler';
import faviconMiddleware from 'middlewares/favicon';
import staticMiddleware from 'middlewares/static';

const app = new Koa();

const port = process.env.PORT || 8000;

app.use(logger());
app.use(cors());
app.use(faviconMiddleware());
app.use(staticMiddleware());
app.use(errorHandlerMiddleware());
app.use(router.routes());

app.listen(port);

/* tslint:disable-next-line:no-console */
console.log(`Server listening on ${port}`);
