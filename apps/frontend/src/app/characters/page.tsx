"use client"

import Image from "next/image"
import minusIcon from "public/icons/circle-minus-solid.svg"
import plusIcon from "public/icons/circle-plus-solid.svg"
import { useState } from "react"
import { Toaster, toast } from "sonner"
import { RollSkillButton } from "@/components/dice-component"
import { StatBar } from "@/components/statBar"
import { getCharacterSheet, saveCharacterChanges } from "@/dal/dal"
import { skills } from "@/data/skills"
import { rollDice, rollDiceNotation } from "@/utils/dice"

const characterSheetDataObject = await getCharacterSheet(1)

export interface globalStatTypes {
	str: number
	agi: number
	int: number
	vig: number
	pre: number
	nex: number
	class: string
	background: string
}

interface skillObjectTypes {
	Acrobatics: {
		attribute: string
		training: number
		otherBonus: number
	}
	"Animal Handling": {
		attribute: string
		training: number
		otherBonus: number
	}
	Arts: {
		attribute: string
		training: number
		otherBonus: number
	}
	Athletics: {
		attribute: string
		training: number
		otherBonus: number
	}
	Crime: {
		attribute: string
		training: number
		otherBonus: number
	}
	"Current Affairs": {
		attribute: string
		training: number
		otherBonus: number
	}
	Deception: {
		attribute: string
		training: number
		otherBonus: number
	}
	Diplomacy: {
		attribute: string
		training: number
		otherBonus: number
	}
	Fighting: {
		attribute: string
		training: number
		otherBonus: number
	}
	Fortitude: {
		attribute: string
		training: number
		otherBonus: number
	}
	Initiative: {
		attribute: string
		training: number
		otherBonus: number
	}
	Insight: {
		attribute: string
		training: number
		otherBonus: number
	}
	Intimidation: {
		attribute: string
		training: number
		otherBonus: number
	}
	Investigation: {
		attribute: string
		training: number
		otherBonus: number
	}
	Marksmanship: {
		attribute: string
		training: number
		otherBonus: number
	}
	Medicine: {
		attribute: string
		training: number
		otherBonus: number
	}
	Occultism: {
		attribute: string
		training: number
		otherBonus: number
	}
	Perception: {
		attribute: string
		training: number
		otherBonus: number
	}
	Piloting: {
		attribute: string
		training: number
		otherBonus: number
	}
	Profession: {
		attribute: string
		training: number
		otherBonus: number
	}
	Reflexes: {
		attribute: string
		training: number
		otherBonus: number
	}
	Religion: {
		attribute: string
		training: number
		otherBonus: number
	}
	Sciences: {
		attribute: string
		training: number
		otherBonus: number
	}
	Stealth: {
		attribute: string
		training: number
		otherBonus: number
	}
	Survival: {
		attribute: string
		training: number
		otherBonus: number
	}
	Tactics: {
		attribute: string
		training: number
		otherBonus: number
	}
	Technology: {
		attribute: string
		training: number
		otherBonus: number
	}
	Will: {
		attribute: string
		training: number
		otherBonus: number
	}
}

const trainingColorMap: { [key: number]: string } = {
	0: "text-white border-white",
	5: "text-green-700 border-green-700",
	10: "text-blue-800 border-blue-800",
	15: "text-yellow-700 border-yellow-700",
}

const nexNumberToPercentage: { [key: number]: string } = {
	1: "5%",
	2: "10%",
	3: "15%",
	4: "20%",
	5: "25%",
	6: "30%",
	7: "35%",
	8: "40%",
	9: "45%",
	10: "50%",
	11: "55%",
	12: "60%",
	13: "65%",
	14: "70%",
	15: "75%",
	16: "80%",
	17: "85%",
	18: "90%",
	19: "95%",
	20: "99%",
}

