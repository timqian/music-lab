var dynamodb = require('./dynamodb');

(async () =>{
    await dynamodb.createTable({
        TableName: "User",
        KeySchema: [{AttributeName: 'name', KeyType: 'HASH'}],
        AttributeDefinitions: [
            {AttributeName: 'name', AttributeType: 'S'},
            // {AttributeName: 'password', AttributeType: 'S'},
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits:5,
        }
    }).promise().catch(err => {
        console.log(err);
    });

    // ref: https://stackoverflow.com/questions/12920884/is-there-a-way-to-enforce-unique-constraint-on-a-property-field-other-than-the
    await dynamodb.createTable({
        TableName: 'UserEmail',
        KeySchema: [{AttributeName:'email', KeyType:'HASH'}],
        AttributeDefinitions: [
            {AttributeName: 'email', AttributeType: 'S'},
            // {AttributeName: 'name', AttributeType: 'S'},
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits:5,
        }
    }).promise().catch(err => {
        console.log(err);
    });

    // await dynamodb.createTable({
    //     TableName: 'Song',
    //     KeySchema: [
    //         {AttributeName: 'user', KeyType:'HASH'},
    //         {AttributeName: 'name', KeyType: 'RANGE'},
    //     ],
    //     AttributeDefinitions: [
    //         {AttributeName: 'user', AttributeType: 'S'},
    //         {AttributeName: 'name', AttributeType: 'S'},
    //     ],
    //     ProvisionedThroughput: {
    //         ReadCapacityUnits: 5,
    //         WriteCapacityUnits: 5,
    //     }
    // }).promise().catch(err => {
    //     console.log(err);
    // });
})();

// dynamodb.createTable({
//     TableName: "Users",
//     KeySchema: [{ AttributeName: "name", KeyType: "HASH" }],
//     GlobalSecondaryIndexes: [ // optional (list of GlobalSecondaryIndex)
//         {
//             IndexName: 'email',
//             KeySchema: [
//                 { AttributeName: 'email', KeyType: 'HASH',},
//             ],
//             Projection: { // attributes to project into the index
//                 ProjectionType: 'INCLUDE', // (ALL | KEYS_ONLY | INCLUDE)
//                 NonKeyAttributes: [ // required / allowed only for INCLUDE
//                     'email',
//                     // ... more attribute names ...
//                 ],
//             },
//             ProvisionedThroughput: { // throughput to provision to the index
//                 ReadCapacityUnits: 1,
//                 WriteCapacityUnits: 1,
//             },
//         },
//         // ... more global secondary indexes ...
//     ],
//     AttributeDefinitions: [
//         { AttributeName: "name", AttributeType: "S" },
//         { AttributeName: "email", AttributeType: "S" }
//     ],
//     ProvisionedThroughput: {
//         ReadCapacityUnits: 10,
//         WriteCapacityUnits: 10
//     }
// }).promise().then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// });