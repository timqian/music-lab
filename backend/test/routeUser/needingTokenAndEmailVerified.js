const axios = require('axios');
const assert = require('assert');
const config = require('../../config');

module.exports = function password_reset() {

  let token = '';

  describe('GET /needingTokenAndEmailVerified', function () {

    before(async function() {
      const loginRes = await axios.post(`${config.API_URL}/user/login`, {
        name: 'tim',
        password: '123',
      }).catch((res) => { throw res.data; });

      token = loginRes.data.token;
    });

    it('should need token', function () {
      return axios.get(`${config.API_URL}/needingTokenAndEmailVerified`)
        .then((res) => {
          throw res;
        }).catch((err) => {
          // console.log(res.data);
          assert.equal(err.response.status, 403);
        });
    });

    it('should need email verified', function () {
      return axios.get(`${config.API_URL}/needingTokenAndEmailVerified`, {params: {token}})
        .then((res) => { throw res; })
        .catch((err) => {
          assert.equal(err.response.status, 400);
        });
    });

    // it('should success', function  () {
    //   return User.findOne({name: 'tim'}, (err, user) => {
    //     user.verified = true;
    //     user.save((err) => {
    //       if (err) throw err;
    //
    //     })
    //   })
    // });

  });
}
