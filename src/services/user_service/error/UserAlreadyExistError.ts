import BaseError from '@/shared/error/BaseError';

export default class UserAlreadyExistError extends BaseError {
    constructor(){
        super("user_already_exist", "An user with this mail address already exist");
    }
}