import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserValidator from 'App/Validators/UserValidator'; 
import User from 'App/Models/User';
import BadRequestException from 'App/Exceptions/BadRequestException';
import UserService from 'App/Services/UserService';

export default class UsersController {
    public async store({ request }: HttpContextContract) {
        const payload = await  request.validate(UserValidator);

        const data = request.only(['name', 'email', 'password']);

        const user = await UserService.createUser(data.name, data.email, data.password);

        if(!user) throw new BadRequestException('Erro ao criar usuário', 'E_CREATE_USER');

        return user;
    }
}
