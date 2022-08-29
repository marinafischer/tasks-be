const jwt = require('jsonwebtoken');
const secret = 'minhasenhasecreta';
// teste
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) next({ status: 401, message: 'Token not found' });
  try {
    const decoded = jwt.verify(authorization, secret);
    req.user = decoded.data;
    next();
  } catch (error) {
    next({ status: 401, message: 'Expired or invalid token' });
  }
};