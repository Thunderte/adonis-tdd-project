import { test } from '@japa/runner'
import UserFactory from 'Database/factories/UserFactory'
import Database from '@ioc:Adonis/Lucid/Database';

test.group('Login de usuário', (group) => {
  //Desfazendo alterações no banco de dados
  group.each.setup(async () => {
    await Database.beginGlobalTransaction()
    return () => Database.rollbackGlobalTransaction()
  })
  
  test('Deve logar um usuário com sucesso', async ({ assert, client }, group) => {
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
test('Deve retornar erro ao tentar logar com credenciais inválidas', async ({ assert, client }) => {
  //realizando login
  const response = await client.post('/signin').form({
    email: "teststdskd@gmail.com",
    password: "123456"
  })

  //fazendo o teste que verifica se retornou um token
  response.assertStatus(400);
  assert.equal(response.response.body.code, 'BAD_REQUEST_EXCEPTION');
})
})
