const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = [`
type Query {
  hello: String,
  goodbye: String
}

schema {
  query: Query
}`];

const resolvers = {
  Query: {
    hello(root) {
      return 'world';
    },
    goodbye(root) {
      return 'forever';
    }
  }
};

const schema = makeExecutableSchema({typeDefs, resolvers});
const app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
app.listen(4000, () => console.log('browse at localhost:4000/graphiql'));