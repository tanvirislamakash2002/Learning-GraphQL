import DataLoader from "dataloader"
import type { User } from "../__generated__/resolvers-types.js"
import { prisma } from "../prisma/db.js"


const batchUsers = async (ids: number[]): Promise<User[]> => {
    const users = await prisma.User.where((u) => u.id.in(ids)).all()

    const userData: { [key: string]: User } = {}

    users.forEach((user) => {
        userData[user.id] = {
            ...user,
            id: String(user.id),
            createdAt: user.createdAt.toString(),
        }
    })

    return ids.map((id) => userData[id])
}

export const userLoader = new DataLoader<number, User>(batchUsers)
