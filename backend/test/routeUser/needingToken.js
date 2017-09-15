const axios = require('axios');
const assert = require('assert');
const config = require('../../config');

module.exports = function password_reset() {
  describe('GET /needingToken', function () {

    let token = '';

    before(async function() {
      const loginRes = await axios.post(`${config.API_URL}/user/login`, {
        name: 'tim',
        password: '123',
      }).catch((err) => { throw err.response.data;});

      token = loginRes.data.token;
    });

    it('should need token', function () {
      return axios.get(`${config.API_URL}/needingToken`)
        .then((res) => { throw res; })
        .catch((err) => {
          assert.equal(err.response.status, 403);
        });
    });

    it('should success', function () {
      return axios.get(`${config.API_URL}/needingToken`, {params: {token}})
        .then((res) => {
          assert.equal(res.status, 200);
        });
    });

  });
}
