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
import { prisma } from './prisma/db.js';
import { jwtHelper } from './utils/jwtHelper.js';
interface Context {
  prisma: typeof prisma;
}
const port = "4001";

async function main() {

  const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
  });
  const { url } = await startStandaloneServer(server, {
    listen: { port: Number.parseInt(port) },
    context: async ({ req }): Promise<Context> => {
      const userInfo = await jwtHelper.getUserInfoFromToken(req.headers.authorization as string)
      return {
        prisma
      }
    }
  });

  console.log(`🚀  Subgraph ready at ${url}`);
}

main();
