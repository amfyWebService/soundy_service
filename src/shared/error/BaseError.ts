export default class BaseError extends Error {
    code: string;

    constructor(code: string, message: string) {
        super(message);
        this.code = code;
    }

    toJson(){
        return {
            code: this.code,
            message: this.message
        }
    }

    toString(){
        return JSON.stringify(this.toJson());
    }
}