const createToken = require('../utils/createToken');
const sendMail = require('../utils/sendMail');
const { hashPassword } = require('../utils/crypts');
const config = require('../config');
const daos = require('../daos');


module.exports = async function (req, res) {
  const { email, name, password } = req.body;

  if (!name || !password || !email) {
    res.status(400).json({ success: false, message: 'Should provide email, name and password', });
    return;
  }

  // see if name or email is occupied
  const user = await daos.User.get(name);
  const userEmail = await daos.Email.get(email);

  if (!user && !userEmail) {
    const hashedPassword = await hashPassword(password);
    await daos.User.put({ 
      name, 
      hashedPassword 
    });

    const verified = false;
    await daos.Email.put({
      email,
      name,
      verified: false,
    });

    console.log('____User saved');

    // send verification email
    const token = createToken({ name });
    const verifyAddress =
      `${config.API_URL}/user/email_verification/?token=${token}`;
    const content =
      `<a href="${verifyAddress}">
         Click to verify your email address.
      </a>`;

    // send mail asyncly
    sendMail(email, content).then(info => {
      console.log(`Email to ${email} sent: ` + info.response);
    }).catch((err) => {
      console.error(`Email to ${email} err:` + err);
    });

    res.status(200).json({ success: true, message: config.USER_MESSAGE.SIGNUP_SUCCESS });

  } else {
    console.log('____User not saved, name or email has been taken');
    res.status(400).json({ success: false, message: config.USER_MESSAGE.NAME_TAKEN, });
  }
}
