import { db } from "../prisma/db.js";

export const User = {
  posts: async (parent: any, args: any, { prisma, userInfo }: any) => {
    const isMyProfile = parent.id === userInfo.userId
    if (isMyProfile) {
      return await prisma.Post.where({ authorId: parent.id }).all();
    }
    else {
      return await prisma.Post.where({
        authorId: parent.id,
        published: true
      }).all();
    }
  },
};
