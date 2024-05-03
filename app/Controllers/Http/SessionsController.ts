import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BadRequestException from "App/Exceptions/BadRequestException";

export default class SessionsController {
    public async login({ request, auth }: HttpContextContract) {
        const { email, password } = request.all();
        try{ 
        const token = await auth.use('api').attempt(email, password);
        return token;
        } catch (error) {
            throw new BadRequestException('Credênciais invalidas');
        }
    }
}
