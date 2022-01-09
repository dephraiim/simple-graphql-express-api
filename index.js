const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const { typeDefs } = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/Resolvers");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await server.start();
  server.applyMiddleware({ app });
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`);

  app.listen("3000", () => {
    console.log("Hello....");
  });
}

startApolloServer(typeDefs, resolvers);
