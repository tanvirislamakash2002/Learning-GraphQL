import { Resolvers, MutationCreateProductArgs, MutationSignupArgs, MutationSigninArgs } from "../__generated__/resolvers-types.js";
import { productsSource } from "./productsSource.js";
import { ApolloError } from "apollo-server-errors";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { jwtHelper } from "../utils/jwtHelper.js";
import config from "../config/index.js";

export const Mutation: Resolvers = {
  Mutation: {
    createProduct(
      _parent,
      { input }: MutationCreateProductArgs,
      _context
    ) {
      if (!input.name || input.name.trim() === "") {
        throw new ApolloError("Product name is required.", "BAD_USER_INPUT");
      }
      if (!input.description || input.description.trim() === "") {
        throw new ApolloError("Product description is required.", "BAD_USER_INPUT");
      }
      if (productsSource.some((p) => p.name === input.name)) {
        throw new ApolloError("A product with this name already exists.", "BAD_USER_INPUT");
      }
      const newId =
        productsSource.length > 0
          ? String(Math.max(...productsSource.map((p) => Number(p.id))) + 1)
          : "1";
      const newProduct = {
        id: newId,
        name: input.name,
        description: input.description,
      };
      productsSource.push({ ...newProduct });
      return { ...newProduct };
    },

    // new 
    signup: async (
      _parent: any,
      args: MutationSignupArgs,
      { prisma }: any
    ) => {
      const isExist = await prisma.User.first({
        email: args.email
      })

      if (isExist) {
        return {
          userError: "Already this email is registered!",
          token: null
        }
      }
      const hashedPassword = await bcrypt.hash(args.password, 12)
      const newUser = await prisma.User.create({
        name: args.name,
        email: args.email,
        password: hashedPassword
      });

      if (args.bio) {
        await prisma.Profile.create({
          bio: args.bio,
          userId: newUser.id
        }
        )
      }

      const token = await jwtHelper.generateToken({ userId: newUser.id }, config.jwt.secret as string)
      return {
        userError: null,
        token
      };
    },
    signin: async (
      parent: any,
      args: MutationSigninArgs,
      { prisma }: any
    ) => {
      const user = await prisma.User.first({
        email: args.email
      })

      if (!user) {
        return {
          userError: "User not found!",
          token: null
        }
      }

      const correctPass = await bcrypt.compare(args.password, user.password)

      if (!correctPass) {
        return {
          userError: "Incorrect Password!",
          token: null
        }
      }

      const token = await jwtHelper.generateToken({ userId: user.id }, config.jwt.secret as string)

      return {
        userError: null,
        token
      }
    },
    addPost: async (parent: any, args: any, { prisma }: any) => {

    }
  },
};
