
const docClient = require('./docClient');

async function get(name) {
    const obj = await docClient.get({
        TableName: 'User',
        Key: { name },
    }).promise();
    return obj.Item;
}

function put({ name, hashedPassword }) {
    return docClient.put({
        TableName: 'User',
        Item: { name, hashedPassword },
    }).promise();
}

module.exports = {
    get,
    put,
}