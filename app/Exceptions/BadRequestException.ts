import { Exception } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

/*
|--------------------------------------------------------------------------
| Exception
|--------------------------------------------------------------------------
|
| The Exception class imported from `@adonisjs/core` allows defining
| a status code and error code for every exception.
|
| @example
| new BadRequestException('message', 500, 'E_RUNTIME_EXCEPTION')
|
*/
export default class BadRequestException extends Exception {
    constructor(message: string, code: string = "BAD_REQUEST_EXCEPTION") {
        super(message, 400, code);
    }

    public async handle(error: this, { response }: HttpContextContract) {
        response.status(error.status).send({
            message: error.message,
            code: error.code,
        });
    }
}
