const { assert } = require('chai');
const taskModel = require('../../models/taskModel');
const { describe, it } = require('mocha');

describe('Atualiza uma tarefa através do seu id', () => {

  it('A função delTask é uma função', async()=>{
    assert.isFunction(taskModel.delTask)
  });
});