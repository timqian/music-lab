import User from '../models/User';

// set email verified
export default async function(req, res) {
  const { name, hashedPassword } = req.decoded;

  const user = await User.findOne({ name });
  if ( !hashedPassword ) {
    user.verified = true;
    await user.save();

    res.status(200).json('Your email account is now verified. Congratulations!');
  } else {
    user.verified = true;
    user.password = hashedPassword;
    await user.save();

    res.status(200).json('Your password is updated. Congratulations! ');
  }


}
