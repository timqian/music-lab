const axios = require('axios');
const assert = require('assert');
const config = require('../../config');

module.exports = function password_reset() {

  describe('POST /password_reset', function () {

    it('reset success', () => {
      return axios.post(`${config.API_URL}/user/password_reset`, {
        email: `${config.EMAIL_RECEIVING_VERIFICATION}`,
        password: '123',
      }).then((res) => {
        assert.equal(res.status, 200);
      });
    });
  });
}
