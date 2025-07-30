import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import { nextCookies } from "better-auth/next-js"
import { PrismaClient } from "../generated/prisma"

const prisma = new PrismaClient()

export const auth = betterAuth({
	database: prismaAdapter(prisma, {
		provider: "postgresql",
	}),
	trustedOrigins: ["http://localhost:3001"],
	socialProviders: {
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		},
	},
	plugins: [nextCookies()],
	advanced: {
		cookies: {
			session_token: {
				attributes: {
					sameSite: "none",
					secure: true,
					httpOnly: true,
					partitioned: true,
				},
			},
		},
	},
})
