const User = require('../models/User'); // get our mongoose model
const createToken = require('../utils/createToken');
const { checkPassword } = require('../utils/crypts');
const config = require('../config');
const daos = require('../daos');
/**
 * {
 *    email, // optional: provide email or name but not both
 *    name, // optional
 *    password,
 * }
 */
module.exports = async function (req, res) {
  const { email, password } = req.body;
  let { name } = req.body;
  // const user = await User.findOne({ $or: [ { name }, { email } ] });

  if (email) {
    const userEmail = await daos.Email.get(email);
    console.log('$$$$', userEmail);
    if (!userEmail) {
      res.status(400).json({ success: false, message: config.USER_MESSAGE.EMAIL_NOT_FOUND });
    }
    name = userEmail.name;
    console.log('$$$$', name);
  }

  const user = await daos.User.get(name);
  console.log('$$$$', user);

  if (!user) {
    res.status(400).json({ success: false, message: config.USER_MESSAGE.USER_NOT_FOUND });
  } else if (user) {

    // check if password matches
    const result = await checkPassword(password, user.hashedPassword);
    if (!result) {
      res.status(400).json({ success: false, message: config.USER_MESSAGE.WRONG_PASSWORD });
    } else {
      // if user is found and password is right
      // create a token
      const payload = { name: user.name, verified: user.verified };
      const token = createToken(payload, config.CLIENT_TOKEN_EXPIRES_IN);

      // return the information including token as JSON
      res.status(200).json({
        success: true,
        message: `${config.USER_MESSAGE.LOGIN_SUCCESS} ${user.name}`,
        name: user.name,
        token: token
      });
    }
  }
}
