var { dynamoDb } = require('../daos/db');
(async () => {

    await dynamoDb.deleteTable({
        TableName: "User"
    }).promise().catch(err => {
        console.log(err);
    });


    await dynamoDb.deleteTable({
        TableName: "UserEmail"
    }).promise().catch(err => {
        console.log(err);
    });

    await dynamoDb.deleteTable({
        TableName: "Song"
    }).promise().catch(err => {
        console.log(err);
    });

    console.log('tabels deleted');
})();

