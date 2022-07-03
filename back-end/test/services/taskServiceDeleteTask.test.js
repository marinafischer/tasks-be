const sinon = require('sinon');
const { expect } = require('chai');
const { describe, beforeEach, afterEach, it } = require('mocha');
const taskModel = require('../../models/taskModel');
const taskService = require('../../services/taskService');
const connection = require('../../models/connection');

describe('Deleta uma tarefa, e retorna as tarefas do usuário atualizadas', ()=>{
  describe('Retorna um array de tarefas', ()=>{
    const resultExecute = [[
      {
        id: 5,
        user_id:1,
        content: 'um conteúdo qualquer',
        status: 1
      }
    ]];

    beforeEach(() => {
      sinon.stub(taskModel, 'delTask').resolves();
      sinon.stub(connection, 'execute').resolves(resultExecute);
    });

    afterEach(() => {
      taskModel.delTask.restore();
      connection.execute.restore();
    });
    it('retorna um array', async()=>{
      const data = await taskService.deleteTask(5,1);
      expect(data).to.be.an('array');
    });
    it('o array não está vazio', async()=>{
      const data = await taskService.deleteTask(5,1);
      expect(data).to.be.not.empty;
    });
    it('os objetos do array possuem atributos "id", "user_id", "content", "status"', 
      async () => {
        const [data] = await taskService.deleteTask(5,1);
        expect(data).to.be.includes.all.keys('id', 'user_id', 'content', 'status');
      }
    );
  });
})