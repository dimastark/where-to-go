export abstract class WtgError extends Error {
    protected constructor(readonly code: number, message?: string) {
        super(message);
    }
}

export class ValidationError extends WtgError {
    constructor(message?: string) {
        super(400, message);
    }
}

export class NotFoundError extends WtgError {
    constructor() {
        super(404, 'Not Found');
    }
}

export class InternalServerError extends WtgError {
    constructor(message: string) {
        super(500, message);
    }
}
