"use client"

import Image from "next/image"
import minusIcon from "public/icons/circle-minus-solid.svg"
import plusIcon from "public/icons/circle-plus-solid.svg"
import { useEffect, useRef, useState } from "react"
import { Toaster, toast } from "sonner"
import { RollSkillButton } from "@/components/dice-component"
import { StatBar } from "@/components/statBar"
import { classes, type classesObjectTypes } from "@/data/classes"
import { skills } from "@/data/skills"
import { rollDice, rollDiceNotation } from "@/utils/dice"

interface statObjectTypes {
	str: number
	agi: number
	int: number
	vig: number
	pre: number
	nex: number
	currentHp: number
	maxHp: number
	currentSan: number
	maxSan: number
	currentPe: number
	maxPe: number
	currentPd: number
	maxPd: number
	equipDef: number
	otherDef: number
	dodge: number
	blockDr: number
	class: string
	background: string
}

interface statObjectTempInputTypes {
	str: string
	agi: string
	int: string
	vig: string
	pre: string
	nex: string
	currentHp: string
	maxHp: string
	currentSan: string
	maxSan: string
	currentPe: string
	maxPe: string
	currentPd: string
	maxPd: string
	equipDef: string
	otherDef: string
	dodge: string
	blockDr: string
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
	const [statValues, setStatValue] = useState<statObjectTypes>({
		str: 1,
		agi: 1,
		int: 1,
		vig: 1,
		pre: 1,
		nex: 1,
		currentHp: 0,
		maxHp: 0,
		currentSan: 0,
		maxSan: 0,
		currentPe: 0,
		maxPe: 0,
		currentPd: 0,
		maxPd: 0,
		equipDef: 0,
		otherDef: 0,
		dodge: 0,
		blockDr: 0,
		class: "combatant",
		background: "",
	})

	const [rawStatInputValues, setRawStatInputValue] =
		useState<statObjectTempInputTypes>({
			str: "1",
			agi: "1",
			int: "1",
			vig: "1",
			pre: "1",
			nex: "1",
			currentHp: "0",
			maxHp: "0",
			currentSan: "0",
			maxSan: "0",
			currentPe: "0",
			maxPe: "0",
			currentPd: "0",
			maxPd: "0",
			equipDef: "0",
			otherDef: "0",
			dodge: "0",
			blockDr: "0",
		})

	const [skillAttributes, setSkillAttributes] = useState<skillObjectTypes>({
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
	})

	const prevNexRef = useRef(statValues.nex)

	useEffect(() => {
		const classAsKey = statValues.class as keyof classesObjectTypes
		const prevNexValue = prevNexRef.current
		setStatValue((prevState) => ({
			...prevState,
			maxHp:
				classes[classAsKey].initialPv +
				statValues.vig +
				(statValues.nex - 1) * (statValues.vig + classes[classAsKey].levelPv),
			currentHp: Math.max(
				0,
				prevState.currentHp +
					(statValues.nex - prevNexValue) *
						(statValues.vig + classes[classAsKey].levelPv),
			),
			maxSan:
				classes[classAsKey].initialSan +
				(statValues.nex - 1) * classes[classAsKey].levelSan,
			currentSan: Math.max(
				0,
				prevState.currentSan +
					(statValues.nex - prevNexValue) * classes[classAsKey].levelSan,
			),
			maxPe:
				classes[classAsKey].initialPe +
				statValues.pre +
				(statValues.nex - 1) * (statValues.pre + classes[classAsKey].levelPe),
			currentPe: Math.max(
				0,
				prevState.currentPe +
					(statValues.nex - prevNexValue) *
						(statValues.pre + classes[classAsKey].levelPe),
			),
			maxPd:
				classes[classAsKey].initialPd +
				statValues.pre +
				(statValues.nex - 1) * (statValues.pre + classes[classAsKey].levelPd),
			currentPd: Math.max(
				0,
				prevState.currentPd +
					(statValues.nex - prevNexValue) *
						(statValues.pre + classes[classAsKey].levelPd),
			),
		}))
		prevNexRef.current = statValues.nex
	}, [statValues.vig, statValues.pre, statValues.nex, statValues.class])

	useEffect(() => {
		setRawStatInputValue((prev) => ({
			...prev,
			maxHp: statValues.maxHp.toString(),
		}))
	}, [statValues.maxHp])

	useEffect(() => {
		setRawStatInputValue((prev) => ({
			...prev,
			currentHp: statValues.currentHp.toString(),
		}))
	}, [statValues.currentHp])

	useEffect(() => {
		setRawStatInputValue((prev) => ({
			...prev,
			maxSan: statValues.maxSan.toString(),
		}))
	}, [statValues.maxSan])

