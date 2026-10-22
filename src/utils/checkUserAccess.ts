import { PostPayload } from "../__generated__/resolvers-types"

export const checkUserAccess = async (
    prisma: any,
    userId: any,
    postId: any
): Promise<PostPayload | null> => {
    const user = await prisma.User.first({
        id: Number(userId)
    })

    if (!user) {
        return {
            userError: "User not found!",
            post: null
        }
    }

    const post = await prisma.Post.first({
        id: Number(postId)
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

    return null
}