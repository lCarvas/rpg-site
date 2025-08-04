"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { deleteCharacter, getUserCharacterSheets } from "@/dal/dal"
import { authClient } from "@/lib/auth-client"

export default function CharactersPage() {
	const router = useRouter()
	const { data: session, isPending } = authClient.useSession()

	const [userSheets, setUserSheets] = useState<{ id: number }[] | null>(null)

	useEffect(() => {
		if (isPending) return
		async function fetchUserSheets() {
			const userSheets = await getUserCharacterSheets(session?.user.id || "")
			setUserSheets(userSheets)
		}
		fetchUserSheets()
	}, [session, isPending])

	if (isPending) {
		return <div>Loading...</div>
	}

	if (!session) {
		return
	}

	return (
		<div className="flex flex-col gap-4">
			<h1 className="font-bold text-2xl">Your Characters</h1>
			<div>
				<Button
					className="hover:cursor-pointer"
					onClick={() => {
						router.push("/character/create")
					}}
				>
					New Character
				</Button>
			</div>
			{isPending || userSheets === null ? (
				<p>Loading your characters...</p>
			) : userSheets.length > 0 ? (
				userSheets.map((sheet) => (
					<div className="rounded border p-4" key={sheet.id}>
						<p>Character ID: {sheet.id}</p>
						<Button
							className="hover:cursor-pointer"
							onClick={() => {
								router.push(`/character/${sheet.id}`)
							}}
							type="button"
						>
							Sheet
						</Button>
						<Dialog>
							<DialogTrigger asChild>
								<Button className="hover:cursor-pointer">Delete</Button>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>Are you absolutely sure?</DialogTitle>
									<DialogDescription>
										This action cannot be undone. This will permanently delete
										your character from our server.
									</DialogDescription>
								</DialogHeader>
								<DialogFooter>
									<DialogClose asChild>
										<Button
											className="hover:cursor-pointer"
											variant={"outline"}
										>
											Cancel
										</Button>
									</DialogClose>
									<Button
										className="hover:cursor-pointer"
										onClick={() => {
											deleteCharacter(sheet.id, { userId: session.user.id })
											setUserSheets(
												userSheets?.filter((val) => val.id !== sheet.id),
											)
										}}
									>
										Confirm
									</Button>
								</DialogFooter>
							</DialogContent>
						</Dialog>
					</div>
				))
			) : (
				<p>No characters found.</p>
			)}
		</div>
	)
}
