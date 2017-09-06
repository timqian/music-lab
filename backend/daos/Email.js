
const docClient = require('./docClient');

async function get(email) {
    const obj = await docClient.get({
        TableName: 'Email',
        Key: { email },
    }).promise();

    return obj.Item;
}

function put({email, name, verified}) {
    return docClient.put({
        TableName: 'Email',
        Item: {
            email,
            name,
            verified,
        },
    }).promise();
}

module.exports = {
    get,
    put
}
