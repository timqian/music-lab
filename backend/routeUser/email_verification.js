const daos = require('../daos');

// set email verified
module.exports = async function (req, res) {
  const { email, hashedPassword } = req.decoded;
  const userEmail = await daos.UserEmail.get(email);
  if (!userEmail) {
    res.status(400).json('No user find for this email');
    return;
  }

  // this API is used for both verify email and change password
  if (!hashedPassword) {
    
    const updateRes = await daos.User.update({
      name: userEmail.name,
      emailVerified: true,
    })

    res.status(200).json('Your email account is now verified. Congratulations!');
  } else {
    const user = await daos.User.get(userEmail.name);

    const updateRes = await daos.User.update({
      name: userEmail.name,
      hashedPassword,
      emailVerified: true,
    });


    res.status(200).json('Your password is updated. Congratulations! ');
  }
}
