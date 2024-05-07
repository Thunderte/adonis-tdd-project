import { test } from '@japa/runner'
import Database from '@ioc:Adonis/Lucid/Database';
import UserService from 'App/Services/UserService';

test.group('Criar conta', (group) => {
    //Desfazendo alterações no banco de dados
    group.each.setup(async () => {
      await Database.beginGlobalTransaction()
      return () => Database.rollbackGlobalTransaction()
    })

    test('Deve criar usuário com sucesso', async ({ client, assert }) => {

       //gerando um nome aleatório
    const username = Math.random().toString(36).substring(7)

    //gerando email aleatório
    const email = Math.random().toString(36).substring(7) + '@teste.com';

    const response = await client.post('/signup').form({
        name: username,
        email: email,
        password: '12345678'
      })

      response.assertStatus(200);
      assert.exists(response.response.body.id);
    })
    test('Deve retornar erro ao tentar criar usuário com email já cadastrado', async ({ client }) => {
       
      //encontrando uma conta já existente
      const user = await UserService.findUserRandom();
      
      //realizando a requisição
      const response = await client.post('/signup').form({
        name: 'Teste',
        email: user?.email,
        password: '12345678'
    })
    
    //verificando se retornou erro
    response.assertStatus(400);
  })
})
