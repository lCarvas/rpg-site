import { DiceRoll } from "@dice-roller/rpg-dice-roller"

function rollDice(
	diceNum: number,
	bonus: number = 0,
	damage: boolean = false,
	diceSides?: number,
) {
	if (!damage) {
		if (diceNum > 0) {
			return new DiceRoll(`${diceNum}d20kh1${bonus !== 0 ? `+${bonus}` : ""}`)
		}
		return new DiceRoll(
			`${-diceNum + 2}d20kl1${bonus !== 0 ? `+${bonus}` : ""}`,
		)
	}
	if (diceNum <= 0) {
		return "Invalid Dice Notation"
	}
	return new DiceRoll(
		`${diceNum}d${diceSides}${bonus !== 0 ? `+${bonus}` : ""}`,
	)
}

function rollDiceNotation(notation: string) {
	try {
		return new DiceRoll(notation)
	} catch {
		return "Invalid Dice Notation"
	}
}

export { rollDice, rollDiceNotation }
