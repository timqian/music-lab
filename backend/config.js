// used to store config

const config = {
  APP_NAME: 'Yiin Cloud',
  SECRET: 'ilovemusic', // jwt secret
  API_URL: process.env.ON_LAMBDA ? 'https://0txotn5h18.execute-api.us-west-2.amazonaws.com/development' : 'http://localhost:3000',
  AWS_ENDPOINT: process.env.ON_LAMBDA ? 'https://dynamodb.us-west-2.amazonaws.com' : "http://localhost:8000",
  AWS_ACCESS: 'AKIAIFS5D6E2GKOPIOIA',
  AWS_SECRET: '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',
  CLIENT_TOKEN_EXPIRES_IN: 24 * 60 * 60 * 30,          // client token expires time TODO: test expiring
  EMAIL_TOKEN_EXPIRES_IN: 24 * 60 * 60,           // email token expires time

  EMAIL_RECEIVING_VERIFICATION: 'timqian92@qq.com', // used for test

  EMAIL_SENDER: { // used to send mail by nodemailer
    service: 'Gmail',
    auth: {
      user: 'yiin.cloud@gmail.com',
      pass: 'yiinCloud931127',
    }
  },

  USER_MESSAGE: { // message sent to client
    MAIL_WILL_SEND: 'mail will be send soon',
    SIGNUP_SUCCESS: 'signup success',
    NAME_TAKEN: 'Name or email has been taken',
    USER_NOT_FOUND: 'User not found',
    EMAIL_NOT_FOUND: 'Email not found',
    WRONG_PASSWORD: 'wrong password',
    LOGIN_SUCCESS: 'Enjoy your token!',
    NEED_EMAIL_VERIFICATION: 'You need to verify your email first',
  },

};

module.exports = config;
