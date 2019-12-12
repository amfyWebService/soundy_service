import BaseError from './BaseError';

export default class MissingArgumentException extends BaseError {
    constructor(e: Error){
        super("missing_argument_exception", process.env.NODE_ENV === "production" ? "Unexpected error" : e.message);
    }
}