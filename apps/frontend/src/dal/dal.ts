import { api } from "@libs"

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
		.update.patch(body)
	if (error) {
		throw error.status
	}
	return characterSheet
}

export async function getUserCharacterSheets(userId: string) {
	const { data: characterSheets, error } = await api
		.user({ id: userId })
		.sheets.get()
	if (error) {
		throw error.status
	}
	return characterSheets
}