export default function Characters() {
	const [globalStats, setGlobalStats] = useState<globalStatTypes>({
		agi: characterSheetDataObject?.agi || 1,
		str: characterSheetDataObject?.str || 1,
		int: characterSheetDataObject?.int || 1,
		vig: characterSheetDataObject?.vig || 1,
		pre: characterSheetDataObject?.pre || 1,
		nex: characterSheetDataObject?.nex || 1,
		class: characterSheetDataObject?.class || "combatant",
		background: characterSheetDataObject?.background || "academic",
	})

	const [defensiveStats, setDefensiveValues] = useState({
		equipDef: characterSheetDataObject?.equip_def.toString() || "0",
		otherDef: characterSheetDataObject?.other_def.toString() || "0",
		dodge: characterSheetDataObject?.dodge.toString() || "0",
		blockDr: characterSheetDataObject?.block_dr.toString() || "0",
	})

	const [skillAttributes, setSkillAttributes] = useState<skillObjectTypes>({
		...(characterSheetDataObject?.skills || {
			Acrobatics: { attribute: "AGI", training: 0, otherBonus: 0 },
			"Animal Handling": {
				attribute: "PRE",
				training: 0,
				otherBonus: 0,
			},
			Arts: { attribute: "PRE", training: 0, otherBonus: 0 },
			Athletics: { attribute: "STR", training: 0, otherBonus: 0 },
			Crime: { attribute: "AGI", training: 0, otherBonus: 0 },
			"Current Affairs": {
				attribute: "INT",
				training: 0,
				otherBonus: 0,
			},
			Deception: { attribute: "PRE", training: 0, otherBonus: 0 },
			Diplomacy: { attribute: "PRE", training: 0, otherBonus: 0 },
			Fighting: { attribute: "STR", training: 0, otherBonus: 0 },
			Fortitude: { attribute: "VIG", training: 0, otherBonus: 0 },
			Initiative: { attribute: "AGI", training: 0, otherBonus: 0 },
			Insight: { attribute: "PRE", training: 0, otherBonus: 0 },
			Intimidation: { attribute: "PRE", training: 0, otherBonus: 0 },
			Investigation: { attribute: "INT", training: 0, otherBonus: 0 },
			Marksmanship: { attribute: "AGI", training: 0, otherBonus: 0 },
			Medicine: { attribute: "INT", training: 0, otherBonus: 0 },
			Occultism: { attribute: "INT", training: 0, otherBonus: 0 },
			Perception: { attribute: "PRE", training: 0, otherBonus: 0 },
			Piloting: { attribute: "AGI", training: 0, otherBonus: 0 },
			Profession: { attribute: "INT", training: 0, otherBonus: 0 },
			Reflexes: { attribute: "AGI", training: 0, otherBonus: 0 },
			Religion: { attribute: "PRE", training: 0, otherBonus: 0 },
			Sciences: { attribute: "INT", training: 0, otherBonus: 0 },
			Stealth: { attribute: "AGI", training: 0, otherBonus: 0 },
			Survival: { attribute: "INT", training: 0, otherBonus: 0 },
			Tactics: { attribute: "INT", training: 0, otherBonus: 0 },
			Technology: { attribute: "INT", training: 0, otherBonus: 0 },
			Will: { attribute: "PRE", training: 0, otherBonus: 0 },
		}),
	})

	// const defenseValue: number =
	// 	10 + globalStats.agi + globalStats.equipDef + globalStats.otherDef

	return (
		<div className="mx-auto min-h-[90vh] max-w-[1280px]">
			<Toaster closeButton theme="dark" visibleToasts={9} />
			<div className="flex justify-between border-1 border-white">
				<div className="box-border w-106 pl-2">
					<button
						className="hover:cursor-pointer"
						onClick={() => {
							setGlobalStats({
								...globalStats,
								str: globalStats.str - 1,
							})
							saveCharacterChanges(1, { str: globalStats.str - 1 })
						}}
						type="button"
					>
						<Image
							alt="Minus Icon"
							className="invert"
							height={10}
							src={minusIcon}
							width={10}
						/>
					</button>
					<RollSkillButton
						onClick={() => {
							toast("Strength", {
								description: `${rollDice(globalStats.str)}`,
							})
						}}
					>
						<span className="p-2 font-bold">Strength: {globalStats.str}</span>
					</RollSkillButton>
					<button
						className="hover:cursor-pointer"
						onClick={() => {
							setGlobalStats({
								...globalStats,
								str: globalStats.str + 1,
							})
							saveCharacterChanges(1, { str: globalStats.str + 1 })
						}}
						type="button"
					>
						<Image
							alt="Minus Icon"
							className="invert"
							height={10}
							src={plusIcon}
							width={10}
						/>
					</button>
					<div>
						<button
							className="hover:cursor-pointer"
							onClick={() => {
								setGlobalStats({
									...globalStats,
									agi: globalStats.agi - 1,
								})
								saveCharacterChanges(1, { agi: globalStats.agi - 1 })
							}}
							type="button"
						>
							<Image
								alt="Minus Icon"
								className="invert"
								height={10}
								src={minusIcon}
								width={10}
							/>
						</button>
						<RollSkillButton
							onClick={() => {
								toast("Agility", {
									description: `${rollDice(globalStats.agi)}`,
								})
							}}
						>
							<span className="p-2 font-bold">Agility: {globalStats.agi}</span>
						</RollSkillButton>
						<button
							className="hover:cursor-pointer"
							onClick={() => {
								setGlobalStats({
									...globalStats,
									agi: globalStats.agi + 1,
								})
								saveCharacterChanges(1, { agi: globalStats.str + 1 })
							}}
							type="button"
						>
							<Image
								alt="Minus Icon"
								className="invert"
								height={10}
								src={plusIcon}
								width={10}
							/>
						</button>
					</div>
					<div>
						<button
							className="hover:cursor-pointer"
							onClick={() => {
								setGlobalStats({
									...globalStats,
									int: globalStats.int - 1,
								})
								saveCharacterChanges(1, { int: globalStats.int - 1 })
							}}
							type="button"
						>
							<Image
								alt="Minus Icon"
								className="invert"
								height={10}
								src={minusIcon}
								width={10}
							/>
						</button>
						<RollSkillButton
							onClick={() => {
								toast("Intellect", {
									description: `${rollDice(globalStats.int)}`,
								})
							}}
						>
							<span className="p-2 font-bold">
								Intellect: {globalStats.int}
							</span>
						</RollSkillButton>
						<button
							className="hover:cursor-pointer"
							onClick={() => {
								setGlobalStats({
									...globalStats,
									int: globalStats.int + 1,
								})
								saveCharacterChanges(1, { int: globalStats.int + 1 })
							}}
							type="button"
						>
							<Image
								alt="Minus Icon"
								className="invert"
								height={10}
								src={plusIcon}
								width={10}
							/>
						</button>
					</div>
					<div>
						<button
							className="hover:cursor-pointer"
							onClick={() => {
								setGlobalStats({
									...globalStats,
									vig: globalStats.vig - 1,
								})

								saveCharacterChanges(1, { vig: globalStats.vig - 1 })
							}}
							type="button"
						>
							<Image
								alt="Minus Icon"
								className="invert"
								height={10}
								src={minusIcon}
								width={10}
							/>
						</button>
						<RollSkillButton
							onClick={() => {
								toast("Vigor", {
									description: `${rollDice(globalStats.vig)}`,
								})
							}}
						>
							<span className="p-2 font-bold">Vigor: {globalStats.vig}</span>
						</RollSkillButton>
						<button
							className="hover:cursor-pointer"
							onClick={() => {
								setGlobalStats({
									...globalStats,
									vig: globalStats.vig + 1,
								})
								saveCharacterChanges(1, { vig: globalStats.vig + 1 })
							}}
							type="button"
						>
							<Image
								alt="Minus Icon"
								className="invert"
								height={10}
								src={plusIcon}
								width={10}
							/>
						</button>
					</div>
					<div>
						<button
							className="hover:cursor-pointer"
							onClick={() => {
								setGlobalStats({
									...globalStats,
									pre: globalStats.pre - 1,
								})
								saveCharacterChanges(1, { pre: globalStats.pre - 1 })
							}}
							type="button"
						>
							<Image
								alt="Minus Icon"
								className="invert"
								height={10}
								src={minusIcon}
								width={10}
							/>
						</button>
						<RollSkillButton
							onClick={() => {
								toast("Presence", {
									description: `${rollDice(globalStats.pre)}`,
								})
							}}
						>
							<span className="p-2 font-bold">Presence: {globalStats.pre}</span>
						</RollSkillButton>
						<button
							className="hover:cursor-pointer"
							onClick={() => {
								setGlobalStats({
									...globalStats,
									pre: globalStats.pre + 1,
								})
								saveCharacterChanges(1, { pre: globalStats.pre + 1 })
							}}
							type="button"
						>
							<Image
								alt="Minus Icon"
								className="invert"
								height={10}
								src={plusIcon}
								width={10}
							/>
						</button>
					</div>
					<div className="mt-5">
						<p>
							Class:{" "}
							<select
								className="hover:cursor-pointer hover:text-purple-500"
								defaultValue={globalStats.class}
								onChange={(e) => {
									setGlobalStats({
										...globalStats,
										class: e.target.value,
									})
								}}
							>
								<option value="combatant">Combatant</option>
								<option value="specialist">Specialist</option>
								<option value="occultist">Occultist</option>
							</select>
						</p>
						<p>
							LPE:{" "}
							<select
								className="hover:cursor-pointer hover:text-purple-500"
								defaultValue={globalStats.nex}
								onChange={(e) =>
									setGlobalStats({
										...globalStats,
										nex: Number(e.target.value),
									})
								}
							>
								<option value={1}>5%</option>
								<option value={2}>10%</option>
								<option value={3}>15%</option>
								<option value={4}>20%</option>
								<option value={5}>25%</option>
								<option value={6}>30%</option>
								<option value={7}>35%</option>
								<option value={8}>40%</option>
								<option value={9}>45%</option>
								<option value={10}>50%</option>
								<option value={11}>55%</option>
								<option value={12}>60%</option>
								<option value={13}>65%</option>
								<option value={14}>70%</option>
								<option value={15}>75%</option>
								<option value={16}>80%</option>
								<option value={17}>85%</option>
								<option value={18}>90%</option>
								<option value={19}>95%</option>
								<option value={20}>99%</option>
							</select>
						</p>
					</div>
					<div className="statBars flex flex-col gap-3">
						<StatBar
							barColor="bg-red-500"
							globalStats={globalStats}
							label="HEALTH"
							stat="Hp"
						/>
						<StatBar
							barColor="bg-blue-500"
							globalStats={globalStats}
							label="SANITY"
							stat="San"
						/>
						<StatBar
							barColor="bg-yellow-600"
							globalStats={globalStats}
							label="EFFORT"
							stat="Pe"
						/>
						<StatBar
							barColor="bg-sky-400"
							globalStats={globalStats}
							label="DETERMINATION"
							stat="Pd"
						/>
					</div>
					{/* <div className="roberto">
						Defense: {defenseValue}
						<p>
							Equip:{" "}
							<input
								className="w-5 border-b-1 p-0 text-center"
								inputMode="numeric"
								onBlur={(e) => {
									if (globalStats.equipDef === 0) {
										setRawStatInputValue({
											...rawStatInputValues,
											equipDef: "0",
										})
									}
									setGlobalStats({
										...globalStats,
										equipDef: Math.max(0, Number(e.target.value)),
									})
								}}
								onChange={(e) => {
									setRawStatInputValue({
										...rawStatInputValues,
										equipDef: e.target.value,
									})
								}}
								type="number"
								value={rawStatInputValues.equipDef}
							/>
						</p>
						<p>
							Other:{" "}
							<input
								className="w-5 border-b-1 p-0 text-center"
								defaultValue={globalStats.otherDef}
								inputMode="numeric"
								onChange={(e) => {
									const value = Number(e.target.value)
									setGlobalStats({
										...globalStats,
										otherDef: value,
									})
								}}
								type="number"
							/>
						</p>
						<p>
							Dodge:{" "}
							<input
								className="w-5 border-b-1 text-center"
								inputMode="numeric"
								onBlur={(e) => {
									if (globalStats.dodge === 0) {
										setRawStatInputValue({
											...rawStatInputValues,
											dodge: "0",
										})
									}
									setGlobalStats({
										...globalStats,
										dodge: Number(e.target.value),
									})
								}}
								onChange={(e) => {
									setRawStatInputValue({
										...rawStatInputValues,
										dodge: e.target.value,
									})
								}}
								type="number"
								value={rawStatInputValues.dodge}
							/>
						</p>
						<p>
							Block DR:{" "}
							<input
								className="w-5 border-b-1 text-center"
								defaultValue={
									skillAttributes.Fortitude.training +
									skillAttributes.Fortitude.otherBonus
								}
								inputMode="numeric"
								type="number"
							/>
						</p>
						<p>{globalStats.equipDef}</p>
					</div> */}
				</div>
				<div>
					<table className="table-fixed border-separate border-spacing-[3px]">
						<thead className="text-[10px] text-white/60">
							<tr>
								<th className="w-[18px] p-[1px] text-center"></th>
								<th className="w-26 p-[1px] text-start">SKILL</th>
								<th className="w-13 p-[1px] text-center">DICE</th>
								<th className="w-13 p-[1px] text-center">BONUS</th>
								<th className="w-13 p-[1px] text-center">TRAINING</th>
								<th className="w-13 p-[1px] text-center">OTHER</th>
							</tr>
						</thead>
						<tbody className="text-sm leading-[1.6]">
							{Object.values(skills).map((skill) => {
								const skillNameAsKey = skill.name as keyof skillObjectTypes
								const skillBonus =
									skillAttributes[skillNameAsKey].training +
									skillAttributes[skillNameAsKey].otherBonus

								return (
									<tr
										className={
											trainingColorMap[
												skillAttributes[skillNameAsKey].training
											] || "border-white text-white"
										}
										key={skill.name}
									>
										<td className="p-[1px] align-middle">
											<div className="flex align-middle">
												<RollSkillButton
													hasIcon
													onClick={() =>
														toast(`${skill.name}`, {
															description: `${rollDice(
																globalStats[
																	skillAttributes[
																		`${skillNameAsKey}`
																	].attribute.toLowerCase() as keyof globalStatTypes
																] as number,
																+skillBonus,
															)}`,
														})
													}
												/>
											</div>
										</td>
										<td className="p-[1px] align-middle leading-normal">
											{skill.name}
											{skill.loadPenalty ? "+" : ""}
											{skill.onlyTrained ? "*" : ""}
										</td>
										<td className="p-[1px] text-center align-middle">
											<select
												className="text-center hover:cursor-pointer hover:text-purple-500"
												onChange={(e) => {
													setSkillAttributes({
														...skillAttributes,
														[skill.name]: {
															...skillAttributes[skillNameAsKey],
															attribute: e.target.value,
														},
													})
												}}
												value={skillAttributes[
													skillNameAsKey
												].attribute.toUpperCase()}
											>
												<option className="text-white" value="STR">
													STR
												</option>
												<option className="text-white" value="AGI">
													AGI
												</option>
												<option className="text-white" value="INT">
													INT
												</option>
												<option className="text-white" value="VIG">
													VIG
												</option>
												<option className="text-white" value="PRE">
													PRE
												</option>
											</select>
										</td>
										<td className="p-[1px] text-center align-middle">
											{skillBonus}
										</td>
										<td className="text-center align-middle">
											<select
												className="w-9 border-white border-b-1 text-center hover:cursor-pointer hover:text-purple-500"
												onChange={(e) => {
													setSkillAttributes({
														...skillAttributes,
														[skill.name]: {
															...skillAttributes[skillNameAsKey],
															training: Number(e.target.value),
														},
													})
												}}
												value={skillAttributes[skillNameAsKey].training}
											>
												<option className="text-white" value="0">
													0
												</option>
												<option className="text-white" value="5">
													5
												</option>
												<option className="text-white" value="10">
													10
												</option>
												<option className="text-white" value="15">
													15
												</option>
											</select>
										</td>
										<td className="w-13 text-center">
											<div className="flex items-center justify-center align-middle">
												<input
													className="w-9 border-white border-b-1 text-center"
													defaultValue="0"
													inputMode="numeric"
													onBlur={(e) => {
														const inputValue = e.target.value

														if (inputValue === "") {
															setSkillAttributes({
																...skillAttributes,
																[skill.name]: {
																	...skillAttributes[skillNameAsKey],
																	otherBonus: 0,
																},
															})
															e.target.value = "0"
															return
														}
														setSkillAttributes({
															...skillAttributes,
															[skill.name]: {
																...skillAttributes[skillNameAsKey],
																otherBonus: Number(inputValue),
															},
														})
														e.target.value = inputValue.replace(/^0+(?=\d)/, "")
													}}
													type="number"
												/>
											</div>
										</td>
									</tr>
								)
							})}
						</tbody>
					</table>
					<p className="text-[10px]">
						+ Overburden penalty. * Only if trained.
					</p>
				</div>
				<div className="w-125">
					<input
						className="border-white border-b-2"
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								toast(`${rollDiceNotation(e.currentTarget.value)}`)
								e.currentTarget.value = ""
							}
						}}
						placeholder="Roll Dice"
						type="text"
					/>
				</div>
			</div>
		</div>
	)
}
