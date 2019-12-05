import BaseError from './BaseError';

export default class MissingArgumentException extends BaseError {
    constructor(e: Error){
        super("Missing Argument Exception", process.env.NODE_ENV === "production" ? "Unexpected error" : e.message);
    }
}