import { test } from '@japa/runner'

test.group('Venda', () => {
  test('Deve listar as vendas com sucesso', async ({ client, assert }) => {
    const response = await client.get('/vendas')

    response.assertStatus(200);
    assert.exists(response.response.body.message);
  })
})
