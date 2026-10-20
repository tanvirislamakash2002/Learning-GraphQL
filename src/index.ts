import 'temporal-polyfill/full/global';
import { readFileSync } from "fs";
import gql from "graphql-tag";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { ApolloServer } from "@apollo/server";
import {
  startStandaloneServer,
} from "@apollo/server/standalone";
import resolvers from "./resolvers/index.js";
import { typeDefs } from "./schema.js";

const port = "4001";

async function main() {

  const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
  });
  const { url } = await startStandaloneServer(server, {
    listen: { port: Number.parseInt(port) },
  });

  console.log(`🚀  Subgraph ready at ${url}`);
}

main();
