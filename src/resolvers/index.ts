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
    category: ({ categoryId }: any, args: any, context: any) => {
      return db.categories.find(category => category.id === categoryId)
    },
    reviews: ({ id }: any, args: any, context: any) => {
      return db.reviews.filter(review => review.productId === id)
    }
  },
  Category: {
    products: ({ id }: any, args: any, context: any) => {
      return db.products.filter(product => product.categoryId === id)
    }
  }
};

export default resolvers;