const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');
const taskModel = require('../../../models/taskModel');
const { describe, beforeEach, afterEach, it } = require('mocha');

describe('Buscas as tarefas de um usuário no banco de dados através de seu id', () => {
  
  const id = 5;
  
  describe('Quando não encontra nenhuma tarefa', () => {

    const resultExecute = [[]];

    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves(resultExecute)
    });

    afterEach(() => {
      connection.execute.restore();
    });

    it('retorna um array', async()=>{
      const result = await taskModel.getTasks(id);
      expect(result).to.be.an('array');
    });

    it('o array está vazio', async()=>{
      const result = await taskModel.getTasks(id);
      expect(result).to.be.empty;
    });
  });

  describe('Quando encontra tarefas no banco de dados', () => {

    const resultExecute = [[
      {
        id: 5,
        user_id:1,
        content: 'um conteúdo qualquer',
        status: 1
      }
    ]];

    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves(resultExecute)
    });

    afterEach(() => {
      connection.execute.restore();
    });

    it('retorna um array', async()=>{
      const result = await taskModel.getTasks(id);
      expect(result).to.be.an('array');
    });

    it('o array não está vazio', async()=>{
      const result = await taskModel.getTasks(id);
      expect(result).to.be.not.empty;
    });

    it('os objetos do array possuem atributos "id", "user_id", "content", "status"', 
      async () => {
        const [result] = await taskModel.getTasks(id);
        expect(result).to.be.includes.all.keys('id', 'user_id', 'content', 'status');
      }
    );
  });
});