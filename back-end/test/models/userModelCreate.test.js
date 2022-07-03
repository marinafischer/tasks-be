const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const userModel = require('../../models/userModel');
const { describe, beforeEach, afterEach, it } = require('mocha');

describe('Insere um novo usuário no banco de dados', () => {
  const payload = { username:'Nome Usuario', password:'Senha Secreta'};
  const resultExecute = [{"inserId":5}]

  beforeEach(async () => {
    sinon.stub(connection, 'execute').resolves(resultExecute)
  });

  afterEach(async () => {
    connection.execute.restore();
  });
  it('retorna um objeto', async() => {
    const result = await userModel.create(payload);
    expect(result).to.be.an('object')
  });
  it('o objeto contém as chaves "id" e "username"', async() => {
    const result = await userModel.create(payload);
    expect(result).to.be.includes.all.keys('id', 'username');
  });
})