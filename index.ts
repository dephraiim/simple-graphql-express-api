import { ApolloServer } from "apollo-server-express";
import express from "express";
import { typeDefs } from "./Schema/TypeDefs";
import { resolvers } from "./Schema/Resolvers";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { DocumentNode } from "graphql";

async function startApolloServer(typeDefs: DocumentNode, resolvers: any) {
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
