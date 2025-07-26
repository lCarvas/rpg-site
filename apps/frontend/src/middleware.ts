import { getSessionCookie } from "better-auth/cookies"
import { type NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
	const session = await getSessionCookie(request)

	if (!session) {
		return NextResponse.redirect(new URL("/login", request.url))
	}
	return NextResponse.next()
}

export const config = {
	matcher: ["/characters", "/campaigns", "/homebrew"],
}
