const docClient = require('./docClient');
const errors = require('')

async function addUser(name, email, password) {
    const getUserRes = await docClient.get({
        TableName: 'Users',
        Key: { name },
    }).promise();

    const getEmailRes = await docClient.get({
        TableName: 'Emails',
        Key: { email },
    }).promise();

    if (getUserRes.Item) {
        throw new errors.
    } else if (getEmailRes.Item) {
        throw new errors.
    } else {
        console.log('going to add new user');
        await docClient.put({
            TableName: 'Users',
            Item: {
                name,
                password
            },
        }).promise();

        await docClient.put({
            TableName: 'Emails',
            Item: {
                email,
                name,
            },
        }).promise();
    }

    console.log(getUserRes, getEmailRes);
}

// try {
//     addUser('tim', 'a', 'b');
// } catch (err) {
    
// }

addUser('tim','a','b');


module.exports.addUser = addUser;