import { Resolvers } from "../__generated__/resolvers-types.js";
import { productsSource } from "./productsSource.js";

// Resolver functions must be in a map that follows the same hierarchy and naming structure as the schema
// Learn more about writing resolver functions:  🔗 https://www.apollographql.com/docs/apollo-server/data/resolvers

export const Query: Resolvers = {
  Query: {
    // This resolver function takes the `id` argument and uses it to find the correct product to return
    product(_parent, { id }, _context) {
      // Learn more about how to fetch data from external data sources 🔗 https://www.apollographql.com/docs/apollo-server/data/fetching-data
      const product = productsSource.find((p) => String(p.id) === String(id));
      return product ? { ...product } : null;
    },
    products() {
      return productsSource.map((p) => ({ ...p }));
    },

    // Returns the currently authenticated user (or user by id for testing)
    users: async (parent: any, args: any, { prisma }: any) => {
      const users = await prisma.User.all();
      return users.map((user: any) => ({
        ...user,
        id: String(user.id),
      }));
    },

    posts: async (parent: any, args: any, { prisma }: any) => {
      return await prisma.Post.where({
        published: false
      }).orderBy((p: any) => p.createdAt.asc()).all()
    },

    me: async (parent: any, args: any, { prisma, userInfo }: any) => {
      return await prisma.User.first({
        id: userInfo.userId
      })
    },
    profile: async (parent: any, args: any, { prisma, userInfo }: any) => {
      return await prisma.Profile.first({
        userId: Number(args.userId)
      })
    },
  },
};
