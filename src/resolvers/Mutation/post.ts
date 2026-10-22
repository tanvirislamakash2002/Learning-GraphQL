import { PostPayload } from "../../__generated__/resolvers-types"
import { checkUserAccess } from "../../utils/checkUserAccess.js"

export const postResolvers = {
    addPost: async (parent: any, { post }: any, { prisma, userInfo }: any): Promise<PostPayload> => {
        if (!userInfo) {
            return {
                userError: "Unauthorized",
                post: null
            }
        }

        if (!post.title || !post.content) {
            return {
                userError: "Title and Content is required",
                post: null
            }
        }

        const newPost = await prisma.Post.create({
            title: post.title,
            content: post.content,
            authorId: userInfo.userId
        })

        return {
            userError: null,
            post: {
                ...newPost,
                createdAt: newPost.createdAt.toString()
            }
        }
    },

    publishPost: async (parent: any, args: any, { prisma, userInfo }: any): Promise<PostPayload> => {
        if (!userInfo) {
            return {
                userError: "Unauthorized",
                post: null
            }
        }

        const error = await checkUserAccess(prisma, userInfo.userId, args.postId)
        if (error) {
            return error
        }

        const updatePost = await prisma.Post.where({
            id: Number(args.postId)
        }).update({ published: true })

        return {
            userError: null,
            post: updatePost
        }
    },

    updatePost: async (parent: any, args: any, { prisma, userInfo }: any): Promise<PostPayload> => {
        if (!userInfo) {
            return {
                userError: "Unauthorized",
                post: null
            }
        }

        const error = await checkUserAccess(prisma, userInfo.userId, args.postId)
        if (error) {
            return error
        }

        const updatePost = await prisma.Post.where({
            id: Number(args.postId)
        }).update(args.post)

        return {
            userError: null,
            post: updatePost
        }
    },
    deletePost: async (parent: any, args: any, { prisma, userInfo }: any): Promise<PostPayload> => {
        if (!userInfo) {
            return {
                userError: "Unauthorized",
                post: null
            }
        }

        const error = await checkUserAccess(prisma, userInfo.userId, args.postId)
        if (error) {
            return error
        }

        const deletedPost = await prisma.Post.where({
            id: Number(args.postId)
        }).delete(args.post)

        return {
            userError: null,
            post: deletedPost
        }
    }
}