import BaseError from './BaseError';

export default class EntityNotFoundErrorCusto extends BaseError {
    constructor(e: Error){
        super("entity_not_found", "No entity not found with this id");
    }
}