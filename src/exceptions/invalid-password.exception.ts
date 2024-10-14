import { HttpException, HttpStatus } from "@nestjs/common";

export class InvalidProfileCreation extends HttpException {
    constructor(message: string){
        const response = {
            code: 'Invalid to create user',
            message: message,
        };
        super(response, HttpStatus.NOT_ACCEPTABLE);
    }
}
