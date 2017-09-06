const createToken= require('../utils/createToken');
const { hashPassword }= require('../utils/crypts');
const sendMail= require('../utils/sendMail');
const config= require('../config');
const daos = require('../daos');

module.exports =  async function(req, res) {

  const { email, password } = req.body;
  // const user = await User.findOne( { email } );
  const userEmail = await daos.Email.get(email);
  const user = await daos.User.get(userEmail.name);

  if (!user) {
    res.status(400).json({ success: false, message: config.USER_MESSAGE.USER_NOT_FOUND });
  } else {
    const hashedPassword = await hashPassword(password);
    const token = createToken({ email:userEmail.email, hashedPassword }, config.EMAIL_TOKEN_EXPIRES_IN);
    const verifyAddress =
      `${config.API_URL}/email_verification/?token=${token}`;
    const content = `<a href="${verifyAddress}">
      Click to change your password.
    </a><br/> NOTE: don't click it if you did not want to change password`;

    // send mail asyncly
    sendMail(email, content).then(info => {
      console.log(`Email to ${email} sent: ` + info.response);
    }).catch((err) => {
      console.error(`Email to ${email} err:` + err);
    });

    res.status(200).json({ success: true, message: config.USER_MESSAGE.MAIL_WILL_SEND });

  }
}
