import { Elysia } from "elysia"

export const userRoutes = new Elysia({ prefix: "/user" })
	.get("/", () => "get all users")
	.post("/", () => "create new user")
