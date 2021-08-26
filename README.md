# Desafio Toro

## Instalação 

Instale o projeto utilizando o comando:

````
npm install
````

Crie o arquivo .env como uma cópia do arquivo .env.example disponibilizado na raíz e modifique os valores de acordo com as configurações do seu ambiente. Ele é obrigatório para que a aplicação seja executada corretamente.

## Dependências

Esta aplicação persiste dados em MongoDB. Se desejar, execute-o utilizando o docker-compose disponibilizado na raíz.

## Execução

Execute o projeto com o comando:

````
npm run start
````

Isto iniciará o servidor na porta `3000`.

Se deseja executar em produção, execute os comandos:

````
npm run build
npm run start:prod
````

## Documentação

Este projeto já possui documentação Swagger integrada. Para visualizar, basta executar o projeto e acessar o endpoint `/api` no navegador.