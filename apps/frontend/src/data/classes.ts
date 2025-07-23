export interface classesObjectTypes {
	survivor: {
		[key: string]: string | number | string[]
	}
	combatant: {
		[key: string]: string | number | string[]
	}
	specialist: {
		[key: string]: string | number | string[]
	}
	occultist: {
		[key: string]: string | number | string[]
	}
}

export const classes = {
	survivor: {
		name: "Mundane",
		shortDescription:
			"You're a normal person, living a normal life. Of course, considering you're a character in Ordem Paranormal RPG, this normality won't last long...",
		description: "",
		initialPv: 8,
		levelPv: 0,
		initialPe: 1,
		levelPe: 0,
		initialSan: 8,
		levelSan: 0,
		initialPd: 4,
		levelPd: 2,
		trainedSkills: { skills: [], optionSkils: [], quantity: 1 },
		proficiencies: "Simple Weapons",
		abilities: [
			{
				name: "Diligence",
				description:
					"You may not have special training, but you compensate with effort and perseverance. When you do a Skill Check, you can spend 1 EP to get +2 on the result.",
			},
		],
		powers: [],
		paths: [],
		table: [],
	},
	combatant: {
		name: "Combatant",
		shortDescription:
			"Trained to fight with all types of weapons, and with the strength and courage to face dangers head on, you are the type of agent who prefers more direct approaches and tends to shoot first and ask questions later.",
		description:
			"<p>From the mercenary specializing in firearms to the expert with swords, combatants present a huge range of special abilities and techniques that enhance their efficiency on the battlefield, making them essential members of any extermination mission.</p><p> In addition to training their body, the combatant is also adept at leading their allies in battle and taking care of their combat equipment, always prepared to take the front line when things get tough.</p><p><span>Famous Combatants: </span>Mister Veríssimo, Joui Jouki, Gal, Antônio “Balu” Pontevedra, Tristan Monteiro & Ryder Staten.</p>",
		initialPv: 20,
		levelPv: 4,
		initialPe: 2,
		levelPe: 2,
		initialSan: 12,
		levelSan: 3,
		initialPd: 6,
		levelPd: 3,
		trainedSkills: {
			skills: [],
			optionSkils: [
				["Fighting", "Marksmanship"],
				["Fortitude", "Reflexes"],
			],
			quantity: 1,
		},
		proficiencies: "Simple & Tactical weapons and light armor",
		abilities: [
			{
				name: "Special Attack",
				description:
					"When attacking, you can spend 2 EP to receive +5 on your attack or damage roll. As your LPE increases, you can spend +1 EP to increase this bonus by an extra +5. You can apply each +5 bonus to attack or damage. For example, at LPE 55%, you can spend 4 EP to receive +5 to the attack roll and +10 to the damage roll.",
			},
		],
		powers: [
			{
				name: "Heavy Weaponry",
				description:
					"<p>You receive proficiency with heavy weapons. <em>Prerequisite:</em> Str 2.</p>",
			},
			{
				name: "Martial Artist",
				description:
					"<p>Your unarmed attacks deal 1d6 points of damage, can deal lethal damage and are considered agile weapons. At LPE 35%, the damage increases to 1d8 and, at LPE 70%, to 1d10.</p>",
			},
			{
				name: "Opportunity Attack",
				description:
					"<p>Whenever a being voluntarily leaves a space adjacent to yours, you can use a reaction and 1 EP to make a melee attack against them.</p>",
			},
			{
				name: "Two-Weapon Fighting",
				description:
					"<p>If you are wielding two weapons (and at least one of them is light) and make an attack, you can make two attacks, one with each weapon. If you do so, you suffer –1d20 on all attack rolls until your next turn. <em>Prerequisites:</em> Agi 3, trained in Fighting or Marksmanship.</p>",
			},
			{
				name: "Defensive Fighting",
				description:
					"<p>When you make an attack, you can fight defensively. If you do so, until your next turn, you suffer –1d20 on all attack rolls, but gain +5 to Defense. <em>Prerequisite:</em> Int 2.</p>",
			},
			{
				name: "Demolishing Strike",
				description:
					"<p>When you use the break maneuver or attack an object, you can spend 1 EP to deal two extra damage dice of the same type as your weapon. <em>Prerequisites:</em> Str 2, trained in Fighting.</p>",
			},
			{
				name: "Heavy Strike",
				description:
					"<p>While holding a melee weapon, its damage is increased by one more die of the same type.</p>",
			},
			{
				name: "Indefatigable",
				description:
					"<p>Once per scene, you can spend 2 EP to make an additional investigation action, but you must use Strength or Agility as the base attribute for the roll.</p>",
			},
			{
				name: "Athletic Prowess",
				description:
					"<p>When you make a Facilitate Investigation check, you can spend 1 EP to use Strength or Agility in place of the skill's base attribute. If you pass the check, the next ally who uses your bonus also gains +1d20 to the check.</p>",
			},
			{
				name: "Heavy Armor",
				description:
					"<p>You receive proficiency with Heavy Armor. <em>Prerequisite:</em> LPE 30%.</p>",
			},
			{
				name: "Defensive Reflexes",
				hasAutomation: !0,
				isAutomationOn: !0,
				automationId: "reflexos-defensivos",
				description:
					"<p>You gain +2 to Defense and saving throws. <em>Prerequisites:</em> Agi 2.</p>",
			},
			{
				name: "Quick Draw",
				description:
					"<p>You can draw or put away items as a free action (instead of a movement action). Additionally, if you are using the optional ammo counting rule, once per round you can reload an arrow-based weapon as a free action. <em>Prerequisite:</em> trained in Initiative.</p>",
			},
			{
				name: "Hold the Trigger",
				description:
					"<p>Whenever you hit an attack with a firearm, you can make another attack with the same weapon against the same target, paying 2 EP for each attack already made in the turn. In other words, you can make the first extra attack spending 2 EP and, if you hit, you can make a second extra attack spending another 4 EP and so on, until you miss an attack or reach your EP per round limit. <em>Prerequisite:</em> LPE 60%.</p>",
			},
			{
				name: "Tactical Senses",
				description:
					"<p>You can use a movement action and 2 EP to analyze the environment. If you do so, you receive a bonus to Defense and saving throws equal to your Intellect until the end of the scene. <em>Prerequisites:</em> Trained in Perception and Tactics.</p>",
			},
			{
				name: "War Tank",
				description:
					"<p>If you are using heavy armor, the Defense and the damage resistance it provides increase by +2. <em>Prerequisite:</em> Heavy Armor.</p>",
			},
			{
				name: "Well-Aimed Shot",
				description:
					"<p>If you are using an arrow-based weapon, you add your Agility to damage rolls and ignore the penalty against targets engaged in melee combat (even if you do not use the aim action). <em>Prerequisite:</em> trained in Marksmanship.</p>",
			},
			{
				name: "Suppressive Fire",
				description:
					"<p>You can use a standard action and 1 EP to use a firearm to shoot a character within the weapon's range to force them to take cover. Make a Marksmanship check against the target's Will. If you win, until the start of your next turn the target cannot leave its location and suffers –5 on attack tests. At the GM's discretion, the target receives +5 to the Will test if they are in an extremely dangerous place, such as a burning house or a sinking boat. This is a fear effect.</p>",
			},
			{
				name: "Transcend",
				description:
					"<p>Choose a paranormal power. You receive the chosen power, but do not gain Sanity from this LPE increase. You can choose this power multiple times.</p>",
			},
			{
				name: "Skill Training",
				description:
					"<p>Choose two skills. You become trained in those skills. From LPE 35% onwards, you can choose skills in which you are already trained to become a veteran. From LPE 70% onwards, you can choose skills in which you are already a veteran to become an expert. You can choose this power multiple times.</p>",
			},
		],
		paths: [
			{
				name: "Annihilator",
				description:
					"<p>You are trained to take down targets with efficiency and speed. Your weapons are your best friends and you take just as good care of them as you do your teammates. Maybe even better.</p>",
				abilities: [
					{
						name: "LPE 10% - The Favorite",
						description:
							"<p>Choose a weapon to be your favorite, such as a katana or an assault rifle. The category of the chosen weapon is reduced by I.</p>",
					},
					{
						name: "LPE 40% - Secret Technique",
						description:
							"<p>The category of the favorite weapon is now reduced by II. When you make an attack with it, you can spend 2 EP to perform one of the effects below as part of the attack. You can add more effects by spending +2 EP per additional effect.</p><p><span><em>Broad.</em></span> The attack can hit an additional target within its range and adjacent to the original (use the same attack roll for both).</p><p><span><em>Destructive.</em></span> Increases the weapon's critical multiplier by +1.</p>",
					},
					{
						name: "LPE 65% - Sublime Technique",
						description:
							"<p>You add the following effects to your Secret Technique list:</p><p><span>Lethal.</span> Increases threat range by +2. You can choose this effect twice to increase the threat range by +5.</p><p><span><em>Piercing.</em></span> Ignores up to 5 points of any damage resistance type the target has.</p>",
					},
					{
						name: "LPE 99% - Killing Machine",
						description:
							"<p>The favorite weapon's category is now reduced by III, it receives +2 to the threat range and its damage increases by one die of the same type.</p>",
					},
				],
			},
			{
				name: "Field Commander",
				description:
					"<p>Without an officer, a battle is nothing more than a bar fight. You are trained to coordinate and assist your companions in combat, making quick decisions and taking best advantage of the situation and the talents of your allies.</p>",
				abilities: [
					{
						name: "LPE 10% - Inspire Confidence",
						description:
							"<p>Your leadership inspires your allies. You can spend a reaction and 2 EP to make an ally in short range reroll a recently performed check.</p>",
					},
					{
						name: "LPE 40% - Strategist",
						description:
							"<p>You can direct allies at short range. Spend a standard action and 1 EP per ally you want to direct (limited by your Intellect). On the affected allies' next turn, they gain an additional movement action.</p>",
					},
					{
						name: "LPE 65% - Breach Their Defenses",
						description:
							"<p>Once per round, when an ally deals damage to an enemy within short range of you, you can use a reaction and 2 EP to have you or another ally within short range make an additional attack against the same enemy. Additionally, the range of Inspire Confidence and Strategist increases to medium.</p>",
					},
					{
						name: "LPE 99% - Commanding Officer",
						description:
							"<p>You can use a standard action and 5 EP so that each ally you can see within medium range receives an additional standard action on their next turn.</p>",
					},
				],
			},
			{
				name: "Warrior",
				description:
					"<p>You have trained your muscles and movements to the point of transforming your body into a true weapon. With melee strikes as powerful as a bullet, you face dangers head on.</p>",
				abilities: [
					{
						name: "LPE 10% - Lethal Technique",
						description:
							"<p>You gain a +2 increase in threat range to all of your melee attacks.</p>",
					},
					{
						name: "LPE 40% - Retaliate",
						description:
							"<p>Whenever you block an attack, you can use a reaction and 2 EP to make a melee attack on the enemy that attacked you.</p>",
					},
					{
						name: "LPE 65% - Oppressive Strength",
						description:
							"<p>When you land a melee attack, you can spend 1 EP to perform a knock down or push maneuver against the target of the attack as a free action. If you choose to push, you receive a bonus of +5 for every 10 points of damage you dealt to the target. If you choose to knock down and win the opposed check, you can spend 1 EP to make an additional attack against the now prone target.</p>",
					},
					{
						name: "LPE 99% - Maximum Power",
						description:
							"<p>When you use your Special Attack with melee weapons, all numerical bonuses are doubled. For example, if you use 5 EP to get +5 on the attack roll and +15 damage, you get +10 on the attack roll and +30 damage.</p>",
					},
				],
			},
			{
				name: "Special Ops",
				description:
					"<p>You are an effective combatant, and your actions are calculated and optimized, always anticipating enemy movements and positioning yourself in the most intelligent way on the battlefield.</p>",
				abilities: [
					{
						name: "LPE 10% - Upgraded Initiative",
						description:
							"<p>You receive +5 in Initiative and an extra movement action on the first round.</p>",
					},
					{
						name: "LPE 40% - Extra Attack",
						description:
							"<p>Once per round, when you make an attack, you can spend 2 EP to make an additional attack.</p>",
					},
					{
						name: "LPE 65% - Adrenaline Rush",
						description:
							"<p>Once per round, you can spend 5 EP to get an additional standard or movement action.</p>",
					},
					{
						name: "LPE 99% - Always Vigilant",
						description:
							"<p>You receive an additional standard action at the start of each combat scene.</p>",
					},
				],
			},
			{
				name: "Shock Troop",
				description:
					"<p>You are solid as a rock. You have trained your body to resist physical trauma, making it practically unbreakable, and that is why you are not afraid to put yourself between your allies and danger.</p>",
				abilities: [
					{
						name: "LPE 10% - Hard Skin",
						hasAutomation: !0,
						isAutomationOn: !0,
						automationId: "nex-10%-casca-grossa",
						description:
							"<p>You receive +1 HP for every 5% LPE and, when you block an attack, you add your Vigor to the damage reduction received.</p>",
					},
					{
						name: "LPE 40% - Square Up",
						description:
							"<p>Whenever an opponent within short range attacks one of your allies, you can use a reaction and 1 EP to make that opponent make a Will saving throw (DC Vig). If they fail, the opponent must attack you instead of your ally. This power only works if you can be effectively attacked and are within attack range (for example, adjacent to an opponent attacking in melee or within range of a ranged weapon). An opponent who passes the Will test cannot be affected by your Square Up power until the end of the scene.</p>",
					},
					{
						name: "LPE 65% - Hard to Kill",
						description:
							"<p>When you take non-paranormal damage, you can use a reaction and 2 EP to halve that damage. At LPE 85%, you can use this skill to reduce paranormal damage.</p>",
					},
					{
						name: "LPE 99% - Unbreakable",
						description:
							"<p>While you are injured, you receive +5 Defense and +5 damage resistance. While you are dying, instead of normal, you are not defenseless and can still perform actions. You still follow the death rules as normal.</p>",
					},
				],
			},
		],
		table: [
			"Special attack (2 EP, +5)",
			"Subclass ability",
			"Combatant power",
			"Attribute increase",
			"Special attack (3 EP, +10)",
			"Combatant power",
			"Training level",
			"Subclass ability",
			"Combatant power",
			"Attribute increase, versatility",
			"Special attack (4 EP, +15)",
			"Combatant power",
			"Subclass ability",
			"Training level",
			"Combatant power",
			"Attribute increase",
			"Special attack (5 EP, +20)",
			"Combatant power",
			"Attribute increase",
			"Subclass ability",
		],
	},
	specialist: {
		name: "Specialist",
		shortDescription:
			"An agent who relies more on cleverness rather than brute force. A specialist uses technical knowledge, quick thinking or even cunning to solve mysteries and face the paranormal.",
		description:
			"<p>Scientists, inventors, researchers and technicians of various types are examples of specialists, who are as varied as the areas of knowledge and technology. Some still prefer to study social engineering and become excellent undercover spies, or even study special combat techniques such as martial arts and long-range shooting, combining technical knowledge and skill.</p><p>What unites all specialists is their incredible ability to learn and improvise using their intellect and advanced knowledge, which can get the entire group out of the most diverse types of trouble.</p><p><span>Famous Specialists: </span>Aaron, Arthur Cervero, Rubens Naluti, Elizabeth Webber, Samuel Norte, Chizue Akechi.</p>",
		initialPv: 16,
		levelPv: 3,
		initialPe: 3,
		levelPe: 3,
		initialSan: 16,
		levelSan: 4,
		initialPd: 8,
		levelPd: 4,
		trainedSkills: { skills: [], optionSkils: [], quantity: 7 },
		proficiencies: "Simple weapons and light armor",
		abilities: [
			{
				name: "Eclectic",
				description:
					"When you do a skill check, you can spend 2 EP to receive the benefits of being trained on that skill.",
			},
			{
				name: "Connoisseur",
				description:
					"Choose two trained skills (except Fighting and Marksmanship). When you do a skill check of the chosen skills, you can spend 2 EP to add +1d6 to the roll. As your LPE increases, you can spend +1EP to increase the bonus dice. For example, at LPE 55%, you can spend 4 EP to receive +1d10 on the roll.",
			},
		],
		powers: [
			{
				name: "Martial Artist",
				description:
					"<p>Your unarmed attacks deal 1d6 points of damage, can deal lethal damage and are considered agile weapons. At LPE 35%, the damage increases to 1d8 and, at LPE 70%, to 1d10.</p>",
			},
			{
				name: "Advanced Ballistics",
				description:
					"<p>You receive proficiency with tactical firearms and +2 on damage rolls with those weapons.</p>",
			},
			{
				name: "Applied Knowledge",
				description:
					"<p>When you make a skill check (except Fighting and Marksmanship), you can spend 2 EP to change the skill's base attribute to Int. <em>Prerequisite:</em> Int 2.</p>",
			},
			{
				name: "Ingenuity",
				description:
					"At LPE 40%, when you use your Eclectic ability, you can spend an additional 2 EP to receive the benefits of being a veteran in the skill. At LPE 75%, you can spend an additional 4 EP to receive the benefits of being an expert in the skill.",
			},
			{
				name: "Hacker",
				description:
					"<p>You gain +5 on Technology checks to hack systems and decrease the time needed to hack any system to a complete action. <em>Prerequisite:</em> trained in Technology.</p>",
			},
			{
				name: "Fast-Handed",
				description:
					"<p>When making a Crime check, you can spend 1 EP to do so as a free action. <em>Prerequisites:</em> Agi 3, trained in Crime.</p>",
			},
			{
				name: "Utility Backpack",
				description:
					"<p>An item of your choice (except weapons) counts as one category lower and takes up 1 less space.</p>",
			},
			{
				name: "Tactical Movement",
				description:
					"<p>You can spend 1 EP to ignore the movement penalty for difficult terrain and climbing until the end of the turn. <em>Prerequisite:</em> Trained in Athletics.</p>",
			},
			{
				name: "On the Right Track",
				description:
					"<p>Whenever you pass on a check to search for clues, you can spend 1 EP to receive +1d20 on the next check. The costs and bonuses are cumulative (if you pass a second test, you can spend 2 EP to receive a total of +2d20 on the next test, and so on).</p>",
			},
			{
				name: "Nerd",
				description:
					"<p>You are a repository of useful (and useless) knowledge. Once per scene, you can spend 2 EP to make a Current Affairs check (DC 20). If you pass, you receive useful information for that scene (if it's an investigation, a hint for a clue; if it's combat, an enemy's weakness, and so on). The source of information can be anything from an old book you read in the library to an episode of your favorite fiction series.</p>",
			},
			{
				name: "Urban Ninja",
				description:
					"<p>You gain proficiency with melee and arrow-based tactical weapons and +2 to damage rolls with those weapons.</p>",
			},
			{
				name: "Quick Thinking",
				description:
					"<p>Once per round, during an investigation scene, you can spend 2 EP to make an additional search for clues action.</p>",
			},
			{
				name: "Explosives Expert",
				description:
					"<p>You add your Intellect to the DC to resist your explosives and can exclude a number of targets equal to your Intellect value from the explosion's effects.</p>",
			},
			{
				name: "First Impression",
				description:
					"<p>You get +2d20 on the first Diplomacy, Deception, Intimidation, or Insight check you make in a scene.</p>",
			},
			{
				name: "Transcend",
				description:
					"<p>Choose a paranormal power. You receive the chosen power, but do not gain Sanity from this LPE increase. You can choose this power multiple times.</p>",
			},
			{
				name: "Skill Training",
				description:
					"<p>Choose two skills. You become trained in those skills. From LPE 35% onwards, you can choose skills in which you are already trained to become a veteran. From LPE 70% onwards, you can choose skills in which you are already a veteran to become an expert. You can choose this power multiple times.</p>",
			},
		],
		paths: [
			{
				name: "Sharpshooter",
				description:
					"<p>One shot, one kill. Unlike combatants, you are adept at neutralizing threats from afar, ending a fight before it even starts. You treat your weapon as a precision tool, capable of performing incredible feats.</p>",
				abilities: [
					{
						name: "LPE 10% - Elite Aim",
						description:
							"<p>You receive proficiency with firearms that use long bullets and add your Intellect value on damage rolls with those weapons.</p>",
					},
					{
						name: "LPE 40% - Lethal Shot",
						description:
							"<p>When you make the aim action, you can spend 1 EP to increase the threat range of the next attack you make by +2 until the end of your next turn.</p>",
					},
					{
						name: "LPE 65% - Impactful Shot",
						description:
							"<p>When you attack using a firearm, you can spend 2 EP to do a combat maneuver instead of dealing damage. Choose one of the following combat maneuvers: knock down, disarm, push or break.</p>",
					},
					{
						name: "LPE 99% - Shooting to Kill",
						description:
							"<p>When you land a critical hit with a firearm, you deal maximum damage, without having to roll dice.</p>",
					},
				],
			},
			{
				name: "Infiltrator",
				description:
					"<p>You are an expert in infiltration and know how to neutralize unsuspecting targets without causing a fuss. Combining acrobatic talent, manual dexterity and technical knowledge you are able to overcome any defensive barrier, even when the mission seems impossible.</p>",
				abilities: [
					{
						name: "LPE 10% - Sneak Attack",
						description:
							"<p>You know how to hit the vital spots of a distracted enemy. Once per round, when you hit an off-guard target with a melee or short-range attack, or a target you are flanking, you can spend 1 EP to deal +1d6 points of damage of the same type as the weapon. At LPE 40% the additional damage increases to +2d6, at LPE 65% it increases to +3d6 and at LPE 99% it increases to +4d6.</p>",
					},
					{
						name: "LPE 40% - Prowler",
						hasAutomation: !0,
						isAutomationOn: !0,
						automationId: "nex-40%-gatuno",
						description:
							"<p>You gain +5 to Athletics and Crime and can move your normal movement distance when hiding without penalty (see the Stealth skill).</p>",
					},
					{
						name: "LPE 65% - Assassinate",
						description:
							"<p>You can use a movement action and 3 EP to analyze a target within short range. Until the end of your next turn, your first Sneak Attack that deals damage to it has its bonus damage dice from that ability doubled. Additionally, if it takes damage from your attack, the target becomes unconscious or dies, your choice (Fortitude DC Agi avoids).</p>",
					},
					{
						name: "LPE 99% - Fleeting Shadow",
						description:
							"<p>When you make a Stealth check after attacking or making another flashy action, you can spend 3 EP to avoid the –3d20 penalty on the check.</p>",
					},
				],
			},
			{
				name: "Field Medic",
				description:
					"<p>You are trained in first aid and emergency treatment techniques, making you a valuable member of any group of agents. Unlike conventional healthcare professionals, you are used to the battlefield and know how to make quick decisions in the midst of chaos.</p><p><span>Special: </span>to choose this subclass, you need to be trained in Medicine. To use the abilities of this subclass, you need to have a medicine kit.</p>",
				abilities: [
					{
						name: "LPE 10% - Paramedic",
						description:
							"<p>You can use a standard action and 2 EP to heal yourself or an adjacent ally for 2d10 hit points. You can heal +1d10 HP respectively at LPE 40%, 65% and 99%, spending +1 EP per additional healing die.</p>",
					},
					{
						name: "LPE 40% - Trauma Team",
						description:
							"<p>You can use a standard action and 2 EP to remove a negative condition (except dying) from an adjacent ally.</p>",
					},
					{
						name: "LPE 65% - Rescue",
						description:
							"<p>Once per round, if you are within close range of a wounded or dying ally, you can approach the ally as a free action (as long as you are able to do so using your normal movement). Additionally, whenever you heal your ally's HP or remove conditions, you and your ally receive +5 Defense until the start of your next turn. Finally, for you, the total spaces occupied by carrying a character are halved.</p>",
					},
					{
						name: "LPE 99% - Resuscitation",
						description:
							"<p>Once per scene, you can use a complete action and 10 EP to bring back to life a character who died in the same scene (except death from massive damage).</p>",
					},
				],
			},
			{
				name: "Negotiator",
				description:
					"<p>You are a skilled diplomat and can influence other people, whether through talk or intimidation. Your ability to assess situations quickly and efficiently can get the group out of troubles that not even the most powerful weapon could solve.</p>",
				abilities: [
					{
						name: "LPE 10% - Eloquence",
						description:
							"<p>You can use a complete action and 1 EP per target within short range to affect other characters with your speech. Make a Diplomacy, Deception, or Intimidation test against the targets' Will. If you win, the targets are fascinated as long as you concentrate (one standard action per round). A hostile target or target that is involved in combat receives +5 on their saving throw and is entitled to a new test per round, whenever you concentrate. A character who passes the test is immune to this effect for one day.</p>",
					},
					{
						name: "LPE 40% - Motivational Discourse",
						description:
							"<p>You can use a standard action and 4 EP to inspire your allies with your words. You and all your allies within short range gain +1d20 on skill checks until the end of the scene. Starting at LPE 65%, you can spend 8 EP to provide a total bonus of +2d20.</p>",
					},
					{
						name: "LPE 65% - I Know a Guy",
						description:
							"<p>Once per mission, you can contact your network of contacts to ask for a favor, such as exchanging all of your group's equipment (as if you had a second mission preparation phase), getting a resting place or even being rescued from a scene. The GM has the final say on when this ability can be used and what favors can be obtained.</p>",
					},
					{
						name: "LPE 99% - My Best Trick",
						description:
							"<p>Accustomed to a life of pretense and manipulation, you can spend 5 EP to simulate the effect of any ability you saw one of your allies use during the scene. You ignore the skill's prerequisites, but you still have to pay all of its costs, including actions, EP, and materials, and it uses your game parameters as if you were using the skill in question.</p>",
					},
				],
			},
			{
				name: "Technician",
				description:
					"<p>Your main skill is maintaining and repairing the valuable equipment your team carries on missions. Your technical knowledge also allows you to improvise tools with whatever you have at your disposal and sabotage items used by your enemies.</p>",
				abilities: [
					{
						name: "LPE 10% - Optimized Inventory",
						description:
							"<p>You add your Intellect to your Strength when calculating your max load. For example, if you have Strength 1 and Intellect 3, your inventory has 20 spaces.</p>",
					},
					{
						name: "LPE 40% - Mending",
						description:
							"<p>You can spend a complete action and 1 EP to remove the broken condition from adjacent equipment until the end of the scene. Additionally, any general equipment has its category reduced by I for you.</p>",
					},
					{
						name: "LPE 65% - Improvise",
						description:
							"<p>You can improvise equipment with materials around you. Choose a general equipment and spend a complete action and 2 EP, plus 2 EP per category of the chosen item. You create a working version of the equipment, which follows its space and category rules as normal. At the end of the scene, your makeshift equipment becomes useless.</p>",
					},
					{
						name: "LPE 99% - Ready for Everything",
						description:
							"<p>You always have what you need for any situation. Whenever you need any item (except weapons), you can spend a movement action and 3 EP per item category to remember that you put it at the bottom of your bag! Once found, the item follows normal inventory rules.</p>",
					},
				],
			},
		],
		table: [
			"Eclectic, connoisseur (2 EP, +1d6)",
			"Subclass ability",
			"Specialist power",
			"Attribute increase",
			"Connoisseur (3 EP, +1d8)",
			"Specialist power",
			"Training level",
			"Ingenuity (veteran), subclass ability",
			"Specialist power",
			"Attribute increase, versatility",
			"Connoisseur (4 EP, +1d10)",
			"Specialist power",
			"Subclass ability",
			"Training level",
			"Ingenuity (expert), specialist power",
			"Attribute increase",
			"Connoisseur (5 EP, +1d12)",
			"Specialist power",
			"Attribute increase",
			"Subclass ability",
		],
	},
	occultist: {
		name: "Occultist",
		shortDescription:
			"The Other Side is mysterious, dangerous and, in some ways, captivating. Many scholars of the entities get lost in their dark realms in search of power, but there are those who aim to understand and master the paranormal mysteries to use them to combat the Other Side itself. This type of agent is not only knowledgeable about the occult, but also has a talent for connecting with paranormal elements.",
		description:
			"<p>Contrary to popular belief, occultists are not intrinsically evil. It would be like saying that the scientist who invented gunpowder is guilty of the murderer who fired the revolver. For the Order, the Paranormal is a force that can be used for the most diverse purposes, according to the intention of its user.</p><p>Occultists apply their academic knowledge and their abilities to conjure rituals in missions to investigate and combat the Paranormal in all its forms, especially when conventional ammunition is not enough to handle the task.</p><p><span>Famous Occultists:</span> Agatha Volkomenn, Dante, Arnaldo Fritz, Marc Menet, Kian.</p>",
		initialPv: 12,
		levelPv: 2,
		initialPe: 4,
		levelPe: 4,
		initialSan: 20,
		levelSan: 5,
		initialPd: 10,
		levelPd: 5,
		trainedSkills: {
			skills: ["Occultism", "Will"],
			optionSkils: [],
			quantity: 3,
		},
		proficiencies: "Simple weapons",
		abilities: [
			{
				name: "Chosen by the Other Side",
				description:
					"You had a paranormal experience and were marked by the Other Side, absorbing the knowledge and power necessary to perform rituals. You can cast 1st circle rituals. As your LPE increases, you can launch higher circle rituals (2nd circle at LPE 25%, 3rd circle at LPE 55% and 4th circle at LPE 85%). You start with three 1st circle rituals. Whenever your LPE increases, you learn a ritual from any circle you can cast. These rituals do not count towards your known ritual limit.",
			},
		],
		powers: [
			{
				name: "Camouflage Occultism",
				description:
					"<p>You can use a free action to hide symbols and sigils that are drawn or engraved on objects or your skin, making them invisible to people other than yourself. Furthermore, when you cast a ritual, you can spend +2 EP to cast it without using ritualistic components and without gesturing (which allows you to cast a ritual with your hands tied), using only concentration. Other beings will only realize that you have cast a ritual if they pass an Occultism check (DC 25).</p>",
			},
			{
				name: "Fabricate Seal",
				description:
					"<p>You know how to make paranormal seals of rituals you know. Crafting a seal takes an interlude action and a number of EP equal to the cost of casting the ritual. You can have a maximum number of seals created at any time equal to your Presence.</p>",
			},
			{
				name: "Shrouded in Mystery",
				description:
					"<p>Your haunting appearance and posture allow yoy to manipulate and scare ignorant or superstitious people. The GM defines what exactly you can do and who fits that description. As a general rule, you get +5 to Deception and Intimidation against people not trained in Occultism.</p>",
			},
			{
				name: "Element Specialist",
				description:
					"<p>Choose an element. The DC to resist your rituals of this element increases by +2.</p>",
			},
			{
				name: "Paranormal Tools",
				description:
					"<p>You reduce the category of a paranormal item by I and can activate paranormal items without paying their EP cost.</p>",
			},
			{
				name: "Power Flow",
				description:
					"<p>You can keep two sustained effects of active ritual simultaneously with just one free action, paying the cost of each effect separately. <em>Prerequisite:</em> LPE 60%.</p>",
			},
			{
				name: "Guided by the Paranormal",
				description:
					"<p>Once per scene, you can spend 2 EP to make an additional investigation action.</p>",
			},
			{
				name: "Paranormal Identification",
				description:
					"<p>You gain +10 on Occultism checks to identify creatures, objects, or rituals.</p>",
			},
			{
				name: "Makeshift Components",
				description:
					"<p>Once per scene, you can use a complete action to make an Investigation check (DT 15). If you pass, you find objects that can serve as ritualistic components of an element of your choice. The GM defines whether it is possible to use this power in the current scene.</p>",
			},
			{
				name: "Paranormal Intuition",
				description:
					"<p>Whenever you use the facilitate investigation action, you add your Intellect or Presence to the roll (your choice).</p>",
			},
			{
				name: "Element Master",
				description:
					"<p>Choose an element. The cost to cast rituals of this element decreases by –1 EP. <em>Prerequisites:</em> Elemental Specialist in chosen element, LPE 45%.</p>",
			},
			{
				name: "Powerful Ritual",
				description:
					"<p>You add your Intellect to the damage rolls or healing effects of your rituals. <em>Prerequisite:</em> Int 2.</p>",
			},
			{
				name: "Favorite Ritual",
				description:
					"<p>Choose a ritual you know. You reduce the cost of the ritual by –1 EP. This reduction stacks with reductions provided by other sources.</p>",
			},
			{
				name: "Ritualistic Tattoo",
				description:
					"<p>Symbols marked on your skin reduce the cost of personal range rituals that have you as the target by –1 EP.</p>",
			},
			{
				name: "Transcend",
				description:
					"<p>Choose a paranormal power. You receive the chosen power, but do not gain Sanity from this LPE increase. You can choose this power multiple times.</p>",
			},
			{
				name: "Skill Training",
				description:
					"<p>Choose two skills. You become trained in those skills. From LPE 35% onwards, you can choose skills in which you are already trained to become a veteran. From LPE 70% onwards, you can choose skills in which you are already a veteran to become an expert. You can choose this power multiple times.</p>",
			},
		],
		paths: [
			{
				name: "Conduit",
				description:
					"<p>You have mastered the fundamental aspects of ritual casting and are able to increase the range and speed of your casting. As your connection with paranormal entities increases you become able to interfere with the rituals of other occultists.</p>",
				abilities: [
					{
						name: "LPE 10% - Enlarge Ritual",
						description:
							"<p>When you cast a ritual, you can spend +2 EP to increase its range by one step (short to medium, medium to long or long to extreme) or double its area of effect.</p>",
					},
					{
						name: "LPE 40% - Accelerate Ritual",
						description:
							"<p>Once per round, you can increase the cost of a ritual by 4 EP to cast it as a free action.</p>",
					},
					{
						name: "LPE 65% - Nullify Ritual",
						description:
							"<p>When you are the target of a ritual, you can spend an amount of EP equal to the cost paid for that ritual and make an opposed Occultism roll against the caster. If you win, you nullify the ritual, canceling all its effects.</p>",
					},
					{
						name: "LPE 99% - Channel the Fear",
						description: "<p>You learn the ritual Channel the Fear.</p>",
					},
				],
			},
			{
				name: "Flagellant",
				description:
					"<p>Pain is a powerful Paranormal catalyst and you have learned to transform it into power for your rituals. When you become especially powerful, you are able to use the pain and suffering of your enemies as an instrument of your occultist rituals.</p>",
				abilities: [
					{
						name: "LPE 10% - The Power of Pain",
						description:
							"<p>When you cast a ritual, you may spend your own health points to pay the effort point cost, at a rate of 2 HP per EP paid. Health points spent in this way can only be recovered by resting.</p>",
					},
					{
						name: "LPE 40% - Embrace the Pain",
						description:
							"<p>Whenever you take non-paranormal damage, you can spend a reaction and 2 EP to halve the damage taken.</p>",
					},
					{
						name: "LPE 65% - Redeem Agony",
						description:
							"<p>Whenever you reduce one or more enemies to 0 HP with a ritual, you receive an amount of temporary EP equal to the circle of the ritual used. For example, if you activate this power with a 2nd circle ritual, you will receive 2 EP.</p>",
					},
					{
						name: "LPE 99% - Tangible Fear",
						description: "<p>You learn the ritual Tangible Fear.</p>",
					},
				],
			},
			{
				name: "Graduate",
				description:
					"<p>You focus your studies on becoming a versatile and powerful conjurer, knowing more rituals than other occultists and being able to make them more difficult to resist. Your goal is to unveil and master the secrets of the Other Side in depth, whatever the cost.</p>",
				abilities: [
					{
						name: "LPE 10% - Expanded Knowledge",
						description:
							"<p>You learn a 1st circle ritual. Whenever you gain access to a new circle, you learn an additional ritual from that circle. These rituals do not count towards your ritual limit.</p>",
					},
					{
						name: "LPE 40% - Ritualistic Grimoire",
						description:
							"<p>You create a special grimoire, which stores rituals that your mind would not be able to store. You learn a number of 1st or 2nd circle rituals equal to your Intellect. When you gain access to a new circle, you can add a new ritual from that circle to your grimoire. These rituals do not count towards your known ritual limit. To cast a ritual stored in your grimoire, you must first spend a full action flipping through the grimoire and recalling the ritual. The grimoire occupies 1 space in your inventory. If you lose it, you can replicate it with two interlude actions.</p>",
					},
					{
						name: "LPE 65% - Efficient Rituals",
						hasAutomation: !0,
						isAutomationOn: !0,
						automationId: "nex-65%-rituais-eficientes",
						description:
							"<p>The DC to resist all of your rituals increases by +5.</p>",
					},
					{
						name: "LPE 99% - Knowing Fear",
						description: "<p>You learn the ritual Knowing Fear.</p>",
					},
				],
			},
			{
				name: "Intuitive",
				description:
					"<p>Just as combatants train their bodies to resist physical trauma, you have prepared your mind to resist the effects of the Other Side. Your focus and willpower make you expand the limits of your paranormal capabilities.</p>",
				abilities: [
					{
						name: "LPE 10% - Sane Mind",
						description:
							"<p>You have a better understanding of the entities on the Other Side, and are less shaken by their effects. You gain +5 paranormal resistance (+5 on saving throws against paranormal effects).</p>",
					},
					{
						name: "LPE 40% - Powerful Presence",
						description:
							"<p>Your mental resilience makes it so you can extract more from the Other Side. You add your Presence to your EP limit per turn, but only for casting rituals (not for DC).</p>",
					},
					{
						name: "LPE 65% - Unshakable",
						description:
							"<p>You gain mental and paranormal damage resistance 10. Additionally, when you are targeted by a paranormal effect that allows a Will saving throw to halve the damage, you take no damage if you pass.</p>",
					},
					{
						name: "LPE 99% - Presence of Fear",
						description: "<p>You learn the ritual Presence of Fear.</p>",
					},
				],
			},
			{
				name: "Paranormal Blade",
				description:
					"<p>Some occultists prefer to stay closed in their libraries studying books and rituals. Others prefer to investigate paranormal phenomena at their source. You, on the other hand, prefer to use the paranormal as a weapon. You have learned and mastered fighting techniques by blending your casting skills with your combat capabilities. Despite the name, members of this subclass can use both melee and ranged weapons.</p>",
				abilities: [
					{
						name: "LPE 10% - Accursed Blade",
						description:
							"<p>You learn the Curse Weapon ritual. If you already know it, you can spend +1 EP when casting to reduce the casting time to a movement action. Additionally, when you cast this ritual, you can use Occultism, instead of Fighting or Marksmanship, for attack rolls with the cursed weapon.</p>",
					},
					{
						name: "LPE 40% - Paranormal Gladiator",
						description:
							"<p>Whenever you land a melee attack on an enemy, you gain 2 temporary EP. You can gain a maximum of temporary EP per scene equal to your EP limit. Temporary EP disappears at the end of the scene.</p>",
					},
					{
						name: "LPE 65% - Martial Casting",
						description:
							"<p>Once per round, when you cast a ritual as a standard action, you can spend 2 EP to make a melee attack as a free action.</p>",
					},
					{
						name: "LPE 99% - Blade of Fear",
						description: "<p>You learn the ritual Blade of Fear.</p>",
					},
				],
			},
		],
		table: [
			"Chosen by the Other Side (1º circle)",
			"Subclass ability",
			"Occultist power",
			"Attribute increase",
			"Chosen by the Other Side (2º circle)",
			"Occultist power",
			"Training level",
			"Subclass ability",
			"Occultist power",
			"Attribute increase, versatility",
			"Chosen by the Other Side (3º circle)",
			"Occultist power",
			"Subclass ability",
			"Training level",
			"Occultist power",
			"Attribute increase",
			"Chosen by the Other Side (4º circle)",
			"Occultist power",
			"Attribute increase",
			"Subclass ability",
		],
	},
}
