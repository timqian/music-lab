var dynamodb = require('./dynamodb');
(async () => {

    await dynamodb.deleteTable({
        TableName: "User"
    }).promise().catch(err => {
        console.log(err);
    });


    await dynamodb.deleteTable({
        TableName: "UserEmail"
    }).promise().catch(err => {
        console.log(err);
    });

})();

