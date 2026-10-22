import config from "../../config/index.js";
import { jwtHelper } from "../../utils/jwtHelper.js";
import { MutationSignupArgs, MutationSigninArgs, AuthPayload } from "../../__generated__/resolvers-types.js";
import bcrypt from "bcrypt"

export const authResolvers = {
    signup: async (
        _parent: any,
        args: MutationSignupArgs,
        { prisma }: any
    ): Promise<AuthPayload> => {
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
    ): Promise<AuthPayload> => {
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
}