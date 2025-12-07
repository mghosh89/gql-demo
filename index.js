import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './data/schema.js';
import resolvers from './data/resolvers.js';

const server = new ApolloServer({ 
  typeDefs, 
  resolvers });

async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 3030 },
  });

  console.log(`🚀 Server ready at: ${url}`);
}

startServer();
