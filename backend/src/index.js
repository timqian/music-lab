import router from './router';
import verifyToken from './utils/verifyToken';
import config from './config';

export default {
  init: () => {

    console.log(config);
  },

  authRouter: router,

  verifyToken
};
