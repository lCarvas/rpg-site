export const skills = {
	acrobacia: {
		name: "Acrobatics",
		attribute: "AGI",
		onlyTrained: 0,
		loadPenalty: 1,
		description:
			"<p>You can perform acrobatic feats.</p><p><span>Break the Fall (Veteran, DC 15).</span> When you fall, you can use a reaction and make an Acrobatics check to reduce the damage. If successful, reduces the fall damage by 1d6, plus 1d6 for every 5 points by which the test result exceeds the DC. If you reduce the damage to zero, you land on your feet.</p><p><span>Equilibrium.</span> If you are walking on precarious surfaces, you need to make Acrobatics checks to avoid falling. Each movement action requires a test. If you pass, you move half of your movement value. If you fail, you don't move. If you fail by 5 or more, you fall. The DC is 10 for a slippery floor, 15 for a narrow surface (like the top of a wall), and 20 for a very narrow surface (like a taut rope). You can take -1d20 on the check to move your full movement value. When you are balancing you are off guard and, if you take damage, you must perform a new Acrobatics check; if you fail, you fall.</p><p><span>Escape.</span> You can escape from restraints. The DC is equal to the Agility check result of the person who tied you up +10 if you are restrained by ropes, or +30 if you are restrained by handcuffs. This uses a complete action.</p><p><span>Get Up Quickly (Trained, DC 20).</span> If you're down, you can make an Acrobatics check to get back to your feet. You must have a movement action available. If you pass the check, you stand up as a free action. If you fail, you use your movement action, but remain prone.</p><p><span>Get Through Tight Spaces (Trained, DC 25).</span> You can squeeze through narrow spaces where only your head would normally pass. You spend a complete action and move half of your movement value.</p><p><span>Pass Through Enemy.</span> You can pass through a space occupied by an enemy as part of your movement. Make an Acrobatics check opposed to your opponent's Acrobatics, Initiative, or Fighting check (whichever is better). If you pass, you pass through; if you fail, you don't pass through and your movement action ends. A space occupied by an enemy counts as difficult terrain.</p>",
	},
	adestramento: {
		name: "Animal Handling",
		attribute: "PRE",
		onlyTrained: 1,
		loadPenalty: 0,
		description:
			"<p>You know how to deal with animals.</p><p><span>Calm an animal down (DC 25).</span> You sooth a nervous or aggressive animal. This allows you to control a raging bull or convince a guard dog not to attack you. This uses a complete action.</p><p><span>Ride.</span> You can ride a horse. Mounting requires a movement action, but you can mount as a free action with an Animal Handling check against DC 20 (however, if you fail by 5 or more, you fall to the ground).</p><p>Walking on flat terrain does not require checks, but passing through obstacles or walking on rough terrain does. The DC is 15 for small obstacles or bad terrain (bumpy road) and 20 for large obstacles or very bad terrain (forest at night). If you fail, you fall from your mount and take 1d6 points of damage. Riding is part of your movement and does not require an action.</p><p>If you are on horseback, you can gallop. Use a complete action and make an Animal Handling check. You move a number of 1.5m squares equal to your movement value (modified by your mount) plus the test result. You can only gallop in a straight line and cannot gallop over difficult terrain.</p><p><span>Handle Animal (DC 15).</span> You make an animal perform a task for which it was trained. This allows you to use Animal Handling as Piloting for animal-drawn vehicles, such as a carriage. This uses a movement action.</p>",
	},
	artes: {
		name: "Arts",
		attribute: "PRE",
		onlyTrained: 1,
		loadPenalty: 0,
		description:
			"<p>You know how to express yourself with different forms of art, such as music, dancing, writing, painting, acting and others.</p><p><span>Impress.</span> Make an Arts check opposed by a Will check of who you are trying to impress. If you pass, you receive +2 on Presence-based skill checks against that person during that day. If you fail, you suffer -2 on these tests, and cannot try again on the same day. If you are trying to impress more than one person, the GM makes a single check for the entire audience, using the best bonus. This action takes from a few minutes (music or dancing) to a few hours (theater performance).</p>",
	},
	atletismo: {
		name: "Athletics",
		attribute: "STR",
		onlyTrained: 0,
		loadPenalty: 0,
		description:
			"<p>You can perform athletic feats.</p><p><span>Running.</span> Use a complete action and make an Athletics check. You move a number of 1.5m squares equal to your movement value plus the check result. For example, if you have a movement value of 9m (6 squares) and get a 15 on the test, you move 21 squares. You can only run in a straight line and cannot run on difficult terrain. You can run for a number of rounds equal to your Vigor. After that, you must make a Fortitude check per round (DC 5 + 5 per previous test). If you fail, you become fatigued.</p><p><span>Climb.</span> Spend a movement action and make an Athletics check. If you pass, you move half your movement value. If you fail, you don't move. If you fail by 5 or more, you fall. The DC is 10 for surfaces with footholds and handholds (such as a ravine with roots), 15 for a gate or tree, 20 for a wall or recessed wall, and 25 for a smooth wall (such as a building). You can take -1d20 on the check to move your full movement value. When climbing you are off guard and, if you take damage, you must make a new Athletics test; if you fail, you fall. If a character that is adjacent to you is climbing and falls, you can try to catch them. Make an Athletics check against the surface's DC +5. If you pass, you hold the character. If you fail by 5 or more, you fall too!</p><p><span>Swimming.</span> If you are in water, you must use a movement action and make an Athletics check each round to avoid sinking. The DC is 10 for calm water, 15 for rough water, and 20 or more for stormy water. If you pass, you can move half your movement value. If you fail, you can float, but not move forward. If you fail by 5 or more, you sink. If you want to move further, you can use a second movement action in the same round for another Athletics check. If you are underwater (either because you failed your Athletics check or because you dived on purpose), you must hold your breath. You can hold your breath for a number of rounds equal to your Vigor. After that, you must make a Fortitude check per round (DC 5 + 5 per previous test). If you fail, you drown (reduced to 0 hit points) and may die. You suffer an overburden penalty on swim tests.</p><p><span>Jump.</span> You can jump over holes or obstacles, or reach something high. For a long jump, the DC is 5 per 1.5m square (DC 10 for 3m, 15 for 4.5m, 20 for 6m, and so on). For a high jump, the DT is 15 per 1.5m square (30 for 3m). You must have at least 6m to run and gain momentum (without this space, DC increases by +5). Jumping is part of your movement and does not require an action.</p>",
	},
	crime: {
		name: "Crime",
		attribute: "AGI",
		onlyTrained: 1,
		loadPenalty: 1,
		description:
			"<p>You know how to carry out illicit activities.</p><p><span>Breaking in.</span> You open a locked lock. The DC is 20 for common locks (apartment door), 25 for reinforced locks (a store door) and 30 for advanced locks (a bank safe). This uses a complete action.</p><p><span>Theft (DC 20).</span> You take an object from someone else (or place an object in their possession). Use a standard action and make a Crime check. If you pass, you take (or place) what you want. The victim is entitled to a Perception check (DC equal to the result of your Crime check). If they pass, they notice your attempt, whether you succeeded or not</p><p><span>Conceal.</span> You conceal an object within yourself. Use a standard action and make a Crime check opposed by the Perception check of anyone who can see you. If someone searches you, they get +10 on their Perception check.</p><p><span>Sabotage (Veteran).</span> You disable a device. A simple action, like disabling an alarm, has DC 20. A complex action, like sabotaging a pistol so that it explodes when fired, has DT 30. If you fail by 5 or more, something goes wrong (the alarm goes off, you think the weapon is sabotaged, but in fact it still works...). This action takes 1d4+1 complete actions. You may take a -1d20 penalty on your check to do so as a complete action.</p><p>The Theft and Sabotage actions require a thief's kit. Without it, you suffer -5 on the check.</p>",
	},
	atualidades: {
		name: "Current Affairs",
		attribute: "INT",
		onlyTrained: 0,
		loadPenalty: 0,
		description:
			"<p>You are knowledgeable about general subjects, such as politics, sports and entertainment, and can answer questions relating to these subjects. The DC is 15 for common information, such as the name of the author of a book, 20 for specific information, such as the story of the founder of a company, and 25 for almost unknown information, such as a forgotten urban legend.</p>",
	},
	enganacao: {
		name: "Deception",
		attribute: "PRE",
		onlyTrained: 0,
		loadPenalty: 0,
		description:
			"<p>You manipulate people with bluffs and trickery.</p><p><span>Disguise (Trained).</span> You change your or someone else's appearance. Make a Deception check opposed by the Perception check of anyone paying attention to the disguised person. If you pass, the disguise goes unnoticed; otherwise, they realize something is wrong. If the disguise is that of a specific person, those who know that person receive +10 on the Perception check. A disguise requires at least ten minutes to assemble and a disguise kit. Without it, you suffer -5 on the check.</p><p><span>Forgery (Veteran).</span> You forge a document. Make a Deception check opposed by the Perception check of anyone examining the document. If you pass, the person believes it is valid; otherwise, they realize it is false. If the document is very complex, or includes a specific signature or stamp, you suffer -2d20 on the check.</p><p><span>Feint (Trained).</span> You can use a standard action and make a Deception check opposed to a Reflexes check from a being at close range. If you pass, he is off guard against your next attack, if made until the end of their next turn.</p><p><span>Insinuation (DC 20).</span> You say something to someone without other people understanding what you are talking about. If you pass, the receiver understands your message. If you fail by 5 or more, they understand something other than what you wanted to convey. Other people can make an Insight check opposed to your Deception check. If they pass, they understand what you're saying.</p><p><span>Gossip (DC 20).</span> You spread gossip. For example, you can say that the bar owner is watering down the beer to anger the people against him. Very unlikely gossip (convincing people that the delegate is an ET who is abducting people) has DC 30. This action requires at least a day, but may take longer, according to the GM. A person can investigate the source of the gossip and reach you. This requires an Investigation check on their part, with a DC equal to the result of your Intrigue check.</p><p><span>Lying.</span> You deceive a person. Your check is opposed by the victim's Insight check. Very implausible lies impose a -2d20 penalty on your check (“Why do I have the head of security’s badge? Why, because he dropped it and I’m going to return it!”).</p>",
	},
	diplomacia: {
		name: "Diplomacy",
		attribute: "PRE",
		onlyTrained: 0,
		loadPenalty: 0,
		description:
			"<p>You convince people with cunningness and convincing arguments.</p><p><span>Calm Down (trained, DT 20).</span> You stabilize an adjacent character who is going crazy, causing him to stay at Sanity 1. The DC increases by +5 for each time they have been calmed during the ongoing scene. This uses one standard action.</p><p><span>Change Attitude.</span> You change the category of an NPC's attitude towards you or someone else (see the next page for the explanation of attitude categories). Make a Diplomacy check opposed by the target's Will check. If you pass, you influence their attitude to shift by one category of your choice. If you pass by 10 or more, their attitude shifts by up to two categories. If failed by 5 or more, the target's attitude shifts one category in the opposite direction. This action takes one minute. You can take -2d20 on the check to do so as a complete action (to avoid a fight, for example). You can only change a person's attitude once per day.</p><p><span>Persuasion (DC 20).</span> You convince a person to do something, such as answer a question or do a favor. If that thing is costly (like borrowing a car) you suffer -5 on your roll. If it is dangerous (like committing a crime) you suffer -10 or automatically fail. By the GM's choice, your roll may be opposed by the person's Will check. This action takes a minute or more, according to the GM's choice.</p>",
	},
	luta: {
		name: "Fighting",
		attribute: "STR",
		onlyTrained: 0,
		loadPenalty: 0,
		description:
			"<p>You use Fighting to make melee attacks. DC is the target's Defense. If you hit, you deal damage according to the weapon used.</p>",
	},
	fortitude: {
		name: "Fortitude",
		attribute: "VIG",
		onlyTrained: 0,
		loadPenalty: 0,
		description:
			"<p>You use this skill as a saving throw against effects that require vitality, such as diseases and poisons. The DC is determined by the effect. You also use Fortitude to maintain your breath when running or not breathing. The DC is 5 + 5 per previous check (see the Athletics skill for more details).</p>",
	},
	iniciativa: {
		name: "Initiative",
		attribute: "AGI",
		onlyTrained: 0,
		loadPenalty: 0,
		description:
			"<p>This skill determines your reaction time. When an action scene begins, each character involved makes an Initiative roll. They then act in descending order of results.</p>",
	},
	intuicao: {
		name: "Insight",
		attribute: "PRE",
		onlyTrained: 0,
		loadPenalty: 0,
		description:
			"<p>This skill measures your emotional perception and “sixth sense”.</p><p><span>Debunk.</span> You can tell if someone is lying (see the Deception skill).</p><p><span>Premonition (trained, DT 20).</span> You analyze a person, to get an idea of their nature or character, or a situation, to notice any strange fact (for example, if the inhabitants of a small town are acting strangely). This use only indicates if there is something abnormal; to find out the cause, see the Investigation skill.</p>",
	},
	intimidacao: {
		name: "Intimidation",
		attribute: "PRE",
		onlyTrained: 0,
		loadPenalty: 0,
		description:
			"<p>You can frighten or coerce others. All uses of Intimidation are fear effects.</p><p><span>Scare (trained).</span> Use a standard action and make an Intimidation check opposed by a Will test of a being at short range. If you pass, it is shaken for the rest of the scene (not cumulative). If you pass by 10 or more, they are frightened for one round and then shaken for the rest of the scene.</p><p><span>Coerce.</span> Make an Intimidation check opposed by an adjacent person's Will check. If you pass, they obey an order of yours (like do a small task, let you pass by a place they were protecting, etc.). If you order the person to do something dangerous or that goes against their nature, they receive +5 on the test or pass automatically. This action uses 1 minute or more according to the GM, and makes the person hostile towards you.</p>",
	},
	investigacao: {
		name: "Investigation",
		attribute: "INT",
		onlyTrained: 0,
		loadPenalty: 0,
		description:
			"<p>You know how to uncover clues and information.</p><p><span>Interrogate.</span> You uncover information by asking around or going to a busy place and keeping your ears open. General information (“Who is the owner of this restaurant?”) does not require testing. Restricted information, which few people know (“Who is the delegate in charge of this case?”), has DC 20. Classified information, or information that could put anyone who talks about it at risk, has DC 30. This action takes from an hour to a day, at the GM's discretion.</p><p><span>Search.</span> You examine a location. The DC varies: 15 for a discrete item or in a mess, but not necessarily hidden; 20 for a hidden item (safe behind a painting, document in the false bottom of a drawer); 30 for a very well hidden item (secret passage activated by a button, document written in invisible ink). This action takes from one complete action (examining a desk) to one day (searching a library).</p>",
	},
	pontaria: {
		name: "Marksmanship",
		attribute: "AGI",
		onlyTrained: 0,
		loadPenalty: 0,
		description:
			"<p>You use Marksmanship to make ranged attacks. The DC is the target's Defense. If you hit, you deal damage according to the weapon used.</p>",
	},
	medicina: {
		name: "Medicine",
		attribute: "INT",
		onlyTrained: 0,
		loadPenalty: 0,
		description:
			"<p>You know how to treat wounds, illnesses, and poisons.</p><p><span>First Aid (DC 20).</span> An adjacent character who is dying and unconscious loses these conditions and is left with 1 HP. The DC increases by +5 for each time they have been stabilized in the ongoing scene. This action uses a standard action.</p><p><span>Long-term Care (Veteran, DC 20).</span> You treat up to one person per point of Intellect so they recover more quickly. If passed, they recover double the HP per rest for that day. This action takes an hour.</p><p><span>Autopsy (Trained, DC. 20).</span> You examine a corpse to determine the cause and approximate time of death. Rare or extraordinary causes, such as an exotic poison or a curse, have DC +10. This action takes ten minutes.</p> <p><span>Treatment (Trained).</span> You help the victim of a disease or poison with ongoing effect. Use a complete action and roll a Medicine check against the DC of the disease or poison. If you pass, the patient gains +5 on their next Fortitude check against this effect.</p><p>This skill requires a med kit. Without it, you suffer -5 on the check. You can use the Medicine skill on yourself, but you suffer -1d20 on the check.</p>",
	},
	ocultismo: {
		name: "Occultism",
		attribute: "INT",
		onlyTrained: 1,
		loadPenalty: 0,
		description:
			"<p>You have studied the Paranormal.</p><p><span>Identify Creature.</span> You analyze a paranormal creature that you can see. The DC of the check is equal to the DC to resist the creature's Disturbing Presence. If you pass, you discover a trait of the creature, such as a power or vulnerability. For every 5 points by which the test result exceeds the DC, you discover another trait. If you fail by 5 or more, you make a wrong conclusion (for example, you believe a creature is vulnerable to Death, when in fact it is vulnerable to Energy). This action uses a complete action.</p><p><span>Identify Cursed Item (DC 20).</span> You can spend an interlude action to study a cursed item and identify its powers or what ritual the object contains. You may take -2d20 on the check to do so as a complete action.</p><p><span>Identify Ritual (DC 10 +5 per ritual circle).</span> When someone casts a ritual, you can figure out what it is by observing its gestures, words, and components. This action uses a reaction.</p><p><span>Information.</span> You answer questions regarding the Other Side, cursed objects, paranormal phenomena, runes, prophecies, etc. Simple questions do not require a roll. Complex questions require a DC 20 roll. Finally, mysteries and riddles require a DC 30 roll.</p>",
	},
	percepcao: {
		name: "Perception",
		attribute: "PRE",
		onlyTrained: 0,
		loadPenalty: 0,
		description:
			"<p>You notice things using your senses.</p><p><span>Observe.</span> You see discrete or hidden things. DC ranges from 15, for things that are difficult to see (a specific book on a shelf) to 30, for nearly invisible things (a drop of blood on a leaf in the middle of a forest at night). For hidden people or things, the DC is the result of the Stealth or Crime check made to hide the person or item). You can also detect disguises and forgeries (see the Deception skill) and read lips (DT 20).</p><p><span>Listen.</span> You hear subtle noises. A casual conversation nearby has DC 0 — that is, unless there is a penalty, you pass automatically. Hearing people whispering has DC 15. Hearing on the other side of a door increases DC by +5. You can make Perception checks to hear even if you are asleep, but you suffer -2d20 on the check; a success causes you to wake up. Perceiving beings that cannot be seen has DC 20, or +10 on the being's Stealth check, whichever is greater. Even if you pass the test, you still suffer normal penalties for fighting without seeing the enemy.</p>",
	},
	pilotagem: {
		name: "Piloting",
		attribute: "AGI",
		onlyTrained: 1,
		loadPenalty: 0,
		description:
			"<p>You know how to operate land and water vehicles, such as motorcycles, cars, and speedboats. Driving a vehicle uses one movement action per turn. Common situations (driving on a road, sailing in calm weather) do not require a test. Bad situations (driving on an unlit dirt road, sailing in rain or wind) require a check per turn against DC 15. Dire situations (driving over rough terrain, sailing in a storm) require a check per turn against DC 25. If you have veteran training degree in this skill, you can pilot aerial vehicles, such as planes and helicopters.</p>",
	},
	profissao: {
		name: "Profession",
		attribute: "INT",
		onlyTrained: 1,
		loadPenalty: 0,
		description:
			"<p>You know how to engage in a specific profession, such as a lawyer, engineer, journalist or advertiser. Talk to the GM to define the details of your profession and what types of tests you can do with it. For example, a lawyer can do a Profession check to reason with the police, while an administrator can use this skill to investigate a corporation's documents.</p><p>A character trained in this skill has his own income or, if he no longer works, a reserve of capital. This allows you to start each mission with an additional item in addition to those provided by the Order. The item is category I if you are trained, category II if you are a veteran, and category III if you are an expert.</p>",
	},
	reflexos: {
		name: "Reflexes",
		attribute: "AGI",
		onlyTrained: 0,
		loadPenalty: 0,
		description:
			"<p>You use this skill as a saving throw against effects that require a quick reaction, such as traps and explosions. The DC is determined by the effect. You also use Reflex to avoid feints.</p>",
	},
	religiao: {
		name: "Religion",
		attribute: "PRE",
		onlyTrained: 1,
		loadPenalty: 0,
		description:
			"<p>You have knowledge of theology and the various religions of the world.</p><p><span>Calm Down (DC 20).</span> You can use Religion as Diplomacy to calm down a character who is going crazy.</p><p><span>Information.</span> You can answer questions relating to myths, prophecies, sacred relics, etc. The DC is 10 for simple questions, 20 for complex questions and 30 for mysteries and enigmas.</p><p><span>Rite (Veteran, DC 20).</span> You perform a religious ceremony (baptism, wedding, funeral...).</p>",
	},
	ciencias: {
		name: "Sciences",
		attribute: "INT",
		onlyTrained: 1,
		loadPenalty: 0,
		description:
			"<p>You have studied various scientific fields, such as mathematics, physics, chemistry and biology, and can answer questions relating to these subjects. Simple questions, such as the chemical composition of a known substance, do not require a check. Complex questions, such as details about how a specific scientific procedure works, require a check against DC 20. Finally, questions involving experimental fields, such as evaluating the protective capacity of a newly created metal alloy, require a check against DC 30.</p>",
	},
	furtividade: {
		name: "Stealth",
		attribute: "AGI",
		onlyTrained: 0,
		loadPenalty: 1,
		description:
			"<p>You know how to be stealthy.</p><p><span>Hide.</span> Make a Stealth check opposed by Perception checks of anyone who might notice you. Everyone that fails cannot notice you (you have total camouflage against them). Hiding is a free action that you can only do at the end of your turn and only if you end your turn in a place where you can hide (behind a door, in a dark room, in a dense forest, in the middle of a crowd...). If you move during your turn, you suffer -1d20 on the check (you can move at half your normal movement value to avoid this penalty). If you attack or do a very flashy action, you suffer -3d20.</p><p><span>Follow.</span> Make a Stealth check opposed to the Perception check of the person being followed. You suffer -5 if you are in a place with no hiding spots or movement, such as an open field or empty street. The victim receives +5 to their Perception check if they are taking precautions to avoid being followed (such as looking behind him occasionally). If you pass, you tail the person until they reach their destination. If you fail, the person realizes it halfway.</p>",
	},
	sobrevivencia: {
		name: "Survival",
		attribute: "INT",
		onlyTrained: 0,
		loadPenalty: 0,
		description:
			"<p>You can navigate the wilderness and avoid the dangers of nature.</p><p><span>Camp (Trained).</span> You can find shelter and food in the wilderness by hunting, fishing, gathering fruits, etc. The DC depends on the type of terrain: 15 for open fields, 20 for dense forests and 25 for extreme regions, such as deserts, swamps or mountains. Especially arid or barren regions and bad weather (snow, storms, etc.) impose a -5 penalty (cumulative). If you pass, you and your party can use the feed and sleep actions even while out in the open.</p><p><span>Identify Animal (Trained, DC 20).</span> As a complete action, you can identify an exotic animal. See the Occultism skill.</p><p><span>Orientate.</span> A character traveling in the wilderness must make a Survival check per day to move. DC depends on the type of terrain (see above). If you pass, you move your normal movement value. If you fail by 5 or more, you are lost and do not move for the entire day. In a group, a character must be chosen as a guide. Characters trained in Survival can make checks to help the guide. However, if more than one character wants to make the check alone, everyone must roll the dice in secret. Players must decide which guide to follow before they see the result!</p><p><span>Track (Trained).</span> You can identify and follow tracks. The DC varies: 15 to track a large group, or a single being on soft ground, such as mud or snow; 20 for a being on common ground (grass, earth); 25 for a being on hard ground (road, indoor floor). Poor visibility or bad weather (night, rain, fog) impose -1d20 on the test. You need to make one roll per chase day. While tracking, your movement value is halved. If you fail, you can try again by spending another day. However, every day since the tracks were created, the DC increases by +1.</p>",
	},
	tatica: {
		name: "Tactics",
		attribute: "INT",
		onlyTrained: 1,
		loadPenalty: 0,
		description:
			"<p>You have received military training.</p><p><span>Reconnaissance (DC 20).</span> As a movement action, you can survey the battlefield. If you pass, you discover an advantage, such as cover, camouflage, or high ground, if available.</p><p><span>Plan of Action (Veteran, DC 20).</span> As a standard action, you guide an ally at medium range. Succeeding on the skill check gives +5 to their Initiative. If doing so causes an ally who has not yet acted this round to have a higher Initiative than yours, they act immediately after your turn. On the next rounds, they act according to the new initiative order.</p>",
	},
	tecnologia: {
		name: "Technology",
		attribute: "INT",
		onlyTrained: 1,
		loadPenalty: 0,
		description:
			"<p>You have advanced knowledge of electronics and computers. Everyday uses, such as working with a computer or cell phone, do not require training in this skill or testing. This skill is suitable for advanced uses, such as reprogramming a surveillance system or breaking into a secure server.</p><p><span>Forgery (Veteran).</span> Like using Deception, but only for electronic documents.</p><p><span>Hacking.</span> You hack a protected computer. The DC is 15 for personal computers, 20 for professional networks, and 25 for large corporate, government, or military servers. This action takes 1d4+1 complete actions. You may take a -1d20 penalty to use it as a complete action. If you fail the test, you cannot try again until you have some new information that helps you in the hack, such as a username or password. If you fail by 5 or more, you can be tracked down by the administrators of the system which you tried to hack.</p><p>Once you hack into the system, you can do what you came to do. To search for specific information, see the Find File action, below. Other actions, such as changing or deleting files, corrupting or disabling applications, or blocking access from other users, may require new Technology checks, at the GM's discretion.</p><p><span>Find File.</span> You look for a specific file on a computer or network that you can access (if you don't have access to the system, you'll need to hack it first; see Hacking, above). The time required and DC of the check vary depending on the size of the system you are researching: a full action and DC 15 for a personal computer, 1d4+1 full actions and DC 20 for a small network, and 1d6+2 actions complete networks and DC 25 for a corporate or government network. This usage only refers to finding files on private systems that you don't know about. To search for public information on the internet, use the Investigation skill.</p><p><span>Operate Device.</span> You operate a complex electronic device. This allows you to access cameras remotely, unlock electronic locks, activate or deactivate alarms, etc. The DC is 15 for common devices, 20 for professional equipment and 25 for protected systems. This use takes 1d4+1 full actions and requires an electronics kit. You may take a -1d20 penalty on your check to do it as a full action. Without the kit, you suffer –5 on Operate Device checks.</p>",
	},
	vontade: {
		name: "Will",
		attribute: "PRE",
		onlyTrained: 0,
		loadPenalty: 0,
		description:
			"<p>You use this skill as a saving throw against effects that require determination, such as intimidation and mind-affecting rituals. The DC is determined by the effect. You also use Will to cast rituals in adverse conditions.</p>",
	},
}
