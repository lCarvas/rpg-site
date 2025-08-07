"use client"

import type { CharacterSheetResponseType } from "@api/routes/users"
import { Plus } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"
import minusIcon from "public/icons/circle-minus-solid.svg"
import plusIcon from "public/icons/circle-plus-solid.svg"
import { useEffect, useRef, useState } from "react"
import { Toaster, toast } from "sonner"
import { RollSkillButton } from "@/components/dice-component"
import { StatBar } from "@/components/stat-bar"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogOverlay,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
	addAbility,
	getCharacterSheet,
	removeAbility,
	saveCharacterChanges,
	saveCharacterSkills,
} from "@/dal/dal"
import { paranormalPowers } from "@/data/abilities"
import { backgrounds } from "@/data/backgrounds"
import { classes, type classesObjectTypes } from "@/data/classes"
import { skills } from "@/data/skills"
import { rollDice, rollDiceNotation } from "@/utils/dice"

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
	[key: string]: {
		attribute: string
		trainingBonus: string | number
		otherBonus: string | number
	}
}

export interface StatsType {
	currentHp: string
	maxHp: string
	currentSan: string
	maxSan: string
	currentPe: string
	maxPe: string
	currentPd: string
	maxPd: string
}

const trainingColorMap: Record<string, string> = {
	"0": "text-white border-white",
	"5": "text-green-700 border-green-700",
	"10": "text-blue-800 border-blue-800",
	"15": "text-yellow-700 border-yellow-700",
}

