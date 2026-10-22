export const Profile = {
    user: async (parent: any, args: any, { prisma, userInfo }: any) => {
        return await prisma.User.first({
            id: parent.userId
        })
    }
}