	useEffect(() => {
		setRawStatInputValue((prev) => ({
			...prev,
			currentSan: statValues.currentSan.toString(),
		}))
	}, [statValues.currentSan])

	useEffect(() => {
		setRawStatInputValue((prev) => ({
			...prev,
			maxPe: statValues.maxPe.toString(),
		}))
	}, [statValues.maxPe])

	useEffect(() => {
		setRawStatInputValue((prev) => ({
			...prev,
			currentPe: statValues.currentPe.toString(),
		}))
	}, [statValues.currentPe])

	useEffect(() => {
		setRawStatInputValue((prev) => ({
			...prev,
			maxPd: statValues.maxPd.toString(),
		}))
	}, [statValues.maxPd])

	useEffect(() => {
		setRawStatInputValue((prev) => ({
			...prev,
			currentPd: statValues.currentPd.toString(),
		}))
	}, [statValues.currentPd])

	useEffect(() => {
		setRawStatInputValue((prev) => ({
			...prev,
			equipDef: statValues.equipDef.toString(),
		}))
	}, [statValues.equipDef])

	const prevReflexesRef = useRef(
		skillAttributes.Reflexes.training + skillAttributes.Reflexes.otherBonus,
	)

	useEffect(() => {
		const prevReflexesValue = prevReflexesRef.current
		setStatValue((prev) => ({
			...prev,
			dodge:
				prev.dodge +
				(skillAttributes.Reflexes.training +
					skillAttributes.Reflexes.otherBonus -
					prevReflexesValue),
		}))
		prevReflexesRef.current =
			skillAttributes.Reflexes.training + skillAttributes.Reflexes.otherBonus
	}, [skillAttributes.Reflexes.training, skillAttributes.Reflexes.otherBonus])

	useEffect(() => {
		setRawStatInputValue((prev) => ({
			...prev,
			dodge: statValues.dodge.toString(),
		}))
	}, [statValues.dodge])

	const prevFortitudeRef = useRef(
		skillAttributes.Fortitude.training + skillAttributes.Fortitude.otherBonus,
	)

	useEffect(() => {
		const prevFortitudeValue = prevFortitudeRef.current
		setStatValue((prev) => ({
			...prev,
			blockDr:
				prev.blockDr +
				(skillAttributes.Fortitude.training +
					skillAttributes.Fortitude.otherBonus -
					prevFortitudeValue),
		}))
		prevFortitudeRef.current =
			skillAttributes.Fortitude.training + skillAttributes.Fortitude.otherBonus
	}, [skillAttributes.Fortitude.training, skillAttributes.Fortitude.otherBonus])

	const updateBarValueOnBlur =
		(statToChange: string) => (value: number, current: boolean) => {
			if (
				statValues[
					`${current ? "current" : "max"}${statToChange}` as keyof statObjectTypes
				] === 0
			) {
				setRawStatInputValue({
					...rawStatInputValues,
					[`${current ? "current" : "max"}${statToChange}`]: "0",
				})
			}
			setStatValue({
				...statValues,
				[`${current ? "current" : "max"}${statToChange}`]: Math.max(0, value),
			})
		}

	const updateBarValueOnChange =
		(statToChange: string) => (value: string, current: boolean) =>
			setRawStatInputValue({
				...rawStatInputValues,
				[`${current ? "current" : "max"}${statToChange}`]: value,
			})

	const updateBarValueClick = (statToChange: string) => (value: number) => {
		setStatValue({
			...statValues,
			[`current${statToChange}`]: Math.max(
				0,
				(statValues[
					`current${statToChange}` as keyof statObjectTypes
				] as number) + value,
			),
		})
	}
	const defenseValue: number =
		10 + statValues.agi + statValues.equipDef + statValues.otherDef

