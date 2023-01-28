const express = require("express");

const { ApolloServer } = require("apollo-server-express");

const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const PORT = 3000;

const typesArray = loadFilesSync("./schemas/**/*", {
  extensions: ["graphql"],
});

const resolversArray = loadFilesSync("./resolvers/**/*.resolver*", {
  extensions: ["js"],
});

async function startApolloServer() {
  const app = express();
  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  });

  const server = new ApolloServer({
    schema,
  });

  await server.start();
  server.applyMiddleware({
    app,
    path: "/graphql",
  });

  app.listen(PORT, () => {
    console.log(`running graphql server on port ${PORT}...`);
  });
}

startApolloServer();
