const chai = require('chai');
const sinon = require('sinon');
const { describe, beforeEach, afterEach, it } = require('mocha');
const { expect } = chai;
const chaiHttp = require('chai-http');
const server = require('../../app');
const userModel = require('../../models/userModel')
const resultCreate = [{id:3, username: 'Ana Maria'}];
const resultGetBy = {"id": 1,"username": "Marina Fischer", "password": "sennhaSecreta"};

chai.use(chaiHttp);

describe('Rota post /user', () => {

    beforeEach(() => {
      sinon.stub(userModel, 'create')
          .resolves(resultCreate);
      sinon.stub(userModel, 'getByUserName')
          .resolves(resultGetBy);
    });

    afterEach(() => {
      userModel.create.restore();
      userModel.getByUserName.restore();
    })

    describe('Consulta a lista de pessoas usuárias e retorna um token', () => {
        let response;

        beforeEach(async () => {
          response = await chai
          .request(server)
          .post('/user')
          .send({username:'Marina Fischer', "password": "sennhaSecreta"});
        });

        it('A requisição POST rtorna um ojbeto', () => {
              expect(response).to.be.a('object');
            }
        );

        it('Essa requisição deve retornar código de status 201', () => {
            expect(response).to.have.status(200);
        });
    });
});