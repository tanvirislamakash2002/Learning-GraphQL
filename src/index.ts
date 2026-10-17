import gql from "graphql-tag";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { ApolloServer } from "@apollo/server";
import {
  startStandaloneServer,
} from "@apollo/server/standalone";
import resolvers from "./resolvers";
import { db } from "./data/db";

const port = "4001";

async function main() {
  let typeDefs = gql`
  type Product {
    id: ID!
    name: String
    image: String
    description: String
    price: Float
    quantity: Int
    onStock: Boolean
    category: String
  }
  type Query {
    products: [Product]
  }`;

  const resolvers = {
    Query: {
      products: () => db.products
    }
  }
  const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
  });
  const { url } = await startStandaloneServer(server, {
    listen: { port: Number.parseInt(port) },
  });

  console.log(`🚀  Subgraph ready at ${url}`);
}

main();
