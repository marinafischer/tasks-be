const sinon = require('sinon');
const { expect } = require('chai');
const { describe, beforeEach, afterEach, it } = require('mocha');
const userService = require('../../services/userService');
const userModel = require('../../models/userModel');

describe('Busca um usuário pelo nome', () => {
  const userName = 'Marina';
  describe('Quando não encontra o usário informado', ()=>{
    const result = {};

    beforeEach(async () => {
      sinon.stub(userModel, 'getByUserName').resolves(result)
    });
  
    afterEach(async () => {
      userModel.getByUserName.restore();
    });
    
    it('retorna um objeto', async() => {
      const result = await userService.getByUsername(userName);
      expect(result).to.be.an('object');
    });
    it('o objeto está vazio', async() => {
      const result = await userService.getByUsername(userName);
      expect(result).to.be.an('object');
      expect(Object.keys(result).length).to.equal(0);
    });
  });

  describe('Quando encontra o usário informado', ()=>{
    const result = {
              "id": 1,
              "username": "Marina",
              "password": "sennhaSecreta"
            };

    beforeEach(async () => {
      sinon.stub(userModel, 'getByUserName').resolves(result)
    });
  
    afterEach(async () => {
      userModel.getByUserName.restore();
    });
    
    it('retorna um objeto', async() => {
      const result = await userService.getByUsername(userName);
      expect(result).to.be.an('object');
    });
    
    it('o objeto possue os atributos "id" e "username"', async() => {
      const result = await userService.getByUsername(userName);
      expect(result).to.be.includes.all.keys('id','username');
    });
  });
});