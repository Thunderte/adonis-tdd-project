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