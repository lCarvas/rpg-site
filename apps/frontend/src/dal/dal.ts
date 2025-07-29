import { api } from "@libs"

export async function getUsers() {
	const { data } = await api.user.get()
	return data
}

export async function getCharacterSheet(id: string | number) {
	const { data: characterSheet, error } = await api.user
		.sheets({ id: id })
		.get()

	if (error) {
		throw error.status
	}
	return characterSheet
}

export async function saveCharacterChanges(
	id: string | number,
	body: Record<string, string | number>,
) {
	const { data: characterSheet, error } = await api.user
		.sheets({ id: id })
		.update.post(body)
	if (error) {
		throw error.status
	}
	return characterSheet
}