export default function CharacterSheet() {
	const characterSheetIdRef = useRef<string>(useParams<{ id: string }>().id)
	const [characterSheetDataObject, setCharacterSheetDataObject] =
		useState<CharacterSheetResponseType | null>(null)
	const [globalStats, setGlobalStats] = useState<globalStatTypes | null>(null)
	const [defensiveStats, setDefensiveStats] = useState<{
		equipDef: string | number
		otherDef: string | number
		dodge: string | number
		blockDr: string | number
	} | null>(null)
	const [skillAttributes, setSkillAttributes] =
		useState<skillObjectTypes | null>(
			Object.fromEntries(
				Object.entries(skills).map(([key, value]) => [
					key,
					{ attribute: value.attribute, trainingBonus: 0, otherBonus: 0 },
				]),
			),
		)
	const [stats, setStats] = useState<StatsType | null>(null)

	useEffect(() => {
		async function fetchData() {
			const data = await getCharacterSheet(characterSheetIdRef.current)
			setCharacterSheetDataObject(data)
			setGlobalStats({
				agi: data.agi,
				str: data.str,
				int: data.int,
				vig: data.vig,
				pre: data.pre,
				nex: data.nex,
				class: data.class,
				background: data.background,
			})
			setDefensiveStats({
				equipDef: data.equipDef,
				otherDef: data.otherDef,
				dodge: data.dodge,
				blockDr: data.blockDr,
			})
			setSkillAttributes((prevState) => ({
				...prevState,
				...Object.fromEntries(
					data.skills.map((skill) => [
						skill.skill.name,
						{
							attribute: skill.attribute,
							trainingBonus: skill.trainingBonus,
							otherBonus: skill.otherBonus,
						},
					]),
				),
			}))
			setStats({
				currentHp: data.currentHp.toString(),
				maxHp: data.maxHp.toString(),
				currentSan: data.currentSan.toString(),
				maxSan: data.maxSan.toString(),
				currentPe: data.currentPe.toString(),
				maxPe: data.maxPe.toString(),
				currentPd: data.currentPd.toString(),
				maxPd: data.maxPd.toString(),
			})
		}
		fetchData()
	}, [])

	const prevNexRef = useRef(0)
	const prevFortitudeRef = useRef(0)
	const prevReflexesRef = useRef(0)

	if (
		!characterSheetDataObject ||
		!globalStats ||
		!defensiveStats ||
		!skillAttributes ||
		!stats
	) {
		return (
			<div className="flex h-[100vh] items-center justify-center">
				<div className="h-16 w-16 animate-spin rounded-full border-6 border-primary border-t-transparent border-solid"></div>
			</div>
		)
	}

	prevNexRef.current = globalStats.nex
	prevFortitudeRef.current =
		Number(skillAttributes.fortitude.trainingBonus) +
		Number(skillAttributes.fortitude.otherBonus)
	prevReflexesRef.current =
		Number(skillAttributes.reflexos.trainingBonus) +
		Number(skillAttributes.reflexos.otherBonus)

	const defenseValue =
		10 +
		globalStats.agi +
		Number(defensiveStats.equipDef) +
		Number(defensiveStats.otherDef)

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
							saveCharacterChanges(characterSheetIdRef.current, {
								str: globalStats.str - 1,
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
							saveCharacterChanges(characterSheetIdRef.current, {
								str: globalStats.str + 1,
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
								setGlobalStats({
									...globalStats,
									agi: globalStats.agi - 1,
								})
								saveCharacterChanges(characterSheetIdRef.current, {
									agi: globalStats.agi - 1,
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
								saveCharacterChanges(characterSheetIdRef.current, {
									agi: globalStats.agi + 1,
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
								setGlobalStats({
									...globalStats,
									int: globalStats.int - 1,
								})
								saveCharacterChanges(characterSheetIdRef.current, {
									int: globalStats.int - 1,
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
								saveCharacterChanges(characterSheetIdRef.current, {
									int: globalStats.int + 1,
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
								setGlobalStats({
									...globalStats,
									vig: globalStats.vig - 1,
								})

								saveCharacterChanges(characterSheetIdRef.current, {
									vig: globalStats.vig - 1,
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
								saveCharacterChanges(characterSheetIdRef.current, {
									vig: globalStats.vig + 1,
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
								setGlobalStats({
									...globalStats,
									pre: globalStats.pre - 1,
								})
								saveCharacterChanges(characterSheetIdRef.current, {
									pre: globalStats.pre - 1,
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
								saveCharacterChanges(characterSheetIdRef.current, {
									pre: globalStats.pre + 1,
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
								defaultValue={globalStats.class}
								onChange={(e) => {
									const prevNexValue = prevNexRef.current
									const classAsKey = e.target.value as keyof classesObjectTypes
									const newStats = {
										maxHp: (
											classes[classAsKey].initialHp +
											globalStats.vig +
											(globalStats.nex - 1) *
												(globalStats.vig + classes[classAsKey].levelHp)
										).toString(),
										currentHp: Math.max(
											0,
											Number(stats.currentHp) +
												(globalStats.nex - prevNexValue) *
													(globalStats.vig + classes[classAsKey].levelHp),
										).toString(),
										maxSan: (
											classes[classAsKey].initialSan +
											(globalStats.nex - 1) * classes[classAsKey].levelSan
										).toString(),
										currentSan: Math.max(
											0,
											Number(stats.currentSan) +
												(globalStats.nex - prevNexValue) *
													classes[classAsKey].levelSan,
										).toString(),
										maxPe: (
											classes[classAsKey].initialPe +
											globalStats.pre +
											(globalStats.nex - 1) *
												(globalStats.pre + classes[classAsKey].levelPe)
										).toString(),
										currentPe: Math.max(
											0,
											Number(stats.currentPe) +
												(globalStats.nex - prevNexValue) *
													(globalStats.pre + classes[classAsKey].levelPe),
										).toString(),
										maxPd: (
											classes[classAsKey].initialPd +
											globalStats.pre +
											(globalStats.nex - 1) *
												(globalStats.pre + classes[classAsKey].levelPd)
										).toString(),
										currentPd: Math.max(
											0,
											Number(stats.currentPd) +
												(globalStats.nex - prevNexValue) *
													(globalStats.pre + classes[classAsKey].levelPd),
										).toString(),
									}
									setGlobalStats({
										...globalStats,
										class: e.target.value,
									})
									setStats((prevState) => ({
										...prevState,
										...newStats,
									}))
									saveCharacterChanges(characterSheetIdRef.current, {
										class: e.target.value,
										...newStats,
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
								onChange={(e) => {
									const newNexValue = Number(e.target.value)
									const prevNexValue = prevNexRef.current
									const classAsKey =
										globalStats.class as keyof classesObjectTypes

									setGlobalStats({
										...globalStats,
										nex: newNexValue,
									})

									const newStats = {
										maxHp: (
											classes[classAsKey].initialHp +
											globalStats.vig +
											(newNexValue - 1) *
												(globalStats.vig + classes[classAsKey].levelHp)
										).toString(),
										currentHp: Math.max(
											0,
											Number(stats.currentHp) +
												(newNexValue - prevNexValue) *
													(globalStats.vig + classes[classAsKey].levelHp),
										).toString(),
										maxSan: (
											classes[classAsKey].initialSan +
											(newNexValue - 1) * classes[classAsKey].levelSan
										).toString(),
										currentSan: Math.max(
											0,
											Number(stats.currentSan) +
												(newNexValue - prevNexValue) *
													classes[classAsKey].levelSan,
										).toString(),
										maxPe: (
											classes[classAsKey].initialPe +
											globalStats.pre +
											(newNexValue - 1) *
												(globalStats.pre + classes[classAsKey].levelPe)
										).toString(),
										currentPe: Math.max(
											0,
											Number(stats.currentPe) +
												(newNexValue - prevNexValue) *
													(globalStats.pre + classes[classAsKey].levelPe),
										).toString(),
										maxPd: (
											classes[classAsKey].initialPd +
											globalStats.pre +
											(newNexValue - 1) *
												(globalStats.pre + classes[classAsKey].levelPd)
										).toString(),
										currentPd: Math.max(
											0,
											Number(stats.currentPd) +
												(newNexValue - prevNexValue) *
													(globalStats.pre + classes[classAsKey].levelPd),
										).toString(),
									}
									setStats((prevState) => ({
										...prevState,
										...newStats,
									}))
									saveCharacterChanges(characterSheetIdRef.current, {
										nex: newNexValue,
										...newStats,
									})
									prevNexRef.current = newNexValue
								}}
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
							label="HEALTH"
							setStatsState={setStats}
							stat="Hp"
							statsState={stats}
						/>
						<StatBar
							barColor="bg-blue-500"
							label="SANITY"
							setStatsState={setStats}
							stat="San"
							statsState={stats}
						/>
						<StatBar
							barColor="bg-yellow-600"
							label="EFFORT"
							setStatsState={setStats}
							stat="Pe"
							statsState={stats}
						/>
						<StatBar
							barColor="bg-sky-400"
							label="DETERMINATION"
							setStatsState={setStats}
							stat="Pd"
							statsState={stats}
						/>
					</div>
					<div>
						Defense: {defenseValue}
						<p>
							Equip:{" "}
							<input
								className="w-5 border-b-1 p-0 text-center"
								inputMode="numeric"
								onBlur={(e) => {
									setDefensiveStats({
										...defensiveStats,
										equipDef: Number(e.target.value),
									})
									saveCharacterChanges(characterSheetIdRef.current, {
										equipDef: Number(e.target.value),
									})
									e.target.value = e.target.value.replace(/^0+(?=\d)/, "")
								}}
								onChange={(e) => {
									setDefensiveStats({
										...defensiveStats,
										equipDef: e.target.value,
									})
								}}
								type="number"
								value={defensiveStats.equipDef}
							/>
						</p>
						<p>
							Other:{" "}
							<input
								className="w-5 border-b-1 p-0 text-center"
								inputMode="numeric"
								onBlur={(e) => {
									setDefensiveStats({
										...defensiveStats,
										otherDef: Number(e.target.value),
									})
									saveCharacterChanges(characterSheetIdRef.current, {
										otherDef: Number(e.target.value),
									})
									e.target.value = e.target.value.replace(/^0+(?=\d)/, "")
								}}
								onChange={(e) => {
									setDefensiveStats({
										...defensiveStats,
										otherDef: e.target.value,
									})
								}}
								type="number"
								value={defensiveStats.otherDef}
							/>
						</p>
						<p>
							Dodge:{" "}
							<input
								className="w-5 border-b-1 text-center"
								inputMode="numeric"
								onBlur={(e) => {
									setDefensiveStats({
										...defensiveStats,
										dodge: Number(e.target.value),
									})
									saveCharacterChanges(characterSheetIdRef.current, {
										dodge: Number(e.target.value),
									})
									e.target.value = e.target.value.replace(/^0+(?=\d)/, "")
								}}
								onChange={(e) => {
									setDefensiveStats({
										...defensiveStats,
										dodge: e.target.value,
									})
								}}
								type="number"
								value={defensiveStats.dodge}
							/>
						</p>
						<p>
							Block DR:{" "}
							<input
								className="w-5 border-b-1 text-center"
								inputMode="numeric"
								onBlur={(e) => {
									setDefensiveStats({
										...defensiveStats,
										blockDr: Number(e.target.value),
									})
									saveCharacterChanges(characterSheetIdRef.current, {
										blockDr: Number(e.target.value),
									})
									e.target.value = e.target.value.replace(/^0+(?=\d)/, "")
								}}
								onChange={(e) => {
									setDefensiveStats({
										...defensiveStats,
										blockDr: e.target.value,
									})
								}}
								type="number"
								value={defensiveStats.blockDr}
							/>
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
							{Object.keys(skills).map((skillKey) => {
								const skill = skills[skillKey as keyof typeof skills]
								const skillBonus =
									Number(skillAttributes[skillKey].trainingBonus) +
									Number(skillAttributes[skillKey].otherBonus)

								return (
									<tr
										className={
											trainingColorMap[
												skillAttributes[skillKey].trainingBonus
											] || "border-white text-white"
										}
										data-skill-id={skillKey}
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
																		`${skillKey}`
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
														[skillKey]: {
															...skillAttributes[skillKey],
															attribute: e.target.value,
														},
													})
													saveCharacterSkills(characterSheetIdRef.current, {
														skillNameId: skillKey,
														attribute: e.target.value,
													})
												}}
												value={skillAttributes[skillKey].attribute}
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
														[skillKey]: {
															...skillAttributes[skillKey],
															trainingBonus: e.target.value,
														},
													})
													saveCharacterSkills(characterSheetIdRef.current, {
														skillNameId: skillKey,
														trainingBonus: Number(e.target.value),
													})
													if (skillKey === "fortitude") {
														const newValue =
															Number(defensiveStats.blockDr) +
															Number(e.target.value) -
															Number(skillAttributes.fortitude.trainingBonus)
														setDefensiveStats({
															...defensiveStats,
															blockDr: newValue,
														})
														saveCharacterChanges(characterSheetIdRef.current, {
															blockDr: newValue,
														})
													}
													if (skillKey === "reflexos") {
														const newValue =
															Number(defensiveStats.dodge) +
															Number(e.target.value) -
															Number(skillAttributes.reflexos.trainingBonus)
														setDefensiveStats({
															...defensiveStats,
															dodge: newValue,
														})
														saveCharacterChanges(characterSheetIdRef.current, {
															newValue,
														})
													}
												}}
												value={skillAttributes[skillKey].trainingBonus}
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
													inputMode="numeric"
													onBlur={(e) => {
														setSkillAttributes({
															...skillAttributes,
															[skillKey]: {
																...skillAttributes[skillKey],
																otherBonus: Number(e.target.value),
															},
														})
														saveCharacterSkills(characterSheetIdRef.current, {
															skillNameId: skillKey,
															otherBonus: Number(e.target.value),
														})
														e.target.value = e.target.value.replace(
															/^0+(?=\d)/,
															"",
														)
														if (skillKey === "fortitude") {
															saveCharacterChanges(
																characterSheetIdRef.current,
																{
																	blockDr: defensiveStats.blockDr,
																},
															)
														}
														if (skillKey === "reflexos") {
															saveCharacterChanges(
																characterSheetIdRef.current,
																{
																	dodge: defensiveStats.dodge,
																},
															)
														}
													}}
													onChange={(e) => {
														setSkillAttributes({
															...skillAttributes,
															[skillKey]: {
																...skillAttributes[skillKey],
																otherBonus: e.target.value,
															},
														})
														if (skillKey === "fortitude") {
															const newValue =
																Number(defensiveStats.blockDr) +
																Number(e.target.value) -
																Number(skillAttributes.fortitude.otherBonus)
															setDefensiveStats({
																...defensiveStats,
																blockDr: newValue,
															})
														}
														if (skillKey === "reflexos") {
															const newValue =
																Number(defensiveStats.dodge) +
																Number(e.target.value) -
																Number(skillAttributes.reflexos.otherBonus)
															setDefensiveStats({
																...defensiveStats,
																dodge: newValue,
															})
														}
													}}
													type="number"
													value={skillAttributes[skillKey].otherBonus}
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
				<div className="w-125 px-2">
					<Tabs defaultValue="combat">
						<TabsList className="flex w-[100%] items-start bg-background">
							<TabsTrigger value="combat">COMBAT</TabsTrigger>
							<TabsTrigger value="abilities">ABILITIES</TabsTrigger>
							<TabsTrigger value="rituals">RITUALS</TabsTrigger>
							<TabsTrigger value="inventory">INVENTORY</TabsTrigger>
							<TabsTrigger value="description">DESCRIPTION</TabsTrigger>
						</TabsList>
						<TabsContent value="combat">
							<input
								className="w-[98%] border-white border-b-2"
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										toast(`${rollDiceNotation(e.currentTarget.value)}`)
										e.currentTarget.value = ""
									}
								}}
								placeholder="Roll Dice"
								type="text"
							/>
						</TabsContent>
						<TabsContent className="flex flex-col gap-3" value="abilities">
							<Dialog>
								<DialogTrigger asChild>
									<Button>Add Ability</Button>
								</DialogTrigger>
								<DialogOverlay>
									<DialogContent
										aria-describedby={undefined}
										className="scrollbar-hidden max-h-[500px] min-w-240 overflow-y-auto"
									>
										<DialogHeader>
											<DialogTitle>Add Ability</DialogTitle>
										</DialogHeader>
										<Tabs>
											<TabsList>
												<TabsTrigger value="combatant">Combatant</TabsTrigger>
												<TabsTrigger value="specialist">Specialist</TabsTrigger>
												<TabsTrigger value="occultist">Occultist</TabsTrigger>
												<TabsTrigger value="backgrounds">
													Backgrounds
												</TabsTrigger>
												<TabsTrigger value="paranormal">
													Paranormal Powers
												</TabsTrigger>
											</TabsList>
											<TabsContent value="combatant">
												<Accordion
													className="rounded-md bg-white/5 px-2"
													type="multiple"
												>
													{[
														...classes.combatant.powers,
														...classes.combatant.abilities,
													]
														.sort((a, b) => a.name.localeCompare(b.name))
														.map((power) => {
															return (
																<AccordionItem
																	key={power.name}
																	value={power.name}
																>
																	<AccordionTrigger asChild>
																		<div>
																			<p>{power.name}</p>
																			<Button
																				className="hover:cursor-pointer"
																				onClick={async () => {
																					const newAbility = await addAbility(
																						characterSheetIdRef.current,
																						{
																							name: power.name,
																							description: power.description,
																						},
																					)
																					setCharacterSheetDataObject({
																						...characterSheetDataObject,
																						abilities: [
																							...characterSheetDataObject.abilities,
																							{
																								id: newAbility,
																								name: power.name,
																								description: power.description,
																							},
																						],
																					})
																				}}
																			>
																				<Plus />
																			</Button>
																		</div>
																	</AccordionTrigger>
																	<AccordionContent asChild>
																		{power.description}
																	</AccordionContent>
																</AccordionItem>
															)
														})}
												</Accordion>
											</TabsContent>
											<TabsContent value="specialist">
												<Accordion
													className="rounded-md bg-white/5 px-2"
													type="multiple"
												>
													{[
														...classes.specialist.powers,
														...classes.specialist.abilities,
													]
														.sort((a, b) => a.name.localeCompare(b.name))
														.map((power) => {
															return (
																<AccordionItem
																	key={power.name}
																	value={power.name}
																>
																	<AccordionTrigger asChild>
																		<div>
																			<p>{power.name}</p>
																			<Button
																				className="hover:cursor-pointer"
																				onClick={async () => {
																					const newAbility = await addAbility(
																						characterSheetIdRef.current,
																						{
																							name: power.name,
																							description: power.description,
																						},
																					)
																					setCharacterSheetDataObject({
																						...characterSheetDataObject,
																						abilities: [
																							...characterSheetDataObject.abilities,
																							{
																								id: newAbility,
																								name: power.name,
																								description: power.description,
																							},
																						],
																					})
																				}}
																			>
																				<Plus />
																			</Button>
																		</div>
																	</AccordionTrigger>
																	<AccordionContent asChild>
																		{power.description}
																	</AccordionContent>
																</AccordionItem>
															)
														})}
												</Accordion>
											</TabsContent>
											<TabsContent value="occultist">
												<Accordion
													className="rounded-md bg-white/5 px-2"
													type="multiple"
												>
													{[
														...classes.occultist.powers,
														...classes.occultist.abilities,
													]
														.sort((a, b) => a.name.localeCompare(b.name))
														.map((power) => {
															return (
																<AccordionItem
																	key={power.name}
																	value={power.name}
																>
																	<AccordionTrigger asChild>
																		<div>
																			<p>{power.name}</p>
																			<Button
																				className="hover:cursor-pointer"
																				onClick={async () => {
																					const newAbility = await addAbility(
																						characterSheetIdRef.current,
																						{
																							name: power.name,
																							description: power.description,
																						},
																					)
																					setCharacterSheetDataObject({
																						...characterSheetDataObject,
																						abilities: [
																							...characterSheetDataObject.abilities,
																							{
																								id: newAbility,
																								name: power.name,
																								description: power.description,
																							},
																						],
																					})
																				}}
																			>
																				<Plus />
																			</Button>
																		</div>
																	</AccordionTrigger>
																	<AccordionContent asChild>
																		{power.description}
																	</AccordionContent>
																</AccordionItem>
															)
														})}
												</Accordion>
											</TabsContent>
											<TabsContent value="backgrounds">
												<Accordion
													className="rounded-md bg-white/5 px-2"
													type="multiple"
												>
													{Object.values(backgrounds)
														.sort((a, b) =>
															a.power.name.localeCompare(b.power.name),
														)
														.map((background) => {
															return (
																<AccordionItem
																	key={background.power.name}
																	value={background.power.name}
																>
																	<AccordionTrigger asChild>
																		<div>
																			<p>{background.power.name}</p>
																			<Button
																				className="hover:cursor-pointer"
																				onClick={async () => {
																					const newAbility = await addAbility(
																						characterSheetIdRef.current,
																						{
																							name: background.power.name,
																							description:
																								background.power.description,
																						},
																					)
																					setCharacterSheetDataObject({
																						...characterSheetDataObject,
																						abilities: [
																							...characterSheetDataObject.abilities,
																							{
																								id: newAbility,
																								name: background.power.name,
																								description:
																									background.power.description,
																							},
																						],
																					})
																				}}
																			>
																				<Plus />
																			</Button>
																		</div>
																	</AccordionTrigger>
																	<AccordionContent asChild>
																		{background.power.description}
																	</AccordionContent>
																</AccordionItem>
															)
														})}
												</Accordion>
											</TabsContent>
											<TabsContent value="paranormal">
												<Accordion
													className="rounded-md bg-white/5 px-2"
													type="multiple"
												>
													{paranormalPowers
														.sort((a, b) => a.name.localeCompare(b.name))
														.map((power) => (
															<AccordionItem
																key={power.name}
																value={power.name}
															>
																<AccordionTrigger asChild>
																	<div>
																		<p>{power.name}</p>
																		<Button
																			className="hover:cursor-pointer"
																			onClick={async () => {
																				const newAbility = await addAbility(
																					characterSheetIdRef.current,
																					{
																						name: power.name,
																						description: power.description,
																					},
																				)
																				setCharacterSheetDataObject({
																					...characterSheetDataObject,
																					abilities: [
																						...characterSheetDataObject.abilities,
																						{
																							id: newAbility,
																							name: power.name,
																							description: power.description,
																						},
																					],
																				})
																			}}
																		>
																			<Plus />
																		</Button>
																	</div>
																</AccordionTrigger>
																<AccordionContent asChild>
																	{power.description}
																</AccordionContent>
															</AccordionItem>
														))}
												</Accordion>
											</TabsContent>
										</Tabs>
									</DialogContent>
								</DialogOverlay>
							</Dialog>
							<div>
								{characterSheetDataObject.abilities.map((ability) => (
									<Accordion
										className="rounded-md bg-white/5 px-2"
										collapsible
										key={ability.id}
										type="single"
									>
										<AccordionItem value="item">
											<AccordionTrigger>{ability.name}</AccordionTrigger>
											<AccordionContent asChild>
												<div>
													{ability.description}
													<div className="flex justify-between">
														<Button
															className="text-green-500 text-xs hover:cursor-pointer"
															variant="link"
														>
															Edit
														</Button>
														<Button
															className="text-red-500 text-xs hover:cursor-pointer"
															onClick={() => {
																removeAbility(characterSheetIdRef.current, {
																	abilityId: ability.id,
																})
																setCharacterSheetDataObject({
																	...characterSheetDataObject,
																	abilities:
																		characterSheetDataObject.abilities.filter(
																			(abl) => ability.id !== abl.id,
																		),
																})
															}}
															variant="link"
														>
															Delete
														</Button>
													</div>
												</div>
											</AccordionContent>
										</AccordionItem>
									</Accordion>
								))}
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</div>
	)
}
