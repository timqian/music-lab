> up url: https://0txotn5h18.execute-api.us-west-2.amazonaws.com/development/

## Development
```bash
# start dynamodb locally
cd ~/dynamodb_local_latest
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb -inMemory
```

## Tools used

- [Up](https://github.com/apex/up/blob/master/docs/getting-started.md): For deploy backend to aws lambda

## use node 8 on lambda

https://github.com/apex/up-examples/tree/master/oss/node-8


## TODO:

- [x] replace mongo with dynamo
- [x] use node8 on lambda
- [x] write config for lambda (danamodb url etc.)
- [x] move email verified attribute to user dao
- [x] add update method for user
- [ ] add location of user
- [ ] try catch in router so server can always respond
- [ ] return message shorter(`{success: false, message: 'abc'}` => `'abc'`)
- [ ] add song!
- [ ] send mail block event loop
- [ ] update test flow
- [ ] How to do follow?: One may want to see his followers and who are he following.


## Good pratise

- add a uuid for error


