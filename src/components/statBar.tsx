import type { globalStatTypes } from "@/app/characters/page"
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { classes, type classesObjectTypes } from "@/data/classes"

interface StatBarProps {
	label: string
	barColor: string
	stat: "Hp" | "San" | "Pe" | "Pd"
	globalStats: globalStatTypes
}

interface StatsType {
	currentHp: string
	maxHp: string
	currentSan: string
	maxSan: string
	currentPe: string
	maxPe: string
	currentPd: string
	maxPd: string
}

export function StatBar({ label, barColor, stat, globalStats }: StatBarProps) {
	const [stats, setStats] = useState<StatsType>({
		currentHp: "0",
		maxHp: "0",
		currentSan: "0",
		maxSan: "0",
		currentPe: "0",
		maxPe: "0",
		currentPd: "0",
		maxPd: "0",
	})

	const prevNexRef = useRef(globalStats.nex)

	useEffect(() => {
		const classAsKey = globalStats.class as keyof classesObjectTypes
		const prevNexValue = prevNexRef.current
		setStats((prevState) => ({
			...prevState,
			maxHp: (
				classes[classAsKey].initialPv +
				globalStats.vig +
				(globalStats.nex - 1) * (globalStats.vig + classes[classAsKey].levelPv)
			).toString(),
			currentHp: Math.max(
				0,
				Number(prevState.currentHp) +
					(globalStats.nex - prevNexValue) *
						(globalStats.vig + classes[classAsKey].levelPv),
			).toString(),
			maxSan: (
				classes[classAsKey].initialSan +
				(globalStats.nex - 1) * classes[classAsKey].levelSan
			).toString(),
			currentSan: Math.max(
				0,
				Number(prevState.currentSan) +
					(globalStats.nex - prevNexValue) * classes[classAsKey].levelSan,
			).toString(),
			maxPe: (
				classes[classAsKey].initialPe +
				globalStats.pre +
				(globalStats.nex - 1) * (globalStats.pre + classes[classAsKey].levelPe)
			).toString(),
			currentPe: Math.max(
				0,
				Number(prevState.currentPe) +
					(globalStats.nex - prevNexValue) *
						(globalStats.pre + classes[classAsKey].levelPe),
			).toString(),
			maxPd: (
				classes[classAsKey].initialPd +
				globalStats.pre +
				(globalStats.nex - 1) * (globalStats.pre + classes[classAsKey].levelPd)
			).toString(),
			currentPd: Math.max(
				0,
				Number(prevState.currentPd) +
					(globalStats.nex - prevNexValue) *
						(globalStats.pre + classes[classAsKey].levelPd),
			).toString(),
		}))
		prevNexRef.current = globalStats.nex
	}, [globalStats.vig, globalStats.pre, globalStats.nex, globalStats.class])

	function updateBarValueOnBlur(
		statToChange: string,
		value: number,
		current: boolean,
	) {
		setStats({
			...stats,
			[`${current ? "current" : "max"}${statToChange}`]: Math.max(0, value),
		})
	}

	function updateBarValueOnChange(
		statToChange: string,
		value: string,
		current: boolean,
	) {
		setStats({
			...stats,
			[`${current ? "current" : "max"}${statToChange}`]: value,
		})
	}

	function updateBarValueClick(statToChange: string, value: number) {
		setStats({
			...stats,
			[`current${statToChange}`]: Math.max(
				0,
				Number(stats[`current${statToChange}` as keyof StatsType]) + value,
			),
		})
	}

	return (
		<div className="stat-bar mr-4 ml-8">
			<div className="text-center font-bold text-sm text-white/60">{label}</div>
			<div className="relative h-10 border-1 border-zinc-600">
				<div
					className={`${barColor} absolute h-[100%] transition-all duration-500 ease-in-out`}
					style={{
						width: `${Math.min(100, (Number(stats[`current${stat}`]) / Number(stats[`max${stat}`])) * 100)}%`,
					}}
				></div>
				<div className="bar-interactions flex h-[100%] items-center justify-between">
					<div className="bar-buttons flex items-center">
						<button
							className="z-1 hover:cursor-pointer"
							onClick={() => updateBarValueClick(stat, -5)}
							type="button"
						>
							<ChevronsLeft />
						</button>
						<button
							className="z-1 hover:cursor-pointer"
							onClick={() => updateBarValueClick(stat, -1)}
							type="button"
						>
							<ChevronLeft />
						</button>
					</div>
					<div className="bar-input z-1">
						<input
							className="w-[50px] text-end text-base"
							onBlur={(e) => {
								updateBarValueOnBlur(stat, Number(e.target.value), true)
							}}
							onChange={(e) =>
								updateBarValueOnChange(stat, e.target.value, true)
							}
							type="number"
							value={stats[`current${stat}`]}
						/>{" "}
						<span className="text-base">/</span>{" "}
						<input
							className="w-[50px] text-start text-base"
							onBlur={(e) => {
								updateBarValueOnBlur(stat, Number(e.target.value), false)
							}}
							onChange={(e) =>
								updateBarValueOnChange(stat, e.target.value, false)
							}
							type="number"
							value={stats[`max${stat}`]}
						/>
					</div>
					<div className="bar-buttons flex items-center">
						<button
							className="z-1 hover:cursor-pointer"
							onClick={() => updateBarValueClick(stat, 1)}
							type="button"
						>
							<ChevronRight />
						</button>
						<button
							className="z-1 hover:cursor-pointer"
							onClick={() => updateBarValueClick(stat, 5)}
							type="button"
						>
							<ChevronsRight />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
