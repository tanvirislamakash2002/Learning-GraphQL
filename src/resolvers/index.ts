import { Query } from "./Query.js";
import { Mutation } from "./Mutation/Mutation.js";
import { User } from "./User.js";
import { Post } from "./Post.js";
import { Profile } from "./Profile.js";

const resolvers = {
  ...Query,
  ...Mutation,
  User,
  Post,
  Profile
};

export default resolvers;