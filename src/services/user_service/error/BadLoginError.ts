import BaseError from '@/shared/error/BaseError';

export default class BadLoginError extends BaseError {
    constructor(){
        super("bad_username_password", "Bad username or password");
    }

}