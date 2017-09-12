const daos = require('../daos');

// set email verified
module.exports = async function (req, res) {
  const { email, hashedPassword } = req.decoded;

  // this API is used for both verify email and change password
  if (!hashedPassword) {
    // FIXME: this can only be done by update cause 
    // we only want to update emailVerified field but not password

    res.status(200).json('Your email account is now verified. Congratulations!');
  } else {
    const user = await daos.User.get(userEmail.name);

    // TODO: use update
    await daos.User.put({
      hashedPassword,
      name: userEmail.name,
      email: userEmail.email,
      emailVerified: true,
    });

    res.status(200).json('Your password is updated. Congratulations! ');
  }
}
