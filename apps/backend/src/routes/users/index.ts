import {
	CharacterSheetPlain,
	CharacterSheetPlainInputUpdate,
} from "@api/generated/prismabox/CharacterSheet"
import { prisma } from "@api/lib/prisma-client"
import { Elysia, t } from "elysia"

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
						skills: body.skills,
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
				skills: t.Object({
					Acrobatics: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					"Animal Handling": t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),

					Arts: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					Athletics: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					Crime: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					"Current Affairs": t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					Deception: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					Diplomacy: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),

					Fighting: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					Fortitude: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					Initiative: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					Insight: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					Intimidation: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					Investigation: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					Marksmanship: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					Medicine: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					Occultism: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					Perception: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					Piloting: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					Profession: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					Reflexes: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					Religion: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					Sciences: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					Stealth: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					Survival: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					Tactics: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					Technology: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
					Will: t.Object({
						attribute: t.String({ minLength: 3, maxLength: 3 }),
						training: t.Number(),
						otherBonus: t.Number(),
					}),
				}),
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
			})
			return characterSheet ?? status(404, "Not Found")
		},
		{
			params: t.Object({
				id: t.Numeric(),
			}),
			response: {
				200: CharacterSheetPlain,
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
