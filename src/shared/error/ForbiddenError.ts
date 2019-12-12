import BaseError from './BaseError';

export default class ForbiddenError extends BaseError {
    constructor(){
        super("forbidden", "The user isn't authorized to do this action");
    }
}