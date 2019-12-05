import BaseError from './BaseError';

export default class InternalServerError extends BaseError {
    constructor(e: Error){
        super("internal_server_error", process.env.NODE_ENV === "production" ? "Unexpected error" : e.message);
    }
}