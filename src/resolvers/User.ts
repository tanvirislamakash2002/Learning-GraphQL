import { db } from "../prisma/db.js";

export const User = {
  // Temporal.Instant (returned by Prisma 8) cannot be implicitly coerced to a
  // string by GraphQL — it intentionally forbids .valueOf(). Call .toString()
  // explicitly to get the ISO 8601 representation.
  createdAt: (parent: any) => parent.createdAt?.toString() ?? null,

  posts: async (parent: any) => {
    if (Array.isArray(parent.posts)) {
      return parent.posts;
    }
    return await db.orm.public.Post.where({ authorId: parent.id }).all();
  },
};
