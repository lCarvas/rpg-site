import type { ReactNode } from "react"
import Image from "next/image"
import d20Icon from "public/icons/dice-d20-solid.svg"

interface RollSkillButtonProps {
	hasIcon?: boolean
	children?: ReactNode
	onClick: () => void
}

export function RollSkillButton({
	hasIcon = false,
	children,
	onClick,
}: RollSkillButtonProps) {
	return (
		<button className="hover:cursor-pointer" onClick={onClick} type="button">
			{hasIcon && (
				<Image
					alt="d20 Icon"
					className="min-w-[16px] invert"
					height={16}
					src={d20Icon}
					unoptimized
					width={16}
				/>
			)}
			{children}
		</button>
	)
}
