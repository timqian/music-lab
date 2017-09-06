// API design
const daos = require('dynamoDAO');

daos.User.get({
    name
});
// short for
docClient.get({
    TableName: 'Users',
    Key: {
        name
    }
});

daos.users.put({
    name,
    password,
});

// short for
docClient.put({
    TableName: 'Users',
    Key: {
        name,
        password
    }
})

user.query
user.update