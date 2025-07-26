import { api } from "@libs"

export async function getUsers() {
	const { data: index } = await api.user.get()
	return index
}
