import { test } from '@japa/runner'
import UserService from 'App/Services/UserService'

test.group('Criar usuário', () => {
  test('Deve criar um usuário com sucesso', async ({ assert }) => {

    //gerando um nome aleatório
    const username = Math.random().toString(36).substring(7)

    //gerando email aleatório
    const email = Math.random().toString(36).substring(7) + 'teste.com';

    const response = await UserService.createUser(username, email, '12345678')

    //verificando se o usuário foi criado
    assert.exists(response.id)
  })
})
