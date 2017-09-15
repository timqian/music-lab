// Used to make sure uniqueness of user email
// TODO: 1. change dao name to UserEmail
//       2. move emailVerified to userDao
const {docClient} = require('./db');

async function get(email) {
    const obj = await docClient.get({
        TableName: 'UserEmail',
        Key: { email },
    }).promise();

    return obj.Item;
}

function put({ email, name }) {
    return docClient.put({
        TableName: 'UserEmail',
        Item: {
            email,
            name,
        },
    }).promise();
}

module.exports = {
    get,
    put
}
