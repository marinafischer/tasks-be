# Tasks API

Esta pasta foi criada com o intuíto de abrigar o código referente a API do projeto.
Para a construção da mesma, foi usado: JavaScript, Node.JS, Express, MySQL.

## Para a execução do código, é necessário
  - node v16;
  - Sistema gerenciador de banco de dados MySQL (como workbench);
  - MySQL ou docker;

## Para iniciar
  - na raiz do projeto execute o comando 
    npm install
  - caso você não tenha o mysql, você pode rodar o mesmo em um container, com o comando:
    docker run --name meu-mysql-5_7 -e MYSQL_ROOT_PASSWORD=1234 -d -p 3306:3306 mysql:5.7
  - na raiz do projeto, no arquivo tasksDB.sql você encontrará os comandos necessários para criar o banco de dados, execute o mesmo em seu sistema gerenciador de banco de dados;
  - caso você esteja usando o mysql instalado em seu computador, no arquivo models>connection insira os dados do seu mysql;
  - rode o comando
    npm start
  - a aplicação será iniciada na porta 3001 da sua máquina (é muito importante que você não altere essa porta)

## Documentação da API

### Login

```no primeiro login basta inserir usuário e senha, nos próximos logins, será verificado se a senha é compatível com a do usuário cadastrado```

```http
  POST /user
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `username` | `string` | **Obrigatório**. Nome do usuário com no mínimo 3 caracteres **Único** |
| `password` | `string` | **Obrigatório**. Uma senha maior que 6 e menor que 32 caracteres |

Quando o login for realizado com sucesso, a API retornará um token que será necessário para realizar qualquer requisição da API.
O token tem duração de 12h, após esse período é necessário realiar um novo login.
Caso a senha informada não seja compatível com os dados do usuário, a API retorna um erro.

O token tem o seguinte formato:
`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyLCJ1c2VybmFtZSI6Ik5pbmEgTWlyYW5kYSJ9LCJpYXQiOjE2NTY0NTQwMzUsImV4cCI6MTY1NjQ5NzIzNX0.Hy2__sdFED0r2fzSFBc6rVRgjW7616r131Az4PT9AEI`

Você deve salvá-lo na sua aplicação após o login e enviá-lo na chave `Authorization` do cabeçalho da sua requisição.

`REQUEST HEADERS`

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `string` | **Obrigatório**. O token de autenticação |


### Cadastrar uma tarefa

```http
  POST /tasks
```

`REQUEST HEADERS`
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `string` | **Obrigatório**. O token de autenticação |

`REQUEST BODY`
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `content` | `string` | **Obrigatório**. Texto da tarefa **Único**. |
| `status` | `numero` | **Opcional**. Status da tarefa(1-criada, 2-iniciada, 3-finalizada). O padrão é 1; |


### Listar todas as tarefas de um usuário

```http
  GET /tasks
```

`REQUEST HEADERS`
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `string` | **Obrigatório**. O token de autenticação |

### Atualiza uma tarefa

```http
  PUT /tasks/:id
```

`REQUEST HEADERS`
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `string` | **Obrigatório**. O token de autenticação |

`URL PARAMS`
| Parâmetro   | Descrição                           |
| :---------- |  :---------------------------------- |
| `id` | **Obrigatório**. O id da tarefa |

`REQUEST BODY`
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `content` | `string` | **Obrigatório**. Texto da tarefa **Único**. |
| `status` | `numero` | **Obrigatório**. Status da tarefa(1-criada, 2-iniciada, 3-finalizada). |

```
É importante que todos os valores sejam passados ainda que não se vise uma alteração.
O não envio de alguma das informações obrigatórias farão você encontrar um erro.
```

### Deletar uma tarefa

```http
  DELETE /tasks/:id
```

`REQUEST HEADERS`
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `string` | **Obrigatório**. O token de autenticação |

`URL PARAMS`
| Parâmetro   | Descrição                           |
| :---------- |  :---------------------------------- |
| `id` | **Obrigatório**. O id da tarefa |

`*ATENÇÃO: ESSA OPERAÇÃO NÃO PODE SER DESFEITA*`

## Alguma dúvida?

- LinkedIn: [Marina Fischer](https://www.linkedin.com/in/marina-miranda-fischer/)
