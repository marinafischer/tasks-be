const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const getToken = (data) => {
  const secret = 'minhasenhasecreta';
  const jwtConfig = {
    expiresIn: '12h',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data }, secret, jwtConfig);
  return token;
};

module.exports = getToken;
