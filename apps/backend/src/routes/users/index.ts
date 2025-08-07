import {
	CharacterSheetPlain,
	CharacterSheetPlainInputUpdate,
} from "@api/generated/prismabox/CharacterSheet"
import { CharacterSkillsPlainInputUpdate } from "@api/generated/prismabox/CharacterSkills"
import { prisma } from "@api/lib/prisma-client"
import { skills } from "@frontend/data/skills"
import { Elysia, type Static, t } from "elysia"

const characterSheetResponseTypeBox = t.Composite([
	CharacterSheetPlain,
	t.Object({
		skills: t.Array(
			t.Object({
				skill: t.Object({
					name: t.String(),
				}),
				attribute: t.String({ maxLength: 3 }),
				trainingBonus: t.Number(),
				otherBonus: t.Number(),
			}),
		),
	}),
	t.Object({
		abilities: t.Array(
			t.Object({ id: t.Number(), name: t.String(), description: t.String() }),
		),
	}),
])

export const userRoutes = new Elysia({ prefix: "/user", tags: ["User"] })
	.get(
		"/:id/sheets",
		async ({ params: { id: userId } }) => {
			return await prisma.characterSheet.findMany({
				select: {
					id: true,
				},
				where: {
					userId: {
						equals: userId,
					},
				},
			})
		},
		{
			params: t.Object({ id: t.String() }),
			response: {
				200: t.Array(t.Object({ id: t.Number() })),
			},
			detail: {
				summary: "Get user character sheets",
			},
		},
	)
	.post(
		"/sheets",
		async ({ body, status }) => {
			try {
				const newCharacter = await prisma.characterSheet.create({
					data: {
						userId: body.userId,
						str: body.str,
						agi: body.agi,
						int: body.int,
						vig: body.vig,
						pre: body.pre,
						class: body.class,
						background: body.background,
						nex: body?.nex ?? 0,
						level: body?.level ?? 1,
						turnPe: body?.level ?? 1,
						movement: 9,
						currentHp: body.initialHp,
						maxHp: body.initialHp,
						currentSan: body.initialSan,
						maxSan: body.initialSan,
						currentPe: body.initialPe,
						maxPe: body.initialPe,
						currentPd: body.initialPd,
						maxPd: body.initialPd,
						equipDef: 0,
						otherDef: 0,
						blockDr: body.skills.includes("fortitude") ? 5 : 0,
						dodge: body.skills.includes("reflexos") ? 5 : 0,
						armor: "",
						resistances: "",
						proficiencies: body.proficiencies,
						skills: {
							create: await Promise.all(
								Object.keys(skills).map(async (skillKey) => {
									const skill = skills[skillKey as keyof typeof skills]
									const skillId = await prisma.skills.findFirst({
										select: { id: true },
										where: { name: skillKey },
									})

									if (!skillId) {
										throw new Error(`Skill ${skill.name} not found`)
									}

									const skillTrainingOverride = body.skills.includes(skillKey)

									return {
										skillId: skillId.id,
										attribute: skill.attribute,
										trainingBonus: skillTrainingOverride ? 5 : 0,
										otherBonus: 0,
									}
								}),
							),
						},
						abilities: {
							create: body.abilities,
						},
					},
				})
				return newCharacter.id
			} catch (e) {
				console.error(`Error creating character sheet: ${e}`)
				return status(400, "")
			}
		},
		{
			body: t.Object({
				userId: t.String(),
				str: t.Numeric(),
				agi: t.Numeric(),
				int: t.Numeric(),
				vig: t.Numeric(),
				pre: t.Numeric(),
				class: t.String(),
				background: t.String(),
				nex: t.Optional(t.Number()),
				level: t.Optional(t.Number()),
				initialHp: t.Number(),
				initialSan: t.Number(),
				initialPe: t.Number(),
				initialPd: t.Number(),
				proficiencies: t.String(),
				skills: t.Array(t.String()),
				abilities: t.Object({
					name: t.String(),
					description: t.String(),
				}),
			}),
			response: {
				200: t.Number(),
				400: t.String(),
			},
			detail: {
				summary: "Create a new character sheet",
			},
		},
	)
	.post(
		"/sheets/:id/delete",
		async ({ params: { id }, body, status }) => {
			const characterSheet = await prisma.characterSheet.findFirst({
				where: {
					id: id,
				},
			})

			if (characterSheet?.userId !== body.userId) {
				return status(403, "Forbidden")
			}

			await prisma.characterSheet.delete({
				where: {
					id: id,
				},
			})
		},
		{
			params: t.Object({ id: t.Numeric() }),
			body: t.Object({ userId: t.String() }),
			response: {
				403: t.String(),
			},
		},
	)
	.get(
		"/sheets/:id",
		async ({ params: { id }, status }) => {
			const characterSheet = await prisma.characterSheet.findFirst({
				where: {
					id: {
						equals: id,
					},
				},
				include: {
					skills: {
						select: {
							skill: {
								select: {
									name: true,
								},
							},
							attribute: true,
							trainingBonus: true,
							otherBonus: true,
						},
					},
					abilities: {
						select: { id: true, name: true, description: true },
					},
				},
			})

			return characterSheet ?? status(404, "Character sheet not found")
		},
		{
			params: t.Object({
				id: t.Numeric(),
			}),
			response: {
				200: characterSheetResponseTypeBox,
				404: t.String(),
			},
			detail: {
				summary: "Get character sheet data by ID",
			},
		},
	)
	.patch(
		"/sheets/:id/base-sheet/update",
		async ({ params: { id }, body }) => {
			return await prisma.characterSheet.update({
				where: {
					id: id,
				},
				data: body,
			})
		},
		{
			params: t.Object({
				id: t.Numeric(),
			}),
			body: CharacterSheetPlainInputUpdate,
		},
	)
	.patch(
		"/sheets/:id/skills/update",
		async ({ params: { id: characterSheetId }, body }) => {
			const skillToUpdate = await prisma.skills.findFirst({
				select: { id: true },
				where: { name: body.skillNameId },
			})

			if (!skillToUpdate) {
				throw new Error(`Skill ${body.skillNameId} not found`)
			}

			return await prisma.characterSkills.update({
				where: {
					characterId_skillId: {
						skillId: skillToUpdate.id,
						characterId: characterSheetId,
					},
				},
				data: {
					attribute: body.attribute,
					trainingBonus: body.trainingBonus,
					otherBonus: body.otherBonus,
				},
			})
		},
		{
			params: t.Object({ id: t.Numeric() }),
			body: t.Composite([
				t.Object({
					skillNameId: t.String(),
				}),
				CharacterSkillsPlainInputUpdate,
			]),
		},
	)
	.patch("/sheets/:id/abilities/update", () => {})
	.post(
		"/sheets/:id/abilities/add",
		async ({ params: { id }, body }) => {
			const newAbility = await prisma.abilities.create({
				data: {
					characterSheetId: id,
					name: body.name,
					description: body.description,
				},
			})
			return newAbility.id
		},
		{
			params: t.Object({ id: t.Numeric() }),
			body: t.Object({
				name: t.String(),
				description: t.String(),
			}),
		},
	)
	.delete(
		"/sheets/:id/abilities/delete",
		async ({ params: { id }, body }) => {
			await prisma.abilities.delete({
				where: {
					characterSheetId: id,
					id: body.abilityId,
				},
			})
		},
		{
			params: t.Object({ id: t.Numeric() }),
			body: t.Object({ abilityId: t.Number() }),
		},
	)

export type CharacterSheetResponseType = Static<
	typeof characterSheetResponseTypeBox
>
