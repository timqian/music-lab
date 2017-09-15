
const { docClient } = require('./db');

async function get(name) {
    const obj = await docClient.get({
        TableName: 'User',
        Key: { name },
    }).promise();

    return obj.Item;
}

function put({ name, email, emailVerified, hashedPassword }) {
    return docClient.put({
        TableName: 'User',
        Item: {
            name,
            email,
            emailVerified,
            hashedPassword,
        },

    }).promise();
}

function update({ name, email, emailVerified, hashedPassword }) {

    const emailExp = email ? 'email = :email,' : '';
    const verifiedExp = emailVerified ? 'emailVerified = :emailVerified,' : '';
    const passExp = hashedPassword ? 'hashedPassword = :hashedPassword,' : '';

    const UpdateExpression = `set ${emailExp}${verifiedExp}${passExp}`.slice(0, -1);

    const ExpressionAttributeValues = {
        ":email": email,
        ":emailVerified": emailVerified,
        ":hashedPassword": hashedPassword,
    };

    return docClient.update({
        TableName: 'User',
        Key: { name },
        UpdateExpression,
        ExpressionAttributeValues,
        ReturnValues: "UPDATED_NEW",
    }).promise();
}

module.exports = {
    get,
    put,
    update,
}