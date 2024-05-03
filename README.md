# Exemplo de utilização TDD Adonis 5
Para utilização da aplicação, siga os passos abaixo:

## Instalação

    npm install

# Arquivo de configuração
Renomeie o arquivo .env.example para .env

## Configuração da database

    node ace configure @adonisjs/lucid

# Configuração do .env
Abra o arquivo .env e configure a database.

## Rode os arquivos migrations

    node ace migration:run

## Rode o comando de teste

    node ace test

# Finalização
Se ocorrer tudo bem, seu projeto está pronto. Faça um commit, e verifique se o comando de test se inicia.

# Criando um teste

## Teste Unitário

    node ace make:test unit pasta/nome-do-arquivo-de-teste

## Teste de integração

    node ace make:test functional pasta/nome-do-arquivo-de-teste

# Utilizando rollback na database após o teste rodar

```ts
import { test } from '@japa/runner'
import Database from '@ioc:Adonis/Lucid/Database';

test.group('Criar usuário', (group) => {
  //Código para rollback na database
  group.each.setup(async () => {
    await Database.beginGlobalTransaction()
    return () => Database.rollbackGlobalTransaction()
  })

  test('Deve criar um usuário com sucesso', async ({ assert }) => {
    //Código do teste aqui
  })
})
```