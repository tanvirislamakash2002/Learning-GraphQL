import { PostPayload } from "../../__generated__/resolvers-types"

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

    updatePost: async (parent: any, args: any, { prisma, userInfo }: any): Promise<PostPayload> => {
        if (!userInfo) {
            return {
                userError: "Unauthorized",
                post: null
            }
        }

        const user = await prisma.User.first({
            id: Number(userInfo.userId)
        })

        if (!user) {
            return {
                userError: "User not found!",
                post: null
            }
        }

        const post = await prisma.Post.first({
            id: Number(args.postId)
        })

        if (!post) {
            return {
                userError: "Post not found!",
                post: null
            }
        }

        if (post.authorId !== user.id) {
            return {
                userError: "Post not owned by User!",
                post: null
            }
        }

        const updatePost = await prisma.Post.where({
            id: Number(args.postId)
        }).update(args.post)

        return {
            userError: null,
            post: updatePost
        }
    }
}