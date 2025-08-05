import type { StatsType } from "@/app/character/[id]/page"
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from "lucide-react"
import { saveCharacterChanges } from "@/dal/dal"

interface StatBarProps {
	label: string
	barColor: string
	stat: "Hp" | "San" | "Pe" | "Pd"
	statsState: StatsType
	setStatsState: React.Dispatch<React.SetStateAction<StatsType | null>>
}

export function StatBar({
	label,
	barColor,
	stat,
	statsState,
	setStatsState,
}: StatBarProps) {
	function updateBarValueOnBlur(
		statToChange: string,
		value: number,
		current: boolean,
	) {
		const statKey = `${current ? "current" : "max"}${statToChange}`
		const finalvalue = Math.max(0, value)
		setStatsState({
			...statsState,
			[statKey]: finalvalue.toString(),
		})
		saveCharacterChanges(1, {
			[statKey]: finalvalue,
		})
	}

	function updateBarValueOnChange(
		statToChange: string,
		value: string,
		current: boolean,
	) {
		setStatsState({
			...statsState,
			[`${current ? "current" : "max"}${statToChange}`]: value,
		})
	}

	function updateBarValueClick(statToChange: string, value: number) {
		const statKey = `current${statToChange}` as keyof StatsType
		const finalValue = Math.max(0, Number(statsState[statKey]) + value)
		setStatsState({
			...statsState,
			[statKey]: finalValue.toString(),
		})
		saveCharacterChanges(1, {
			[statKey]: finalValue,
		})
	}

	return (
		<div className="stat-bar mr-4 ml-8">
			<div className="text-center font-bold text-sm text-white/60">{label}</div>
			<div className="relative h-10 border-1 border-zinc-600">
				<div
					className={`${barColor} absolute h-[100%] transition-all duration-500 ease-in-out`}
					style={{
						width: `${Math.min(100, (Number(statsState[`current${stat}`]) / Number(statsState[`max${stat}`])) * 100)}%`,
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
							value={statsState[`current${stat}`]}
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
							value={statsState[`max${stat}`]}
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
