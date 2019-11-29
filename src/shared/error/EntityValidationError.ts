import BaseError from './BaseError';
import { ValidationError } from 'class-validator';

export default class EntityValidationError extends BaseError {
    constructor(validationErrors?: ValidationError[]){
        super("entity_validation_error", JSON.stringify(validationErrors) || "The entity isn't valid 🖕");
    }
}