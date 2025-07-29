"use client"

import { Button } from "@/components/ui/button"
import { getCharacterSheet, getUsers } from "@/dal/dal"
import { authClient } from "@/lib/auth-client"

const signOut = async () => {
	await authClient.signOut()
}

const getUsersRun = await getUsers()

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
			{getUsersRun}
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
