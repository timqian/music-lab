// used to store config

const testConfig = {
  BASEURL: process.env.ON_LAMBDA ? 'https://0txotn5h18.execute-api.us-west-2.amazonaws.com/development' : 'http://localhost:3000',               // api url
  EMAIL_RECEIVING_VERIFICATION: 'timqian92@qq.com',
};

module.exports = testConfig;
