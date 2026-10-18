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
      return db.products.find(pd => pd.id === args.productId)
    },
    categories: () => db.categories,
    category: (parent: any, args: { categoryId: string }, context: any) => {
      return db.categories.find(category => category.id === args.categoryId)
    }
  },
  Product: {
    category: (parent: any, args: any, context: any) => {
      const result = db.categories.find(category => category.id === parent.categoryId)
      return result
    }
  }
};

export default resolvers;