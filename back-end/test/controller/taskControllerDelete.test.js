const sinon = require('sinon');
const { expect } = require('chai');
const { describe, beforeEach, afterEach, it } = require('mocha');
const connection = require('../../models/connection');
const taskService = require('../../services/taskService');
const taskController = require('../../controllers/taskController');

describe('Atualiza uma tarefa conforme dados informados na requisição', () => {
  const res = {};
  const req = {};
  const next =()=>{};
  const resolve = [
    {
      id: 5,
      user_id:1,
      content: 'um conteúdo qualquer',
      status: 1
    }
  ]
  
  beforeEach(async () => {
    req.user = {id:1}
    req.params= {id:5}
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(taskService, 'deleteTask').resolves(resolve);
    sinon.stub(connection, 'execute').resolves(resolve);
  });

  afterEach(async () => {
    taskService.deleteTask.restore();
    connection.execute.restore();
  });

  it('é chamado o método status com o código 200', async() => {
    await taskController.delTask(req,res, next);
    expect(res.status.calledWith(200)).to.be.equal(true);
  });
  it('é chamado o método "json" passando um array', async () => {
    await taskController.delTask(req,res,next);
    expect(res.json.calledWith(sinon.match.object)).to.be.equal(true);
  });
});