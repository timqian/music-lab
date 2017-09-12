const daos = require('../daos');

// set email verified
module.exports = async function (req, res) {
  const { email, hashedPassword } = req.decoded;

  // const user = await User.findOne({ name });
  const userEmail = await daos.Email.get(email);

  // this API is used for both verify email and change password
  if (!hashedPassword) {
    // user.verified = true;
    // await user.save();
    // TODO: use update instead of put
    await daos.Email.put({
      email: userEmail.email, 
      name: userEmail.name,
      verified: true
    });

    res.status(200).json('Your email account is now verified. Congratulations!');
  } else {
    // user.verified = true;
    // user.password = hashedPassword;
    // await user.save();
    await daos.Email.put({
      email: userEmail.email, 
      name: userEmail.name,
      verified: true
    });

    const user = await daos.User.get(userEmail.name);
    await daos.User.put({
      hashedPassword,
      name: userEmail.name,
    });

    res.status(200).json('Your password is updated. Congratulations! ');
  }
}
