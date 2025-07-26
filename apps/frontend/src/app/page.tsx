"use client"

import { Button } from "@/components/ui/button"
import { getUsers } from "@/dal/dal"
import { authClient } from "@/lib/auth-client"

const signOut = async () => {
	await authClient.signOut()
}

export default function Home() {
	const {
		data: session,
		isPending, //loading state
		error, //error object
		refetch, //refetch the session
	} = authClient.useSession()
	return (
		<main>
			<div>Hello world!</div>
			{getUsers()}
			<div className="">{session ? `hello ${session.user.name}` : ""}</div>
			<div>
				{session && (
					<Button onClick={signOut} type="button">
						Logout
					</Button>
				)}
			</div>
		</main>
	)
}
