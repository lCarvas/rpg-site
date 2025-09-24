import type { app } from "@api"
import { treaty } from "@elysiajs/eden"

export const api = treaty<app>("localhost:3000", {
	fetch: { credentials: "include" },
})
