"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import d20Icon from "public/icons/dice-d20-solid.svg"

interface RollSkillButtonProps {
	hasIcon?: boolean
	children?: ReactNode
	onClickAction: () => void
}

export function RollSkillButton({
	hasIcon = false,
	children,
	onClickAction,
}: RollSkillButtonProps) {
	return (
		<button
			className="hover:cursor-pointer"
			onClick={onClickAction}
			type="button"
		>
			{hasIcon && (
				<Image
					alt="d20 Icon"
					className="invert"
					height={16}
					src={d20Icon}
					width={16}
				/>
			)}
			{children}
		</button>
	)
}
