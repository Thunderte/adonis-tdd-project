import { test } from '@japa/runner'
import UserFactory from 'Database/factories/UserFactory'

test.group('Login de usuário', () => {
  test('Deve logar um usuário com sucesso', async ({ assert, client }) => {
  //criando um usuário aleatório
  const user = await UserFactory.create();

  //realizando login
  const response = await client.post('/signin').form({
    email: user.email,
    password: "12345678"
  })

  //fazendo o teste que verifica se retornou um token
  response.assertStatus(200);
  assert.exists(response.response.body.token);
})
})
