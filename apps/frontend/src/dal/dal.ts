import type { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers"
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
	abilities: {
		name: string
		description: string
	}
}) {
	const { data: id, error } = await api.user.sheets.post(body)
	if (error) {
		throw error.status
	}
	redirect(`/character/${id}`)
}

export async function deleteCharacter(
	id: string | number,
	body: { userId: string },
) {
	const { data, error } = await api.user.sheets({ id: id }).delete.post(body)
	if (error) {
		throw error.status
	}
	return data
}

export async function getSession(headers: Promise<ReadonlyHeaders>) {
	const headersList = await headers
	const cookie = await headersList.get("cookie")
	return await fetch("http://localhost:3000/api/auth/get-session", {
		headers: {
			"Content-Type": "application/json",
			cookie: cookie ?? "",
		},
	}).then((res) => res.json())
}

export async function addAbility(
	id: string | number,
	body: { name: string; description: string },
) {
	const { data, error } = await api.user
		.sheets({ id: id })
		.abilities.add.post(body)
	if (error) {
		throw error.status
	}
	return data
}

export async function removeAbility(
	id: string | number,
	body: { abilityId: number },
) {
	const { data, error } = await api.user
		.sheets({ id: id })
		.abilities.delete.delete(body)
	if (error) {
		throw error.status
	}
	return data
}
