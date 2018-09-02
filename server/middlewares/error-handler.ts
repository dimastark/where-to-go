import { Context } from 'koa';

import { WtgError } from 'lib/errors';

export default () => async (ctx: Context, next: () => Promise<any>) => {
    try {
        await next();
    } catch (error) {
        if (error instanceof WtgError) {
            ctx.status = error.code;
            ctx.message = error.constructor.name;
            ctx.body = { message: error.message };
        } else {
            /* tslint:disable-next-line:no-console */
            console.error(error);

            ctx.throw(500, 'Internal Server ErrorTab.');
        }
    }
};
