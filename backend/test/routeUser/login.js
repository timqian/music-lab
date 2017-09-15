const axios = require('axios');
const assert = require('assert');
const config = require('../../config');

module.exports = function login() {
  describe('POST /login', function () {

    it('name login', function () {
      return axios.post(`${config.API_URL}/user/login`, {
        name: 'tim',
        password: '123',
      }).then((res) => {
        assert.equal(res.status, 200);
      });
    });

    it('email login', function () {
      return axios.post(`${config.API_URL}/user/login`, {
        email: `${config.EMAIL_RECEIVING_VERIFICATION}`,
        password: '123',
      }).then((res) => {
        assert.equal(res.status, 200);
      });
    });

    it('wrong user name', function () {
      return axios.post(`${config.API_URL}/user/login`, {
        name: `tim${Date.now()}`,
        password: '123',
      }).then((res) => {
        console.log('should fail');
        throw res;
      }).catch((err) => {
        assert.equal(err.response.status, 400);
      });
    });

    it('wrong email', function () {
      return axios.post(`${config.API_URL}/user/login`, {
        email: `tim${Date.now()}@qq.com`,
        password: '123',
      }).then((res) => {
        console.log('should fail');
        throw res;
      }).catch((err) => {
        assert.equal(err.response.status, 400);
      });
    });

    it('wrong password with name', function () {
      return axios.post(`${config.API_URL}/user/login`, {
        name: `tim`,
        password: '1234',
      }).then((res) => {
        console.log('should fail');
        throw res;
      }).catch((err) => {
        assert.equal(err.response.status, 400);
      });
    });

    it('wrong password with email', function () {
      return axios.post(`${config.API_URL}/user/login`, {
        email: `${config.EMAIL_RECEIVING_VERIFICATION}`,
        password: '1234',
      }).then((res) => {
        console.log('should fail');
        throw res;
      }).catch((err) => {
        assert.equal(err.response.status, 400);
      });
    });
  });
}
