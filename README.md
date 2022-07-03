# Tasks APP

Bem vindo a sua lista de tarefas.
Com está aplicação você será capaz de: 
  - ver tarefas salvas;
  - criar novas tarefas;
  - editar suas tarefas;
  - deletar tarefas;

Para está aplicação foram usadas as seguintes tecnologias:
  - Front-end: JavaScript, Reac.JS, React-Router, Context;
  - Back-end: NodeJS, Express;
  - Banco de dados: MySQL;
  - Testes: Mocha, Chai, Sinon, chai-http, Reac-testing-library, Jest; 

## Para a execução do código, é necessário
  - node v16;
  - Sistema gerenciador de banco de dados para o MySQL (como workbench);
  - MySQL ou docker;

## Para iniciar
  - clone esse repositório:
    ``git clone git@github.com:marinafischer/tasks-be.git``
  - entre na pasta back-end:
    ``cd tasks-be/back-end``
  - na raiz da pasta do back-end você encontrará todas as informações sobre a API.
  - rode o comando
    ```npm install```
  - caso você não tenha o MySQL, você pode rodar o mesmo em um container, com o comando:

    ```docker run --name meu-mysql-5_7 -e MYSQL_ROOT_PASSWORD=1234 -d -p 3306:3306 mysql:5.7```

  - na raiz do projeto, no arquivo tasksDB.sql você encontrará os comandos necessários para criar o banco de dados, execute o mesmo em seu sistema gerenciador de banco de dados;
  - caso você esteja usando o MySQL instalado em seu computador, no arquivo 

  ```models>connection``` insira os dados do seu MySQL;

  - rode o comando
    ```npm start```
  - a aplicação será iniciada na porta 3001 da sua máquina (é muito importante que você não altere essa porta)


  - agora vamos iniciar o serviço do front-end, considerando que seu terminal está na pasta back-end
    ``cd ../front-end``
  - na raiz da pasta do front-end você encontrará todas as informações sobre o APP.
  - rode o comando 
    ```npm install```
  - após a instalaçõ das dependências, rode o comando
    ```npm start```
  - a aplicação será iniciada na porta 3000 da sua máquina (é muito importante que você já tenha inicado a sua API)

### Informações sobre os serviços
  Com os passos indicados acima, você já será capaz de visualizar sua aplicação rodando na porta 3000. Caso você tenha alguma dúvida sobre os comandos indicados ou sobre o funcionamento, cada uma das pastas (front-end e back-end) possuem README explicativos com mais detalhes sobre as tecnologias e funcionalidades.

## Alguma dúvida?

- LinkedIn: [Marina Fischer](https://www.linkedin.com/in/marina-miranda-fischer/)
