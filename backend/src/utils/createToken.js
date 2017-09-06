const jwt= require('jsonwebtoken');
const config= require('../config');

module.exports =  function(payload, expiresIn) {
  return jwt.sign(payload, config.SECRET, { expiresIn });
}
