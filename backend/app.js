const userRouter = require('./userRouter');
const verifyToken = require('./middleware/verifyToken');
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const { PORT = 3000 } = process.env;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(morgan('dev'));
app.use('/user', userRouter);

// protecting api
app.get('/needingToken', verifyToken, (req, res) => {

  // send back the jwt claim directly
  const claim = req.decoded;
  res.status(200).json(claim);
});

app.get('/needingTokenAndEmailVerified', verifyToken, (req, res) => {
  if (req.decoded.verified) {
    res.status(200).json(req.decoded);
  } else {
    res.status(400).json({
      success: false,
      message: 'Please verify your email before doing this!'
    });
  }
});


app.listen(PORT);
console.log('API magic happens at http://localhost:', PORT);

// handle unhandled promise rejection
// https://nodejs.org/api/process.html#process_event_unhandledrejection
process.on('unhandledRejection', function (reason, p) {
  console.log('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
  // application specific logging, throwing an error, or other logic here
});
