const sinon = require('sinon');
const { expect } = require('chai');
const { describe, beforeEach, afterEach, it } = require('mocha');
const userService = require('../../services/userService');
const userController = require('../../controllers/userController');

describe('Insere um novo usuário a partir da controller', () => {
  const res = {};
  const req = {};
  
  beforeEach(async () => {
    req.body={
      username: "Nome Qualquer",
      password: "Senha Secreta"
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(userService, 'create').resolves('StringQualquer')
  });

  afterEach(async () => {
    userService.create.restore();
  });

  it('é chamado o método status com o código 201', async() => {
    await userController.create(req,res);
    expect(res.status.calledWith(201)).to.be.equal(true);
  });
  it('é chamado o método "json" passando um objeto', async () => {
    await userController.create(req,res);
    expect(res.json.calledWith(sinon.match.object)).to.be.equal(true);
  });
});