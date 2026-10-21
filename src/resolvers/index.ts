import { Query } from "./Query.js";
import { Mutation } from "./Mutation/Mutation.js";
import { User } from "./User.js";

const resolvers = {
  ...Query,
  ...Mutation,
  User,
};

export default resolvers;