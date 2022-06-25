const sinon = require('sinon');
const { expect } = require('chai');
const { describe, beforeEach, afterEach, it } = require('mocha');
const userService = require('../../../services/userService');
const userModel = require('../../../models/userModel');

describe('Insere um novo usuário', () => {
  const payload = { username:'Nome Usuario', password:'Senha Secreta'};
  const resultCreate = [{id:5, username: 'Nome Usuario'}]

  beforeEach(async () => {
    sinon.stub(userModel, 'create').resolves(resultCreate)
  });

  afterEach(async () => {
    userModel.create.restore();
  });
  it('retorna uma string', async() => {
    const result = await userService.create(payload);
    expect(result).to.be.an('string')
  });
})