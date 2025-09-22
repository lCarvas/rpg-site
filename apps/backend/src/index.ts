import { cors } from "@elysiajs/cors"
import { openapi } from "@elysiajs/openapi"
import { Elysia } from "elysia"
import { betterAuthPlugin } from "./routes/better-auth"
import { userRoutes } from "./routes/users"

export const app = new Elysia()
	.use(
		openapi({
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
	.use(betterAuthPlugin)
	.use(userRoutes)
	.listen(3000)

export type app = typeof app

console.log(
	`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
)
console.log(
	`🦊 Documentation available at http://${app.server?.hostname}:${app.server?.port}/openapi`,
)
