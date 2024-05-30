import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose';
import { makeExecutableSchema } from '@graphql-tools/schema';

const MONGO_URI = `mongodb://localhost:27017/eatly`

import typeDefs from './src/graphql/schemas/typeDefs.js';
import resolvers from './src/graphql/resolvers/resolvers.js';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

// server setup
const server = new ApolloServer({
  schema
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(`Db Connected`);
  })
  .catch(err => {
    console.log(err.message);
  });

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});