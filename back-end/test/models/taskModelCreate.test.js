const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const taskModel = require('../../models/taskModel');
const { describe, beforeEach, afterEach, it } = require('mocha');

describe('Insere uma nova tarefa no banco de dados', () => {
  
  const payload1 = {user_id:1, content: 'um conteúdo qualquer'};
  const payload2 = {user_id:1, content: 'um conteúdo qualquer', status:3};
  
  const resultExecute = [{"insertId": 5,}];

  beforeEach(() => {
    sinon.stub(connection, 'execute').resolves(resultExecute)
  });

  afterEach(() => {
    connection.execute.restore();
  });

  it('quando o status não é informado, retorna o id da tarefa criada', async()=>{
    const result = await taskModel.insertTask(payload1);
    expect(result).to.be.equal(5);
  });
  
  it('quando o status é informado, retorna o id da tarefa criada', async()=>{
    const result = await taskModel.insertTask(payload2);
    expect(result).to.be.equal(5);
  });
});