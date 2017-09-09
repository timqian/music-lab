const AWS= require('aws-sdk');
const {AWS_ENDPOINT, AWS_ACCESS, AWS_SECRET} = require('../config');

AWS.config.update({
  accessKeyId: AWS_ACCESS,
  secretAccessKey: AWS_SECRET,
  region: "us-west-2",
  endpoint: AWS_ENDPOINT,
  signatureVersion: 'v4',
});

module.exports =  new AWS.DynamoDB.DocumentClient();
