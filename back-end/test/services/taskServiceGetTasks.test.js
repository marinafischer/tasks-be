const sinon = require('sinon');
const { expect } = require('chai');
const { describe, beforeEach, afterEach, it } = require('mocha');

const taskService = require('../../services/taskService');
const connection = require('../../models/connection');

describe('Busca as tarefas de um usuário através do seu id', ()=>{
  describe('Quando usuário não é encontrado', ()=>{
    const id = 5;
    const resultExecute = [[]];

    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves(resultExecute)
    });

    afterEach(() => {
      connection.execute.restore();
    });
    it('retorna um array', async()=>{
      const data = await taskService.getTasksByUser(id);
      expect(data).to.be.an('array');
    });
    it('o array está vazio', async()=>{
      const data = await taskService.getTasksByUser(id);
      expect(data).to.be.empty;
    });
  });
  describe('Quando o usuário é encontrado', ()=>{
    const id = 2;
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
      const data = await taskService.getTasksByUser(id);
      expect(data).to.be.an('array');
    });
    it('o array não está vazio', async()=>{
      const data = await taskService.getTasksByUser(id);
      expect(data).to.be.not.empty;
    });
    it('os objetos do array possuem atributos "id", "user_id", "content", "status"', 
      async () => {
        const [data] = await taskService.getTasksByUser(id);
        expect(data).to.be.includes.all.keys('id', 'user_id', 'content', 'status');
      }
    );
  });
})