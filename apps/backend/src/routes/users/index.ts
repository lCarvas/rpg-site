import {
	CharacterSheetPlain,
	CharacterSheetPlainInputUpdate,
} from "@api/generated/prismabox/CharacterSheet"
import { prisma } from "@api/lib/prisma-client"
import { Elysia, type Static, t } from "elysia"

export const userRoutes = new Elysia({ prefix: "/user" })
	.get(
		"/:id/sheets",
		async ({ params: { id } }) => {
			return await prisma.characterSheet.findMany({
				select: {
					id: true,
				},
				where: {
					userId: {
						equals: id,
					},
				},
			})
		},
		{
			params: t.Object({ id: t.String() }),
		},
	)
	.post(
		"/sheets",
		async ({ body }) => {
			try {
				await prisma.characterSheet.create({
					data: {
						userId: body.userId,
						str: body.str,
						agi: body.agi,
						int: body.int,
						vig: body.vig,
						pre: body.pre,
						class: body.class,
						background: body.background,
						nex: body.nex,
						level: body.level,
						turnPe: body.turnPe,
						movement: body.movement,
						currentHp: body.currentHp,
						maxHp: body.maxHp,
						currentSan: body.currentSan,
						maxSan: body.maxSan,
						currentPe: body.currentPe,
						maxPe: body.maxPe,
						currentPd: body.currentPd,
						maxPd: body.maxPd,
						equipDef: body.equipDef,
						otherDef: body.otherDef,
						blockDr: body.blockDr,
						dodge: body.dodge,
						armor: body.armor,
						resistances: body.resistances,
						proficiencies: body.proficiencies,
						skills: {
							create: await Promise.all(
								body.skills.map(async (skill) => {
									const skillId = await prisma.skills.findFirst({
										select: { id: true },
										where: { name: skill.name },
									})

									if (!skillId) {
										throw new Error(`Skill ${skill.name} not found`)
									}

									return {
										skillId: skillId.id,
										attribute: skill.attribute,
										trainingBonus: skill.trainingBonus,
										otherBonus: skill.otherBonus,
									}
								}),
							),
						},
					},
				})
			} catch (e) {
				console.error(`Error creating character sheet: ${e}`)
			}
		},
		{
			body: t.Object({
				userId: t.String(),
				str: t.Number(),
				agi: t.Number(),
				int: t.Number(),
				vig: t.Number(),
				pre: t.Number(),
				class: t.String(),
				background: t.String(),
				nex: t.Number(),
				level: t.Number(),
				turnPe: t.Number(),
				movement: t.Number(),
				currentHp: t.Number(),
				maxHp: t.Number(),
				currentSan: t.Number(),
				maxSan: t.Number(),
				currentPe: t.Number(),
				maxPe: t.Number(),
				currentPd: t.Number(),
				maxPd: t.Number(),
				equipDef: t.Number(),
				otherDef: t.Number(),
				blockDr: t.Number(),
				dodge: t.Number(),
				armor: t.String(),
				resistances: t.String(),
				proficiencies: t.String(),
				skills: t.Array(
					t.Object({
						name: t.String(),
						attribute: t.String({ maxLength: 3 }),
						trainingBonus: t.Integer(),
						otherBonus: t.Integer(),
					}),
				),
			}),
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
				},
			})

			return characterSheet ?? status(404, "Character sheet not found")
		},
		{
			params: t.Object({
				id: t.Numeric(),
			}),
			response: {
				200: t.Intersect([
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
				]),
				404: t.String(),
			},
		},
	)
	.patch(
		"/sheets/:id/update",
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

const characterSheetResponseTypeBox = t.Intersect([
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
])

export type CharacterSheetResponseType = Static<
	typeof characterSheetResponseTypeBox
>
