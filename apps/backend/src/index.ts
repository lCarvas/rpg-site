import { cors } from "@elysiajs/cors"
import { swagger } from "@elysiajs/swagger"
import { Elysia } from "elysia"
import { betterAuth } from "./routes/better-auth"
import { userRoutes } from "./routes/users"

export const app = new Elysia()
	.use(
		swagger({
			documentation: {
				info: {
					title: "RPG Site API",
					version: "1.0.0",
				},
				tags: [{ name: "User", description: "User related endpoints" }],
			},
		}),
	)
	.use(
		cors({
			origin: "http://localhost:3001",
			methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
			credentials: true,
			allowedHeaders: ["Content-Type", "Authorization"],
		}),
	)
	.use(betterAuth)
	.use(userRoutes)
	.listen(3000)

export type app = typeof app

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
