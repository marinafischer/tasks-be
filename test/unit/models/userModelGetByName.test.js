const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');
const userModel = require('../../../models/userModel');
const { describe, beforeEach, afterEach, it } = require('mocha');

describe('Busca um usuário pelo nome', () => {
  const userName = 'Marina';
  
  describe('Quando não encontra o usário informado', ()=>{
    const resultExecute = [[]];

    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(resultExecute)
    });
  
    afterEach(async () => {
      connection.execute.restore();
    });
  
    it('retorna um objeto', async() => {
      const result = await userModel.getByUserName(userName);
      expect(result).to.be.an('object')
    });
    it('o objeto retornado está vazio', async() => {
      const result = await userModel.getByUserName(userName);
      expect(Object.keys(result).length).to.equal(0)
    });
  });

  describe('Quando encontra o usário informado', ()=>{
    const resultExecute = [[
      {
        "id": 1,
        "username": "Marina",
        "password": "sennhaSecreta"
      }
    ]];

    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(resultExecute)
    });
  
    afterEach(async () => {
      connection.execute.restore();
    });
  
    it('retorna um objeto', async() => {
      const result = await userModel.getByUserName(userName);
      expect(result).to.be.an('object')
    });
    it('o objeto possue os atributos "id" e "username"', async() => {
      const result = await userModel.getByUserName(userName);
      expect(result).to.be.includes.all.keys('id','username');
    });
  });
});