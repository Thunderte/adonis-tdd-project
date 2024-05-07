import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserValidator from 'App/Validators/UserValidator'; 
import BadRequestException from 'App/Exceptions/BadRequestException';
import UserService from 'App/Services/UserService';

export default class UsersController {
    public async store({ request }: HttpContextContract) {
        const payload = await  request.validate(UserValidator);

        const data = request.only(['name', 'email', 'password']);

        const verificandoEmail = await UserService.findUserByEmail(data.email);

        if(!verificandoEmail) throw new BadRequestException('Email já cadastrado');

        const user = await UserService.createUser(data.name, data.email, data.password);

        return user;
    }
}
