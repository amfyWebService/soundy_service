import BaseError from './BaseError';

export default class EntityNotFoundErrorCusto extends BaseError {
    constructor(e: Error){
        super("entity_id_not_found", "No entity found with this id");
    }
}