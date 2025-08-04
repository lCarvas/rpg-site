import { api } from "@libs"
import { redirect } from "next/navigation"

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
		["base-sheet"].update.patch(body)
	if (error) {
		throw error.status
	}
	return characterSheet
}

export async function saveCharacterSkills(
	id: string | number,
	body: {
		skillNameId: string
		attribute?: string
		trainingBonus?: number
		otherBonus?: number
	},
) {
	const { data: characterSkills, error } = await api.user
		.sheets({ id: id })
		.skills.update.patch(body)
	if (error) {
		throw error.status
	}
	return characterSkills
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

export async function createCharacter(body: {
	userId: string
	str: number
	agi: number
	int: number
	vig: number
	pre: number
	class: string
	background: string
	nex?: number
	level?: number
	initialHp: number
	initialSan: number
	initialPe: number
	initialPd: number
	proficiencies: string
	skills: string[]
}) {
	const { data: id, error } = await api.user.sheets.post(body)
	if (error) {
		throw error.status
	}
	redirect(`/character/${id}`)
}

