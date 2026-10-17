import { Query } from "./Query";
import { Mutation } from "./Mutation";
import { db } from "../data/db";

const resolvers = {
  ...Query,
  ...Mutation,

  // new 
  Query: {
    products: () => db.products,
    product: (parent: any, args: { productId: string }, context: any) => {
      const result = db.products.find(pd => pd.id === args.productId)
      return result
    }
  }
};

export default resolvers;