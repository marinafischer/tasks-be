const { assert } = require('chai');
const taskModel = require('../../../models/taskModel');
const { describe, it } = require('mocha');

describe('Deleta uma função através do seu id', () => {

  it('A função putTask é uma função', async()=>{
    assert.isFunction(taskModel.putTask)
  });
});