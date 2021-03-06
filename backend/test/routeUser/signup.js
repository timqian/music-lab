const axios = require('axios');
const assert = require('assert');
const config = require('../../config');


module.exports = function login() {

  describe('POST /signup', function () {

    // it('signup success', function () {
    //   return axios.post(`${config.API_URL}/user/signup`, {
    //     email: `${Date.now()}@qq.com`,
    //     name: `tim${Date.now()}`,
    //     password: '123',
    //   }).then((res) => {
    //     assert.equal(res.status, 200);
    //   });
    // });

    it('email taken', function () {
      return axios.post(`${config.API_URL}/user/signup`, {
        email: `${config.EMAIL_RECEIVING_VERIFICATION}`,
        name: `timq`,
        password: '123',
      }).then((res) => {
        throw res;
        // console.log(res);
      }).catch((err) => {
        assert.equal(err.response.status, 400);
      });
    });

    it('name taken', function () {
      return axios.post(`${config.API_URL}/user/signup`, {
        email: 't92@qq.com',
        name: `tim`,
        password: '123',
      }).then((res) => {
        throw res;
        // console.log(res);
      }).catch((err) => {
        assert.equal(err.response.status, 400);
      });
    });

  });
}
