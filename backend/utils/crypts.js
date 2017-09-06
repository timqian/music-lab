const { hash, compare }= require('bcrypt-nodejs');
const promisify= require('es6-promisify');

// const genSaltAsync = promisify(genSalt);
const hashAsync = promisify(hash);
const compareAsync = promisify(compare);

async function hashPassword(password) {
  // const salt = await genSaltAsync(10);
  const hash = await hashAsync(password,null,null);
  return hash;
}

async function checkPassword(password, hash) {
  const res = await compareAsync(password, hash);
  return res;
}

module.exports = {
  hashPassword,
  checkPassword,
}