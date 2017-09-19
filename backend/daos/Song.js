
const { docClient } = require('./db');

async function get(author, name) {
    const obj = await docClient.get({
        TableName: 'Song',
        Key: { author, name },
    }).promise();

    return obj.Item;
}

async function getAll(author) {
    const obj = await docClient.query({
        TableName: 'Song',
        KeyConditionExpression: '#author = :author',
        ExpressionAttributeNames: {
            '#author': 'author'
        },
        ExpressionAttributeValues: {
            ':author': author
        }
    }).promise();

    return obj.Items;
}

function put({ author, name, notes2D }) {
    return docClient.put({
        TableName: 'Song',
        Item: {
            author,
            name,
            notes2D,
        },
    }).promise();
}

function del({ author, name }) {
    return docClient.delete({
        TableName: 'Song',
        Key: {author, name},
    }).promise();
}

module.exports = {
    get,
    put,
    getAll,
    del,
}