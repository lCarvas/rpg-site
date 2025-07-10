import type { ChangeEvent } from "react"
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from "lucide-react"

interface StatBarProps {
	label: string
	barColor: string
	currentStatValue: number
	maxStatValue: number
	onChangeCurrent: (e: ChangeEvent<HTMLInputElement>) => void
	onChangeMax: (e: ChangeEvent<HTMLInputElement>) => void
	onClick: (value: number) => void
}

export function StatBar({
	label,
	barColor,
	currentStatValue,
	maxStatValue,
	onChangeCurrent,
	onChangeMax,
	onClick,
}: StatBarProps) {
	return (
		<div className="stat-bar mr-4 ml-8">
			<div className="text-center font-bold text-sm">{label}</div>
			<div className="relative h-10 border-1 border-zinc-600">
				<div
					className={`${barColor} absolute h-[100%] transition-all duration-500 ease-in-out`}
					style={{
						width: `${Math.min(100, (currentStatValue / maxStatValue) * 100)}%`,
					}}
				></div>
				<div className="bar-interactions flex h-[100%] items-center justify-between">
					<div className="bar-buttons flex items-center">
						<button
							className="z-1 hover:cursor-pointer"
							onClick={() => onClick(-5)}
							type="button"
						>
							<ChevronsLeft />
						</button>
						<button
							className="z-1 hover:cursor-pointer"
							onClick={() => onClick(-1)}
							type="button"
						>
							<ChevronLeft />
						</button>
					</div>
					<div className="bar-input z-1">
						<input
							className="w-[50px] text-end text-base"
							onBlur={(e) => {
								e.target.value = e.target.value.replace(/^0+(?=\d)/, "")
							}}
							onChange={onChangeCurrent}
							type="number"
							value={currentStatValue}
						/>{" "}
						<span className="text-base">/</span>{" "}
						<input
							className="w-[50px] text-start text-base"
							onBlur={(e) => {
								e.target.value = e.target.value.replace(/^0+(?=\d)/, "")
							}}
							onChange={onChangeMax}
							type="number"
							value={maxStatValue}
						/>
					</div>
					<div className="bar-buttons flex items-center">
						<button
							className="z-1 hover:cursor-pointer"
							onClick={() => onClick(1)}
							type="button"
						>
							<ChevronRight />
						</button>
						<button
							className="z-1 hover:cursor-pointer"
							onClick={() => onClick(5)}
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
