import { cors } from "@elysiajs/cors"
import { swagger } from "@elysiajs/swagger"
import { type Context, Elysia } from "elysia"
import { auth } from "./lib/auth"
import { userRoutes } from "./routes/users"

const betterAuthView = (context: Context) => {
	const BETTER_AUTH_ACCEPT_METHODS = ["POST", "GET"]
	if (BETTER_AUTH_ACCEPT_METHODS.includes(context.request.method)) {
		return auth.handler(context.request)
	} else {
		context.status(405)
	}
}

export const app = new Elysia()
	.use(swagger())
	.use(
		cors({
			origin: "http://localhost:3001",
			methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
			credentials: true,
			allowedHeaders: ["Content-Type", "Authorization"],
		}),
	)
	.use(userRoutes)
	.all("/api/auth/*", betterAuthView)
	.listen(3000)

export type app = typeof app

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
