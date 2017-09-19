const fs = require('fs');
const path = require('path');
const graphqlHTTP = require('express-graphql');
const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools');
const { maskErrors } = require('graphql-errors');

const typeDefs = fs.readFileSync(path.join(__dirname, "typeDefs.graphql"), "utf8");
const resolvers = require('./resolvers');

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

// Used to mock api
// addMockFunctionsToSchema({ schema });
maskErrors(schema);

module.exports = graphqlHTTP({
    schema,
    graphiql: true,
});