	return (
		<div className="mx-auto min-h-[90vh] max-w-[1280px]">
			<Toaster closeButton theme="dark" visibleToasts={9} />
			<div className="flex justify-between border-1 border-white">
				<div className="box-border w-106 pl-2">
					<button
						className="hover:cursor-pointer"
						onClick={() => {
							setStatValue({
								...statValues,
								str: statValues.str - 1,
							})
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
								description: `${rollDice(statValues.str)}`,
							})
						}}
					>
						<span className="p-2 font-bold">Strength: {statValues.str}</span>
					</RollSkillButton>
					<button
						className="hover:cursor-pointer"
						onClick={() => {
							setStatValue({
								...statValues,
								str: statValues.str + 1,
							})
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
								setStatValue({
									...statValues,
									agi: statValues.agi - 1,
								})
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
									description: `${rollDice(statValues.agi)}`,
								})
							}}
						>
							<span className="p-2 font-bold">Agility: {statValues.agi}</span>
						</RollSkillButton>
						<button
							className="hover:cursor-pointer"
							onClick={() => {
								setStatValue({
									...statValues,
									agi: statValues.agi + 1,
								})
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
								setStatValue({
									...statValues,
									int: statValues.int - 1,
								})
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
									description: `${rollDice(statValues.int)}`,
								})
							}}
						>
							<span className="p-2 font-bold">Intellect: {statValues.int}</span>
						</RollSkillButton>
						<button
							className="hover:cursor-pointer"
							onClick={() => {
								setStatValue({
									...statValues,
									int: statValues.int + 1,
								})
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
								setStatValue({
									...statValues,
									vig: statValues.vig - 1,
								})
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
									description: `${rollDice(statValues.vig)}`,
								})
							}}
						>
							<span className="p-2 font-bold">Vigor: {statValues.vig}</span>
						</RollSkillButton>
						<button
							className="hover:cursor-pointer"
							onClick={() => {
								setStatValue({
									...statValues,
									vig: statValues.vig + 1,
								})
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
								setStatValue({
									...statValues,
									pre: statValues.pre - 1,
								})
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
									description: `${rollDice(statValues.pre)}`,
								})
							}}
						>
							<span className="p-2 font-bold">Presence: {statValues.pre}</span>
						</RollSkillButton>
						<button
							className="hover:cursor-pointer"
							onClick={() => {
								setStatValue({
									...statValues,
									pre: statValues.pre + 1,
								})
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
								defaultValue={statValues.class}
								onChange={(e) => {
									setStatValue({
										...statValues,
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
								defaultValue={statValues.nex}
								onChange={(e) =>
									setStatValue({
										...statValues,
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
							currentStatValue={statValues.currentHp}
							currentStatValueInput={rawStatInputValues.currentHp}
							label="HEALTH"
							maxStatValue={statValues.maxHp}
							maxStatValueInput={rawStatInputValues.maxHp}
							onBlur={updateBarValueOnBlur("Hp")}
							onChange={updateBarValueOnChange("Hp")}
							onClick={updateBarValueClick("Hp")}
						/>
						<StatBar
							barColor="bg-blue-500"
							currentStatValue={statValues.currentSan}
							currentStatValueInput={rawStatInputValues.currentSan}
							label="SANITY"
							maxStatValue={statValues.maxSan}
							maxStatValueInput={rawStatInputValues.maxSan}
							onBlur={updateBarValueOnBlur("San")}
							onChange={updateBarValueOnChange("San")}
							onClick={updateBarValueClick("San")}
						/>
						<StatBar
							barColor="bg-yellow-600"
							currentStatValue={statValues.currentPe}
							currentStatValueInput={rawStatInputValues.currentPe}
							label="EFFORT"
							maxStatValue={statValues.maxPe}
							maxStatValueInput={rawStatInputValues.maxPe}
							onBlur={updateBarValueOnBlur("Pe")}
							onChange={updateBarValueOnChange("Pe")}
							onClick={updateBarValueClick("Pe")}
						/>
						<StatBar
							barColor="bg-sky-400"
							currentStatValue={statValues.currentPd}
							currentStatValueInput={rawStatInputValues.currentPd}
							label="DETERMINATION"
							maxStatValue={statValues.maxPd}
							maxStatValueInput={rawStatInputValues.maxPd}
							onBlur={updateBarValueOnBlur("Pd")}
							onChange={updateBarValueOnChange("Pd")}
							onClick={updateBarValueClick("Pd")}
						/>
					</div>
					<div className="roberto">
						Defense: {defenseValue}
						<p>
							Equip:{" "}
							<input
								className="w-5 border-b-1 p-0 text-center"
								inputMode="numeric"
								onBlur={(e) => {
									if (statValues.equipDef === 0) {
										setRawStatInputValue({
											...rawStatInputValues,
											equipDef: "0",
										})
									}
									setStatValue({
										...statValues,
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
								defaultValue={statValues.otherDef}
								inputMode="numeric"
								onChange={(e) => {
									const value = Number(e.target.value)
									setStatValue({
										...statValues,
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
									if (statValues.dodge === 0) {
										setRawStatInputValue({
											...rawStatInputValues,
											dodge: "0",
										})
									}
									setStatValue({
										...statValues,
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
						<p>
							test {statValues.currentHp} {rawStatInputValues.currentHp}{" "}
							{statValues.equipDef}
						</p>
					</div>
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
																statValues[
																	skillAttributes[
																		`${skillNameAsKey}`
																	].attribute.toLowerCase() as keyof statObjectTypes
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
												value={skillAttributes[skillNameAsKey].attribute}
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
												className="w-9 border-b-1 text-center hover:cursor-pointer hover:text-purple-500"
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
													className="w-9 border-b-1 text-center"
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
						className="border-b-2"
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
