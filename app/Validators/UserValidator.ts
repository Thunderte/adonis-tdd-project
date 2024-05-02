import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true},[
      rules.required(),
      rules.maxLength(255),
      rules.required()
    ]),
    email: schema.string({ trim: true}, [
      rules.required(),
      rules.email(),
      rules.maxLength(255),
    ]),
    password: schema.string({ trim: true }, [
      rules.required(),
      rules.minLength(8),
      rules.maxLength(255),
    ]),
  })

  public messages: CustomMessages = {
    'name.required': 'Digite um nome para criar sua conta!',
    'name.maxLength': 'Tamanho de nome excedido!',
    'email.required': 'Digite um email para criar sua conta!',
    'email.email': 'Digite um email válido!',
    'email.maxLength': 'Tamanho de email excedido!',
    'password.required': 'Digite uma senha para criar sua conta!',
    'password.minLength': 'Digite uma senha com pelo menos 8 caracteres!',
    'password.maxLength': 'Senha muito grande!',
  }
}
