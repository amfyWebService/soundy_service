import BaseError from '@/shared/error/BaseError';

export default class InvalidTokenError extends BaseError {
    constructor(){
        super('invalid_token', "Invalid token");
    }
}