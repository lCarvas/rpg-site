import {
	CharacterSheetPlain,
	CharacterSheetPlainInputUpdate,
} from "@api/generated/prismabox/CharacterSheet"
import { prisma } from "@api/lib/prisma-client"
import { Elysia, t } from "elysia"

export const userRoutes = new Elysia({ prefix: "/user" })
	.get("/", async ({ status }) => {
		try {
			const allUsers = await prisma.user.findMany()
			return allUsers ?? status(404)
		} catch (error) {
			return error
		}
	})
	.get(
		"/:id/sheets",
		async ({ params: { id } }) => {
			return await prisma.characterSheet.findMany({
				select: {
					id: true,
				},
				where: {
					user_id: {
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
						user_id: body.id,
						str: body.str,
						agi: body.agi,
						int: body.int,
						vig: body.vig,
						pre: body.pre,
						class: body.class,
						background: body.background,
						nex: body.nex,
						level: body.level,
						turn_pe: body.turn_pe,
						movement: body.movement,
						current_hp: body.current_hp,
						max_hp: body.max_hp,
						current_san: body.current_san,
						max_san: body.max_san,
						current_pe: body.current_pe,
						max_pe: body.max_pe,
						current_pd: body.current_pd,
						max_pd: body.max_pd,
						equip_def: body.equip_def,
						other_def: body.other_def,
						block_dr: body.block_dr,
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
				id: t.String(),
				str: t.Number(),
				agi: t.Number(),
				int: t.Number(),
				vig: t.Number(),
				pre: t.Number(),
				class: t.String(),
				background: t.String(),
				nex: t.Number(),
				level: t.Number(),
				turn_pe: t.Number(),
				movement: t.Number(),
				current_hp: t.Number(),
				max_hp: t.Number(),
				current_san: t.Number(),
				max_san: t.Number(),
				current_pe: t.Number(),
				max_pe: t.Number(),
				current_pd: t.Number(),
				max_pd: t.Number(),
				equip_def: t.Number(),
				other_def: t.Number(),
				block_dr: t.Number(),
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
	.post(
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
