const router= require('./router');
const verifyToken= require('./utils/verifyToken');
const config= require('./config');

module.exports =  {
  init: () => {

    console.log(config);
  },

  authRouter: router,

  verifyToken
};
