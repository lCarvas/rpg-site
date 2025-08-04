export const backgrounds = {
	academic: {
		name: "Academic",
		description:
			"Você era um pesquisador ou professor universitário. De forma proposital ou não, seus estudos tocaram em assuntos misteriosos e chamaram a atenção da Ordo Realitas.",
		skills: ["ciencias", "investigacao"],
		power: {
			name: "Knowledge is Power",
			description:
				"When you make an Intellect-based check, you can spend 2 EP to receive +5 on the roll.",
		},
	},
	amnesic: {
		name: "Amnesic",
		description:
			"Você perdeu a maior parte da memória. Sabe apenas o próprio nome, ou nem isso. Sua amnésia pode ser resultado de um trauma paranormal ou mesmo de um ritual. Talvez você tenha sido vítima de cultistas? Talvez você tenha sido um cultista? Seja como for, hoje a Ordem é a única família que conhece. Quem sabe, cumprindo missões, você descubra algo sobre seu passado.",
		skills: [],
		power: {
			name: "Glimpses of the Past",
			description:
				"Once per session, you can do an Intellect check (DC 10) to recognise familiar people or places, that you might have encountered before you lost your memory. If you pass, you receive 1d4 temporary EP and, at the GM's discretion, a useful information.",
		},
	},
	artist: {
		name: "Artist",
		description:
			"Você era um ator, músico, escritor, dançarino, influenciador... Seu trabalho pode ter sido inspirado por uma experiência paranormal do passado e o que o público acha que é pura criatividade, a Ordem sabe que tem um lado mais sombrio.",
		skills: ["artes", "enganacao"],
		power: {
			name: "Magnum Opus",
			description:
				"You became famous for one of your works. Once per mission, you can determine that a character involved in an interaction scene recognizes you. You receive +5 on Presence checks and Presence-based skill checks against that character. At the master's discretion, you can receive these bonuses in other situations in which they would be recognized.",
		},
	},
	athlete: {
		name: "Athlete",
		description:
			"You competed in an individual or team sport, such as swimming or football. Your high performance could be the result of some paranormal influence that not even you knew about or you could have been involved in a paranormal event in one of your competitions.",
		skills: ["acrobacia", "atletismo"],
		power: {
			name: "110%",
			description:
				"When you make a Strength or Agility based skill check (excluding Fighting and Marksmanship) you can spend 2 EP to receive +5 on the roll.",
		},
	},
	blueCollarWorker: {
		name: "Blue-collar Worker",
		description:
			"Pedreiro, industriário, operador de máquinas em uma fábrica… Você passou uma parte de sua vida em um emprego braçal, desempenhando atividades práticas que lhe deram uma visão pragmática do mundo. Sua rotina mundana, entretanto, foi confrontada de alguma forma pelo paranormal, e você não consegue mais esquecer tudo que viu sobre os mistérios do mundo.",
		skills: ["fortitude", "profissao"],
		power: {
			name: "Work Tool",

			description:
				"Choose a simple or tactical weapon that, at the GM's discretion, could be used as tool on your profession (such as a sledgehammer for a mason). You have proficiency on the chosen weapon and you receive +1 on attack rolls, damage rolls and threat range when using it.",
		},
	},
	Chef: {
		name: "Chef",
		description:
			"Você é um cozinheiro amador ou profissional. Talvez trabalhasse em um restaurante, talvez simplesmente gostasse de cozinhar para a família e amigos. Como sua comida fez com que você se envolvesse com o paranormal? Ninguém sabe. Mas os outros agentes adoram quando você vai para a missão!",
		skills: ["fortitude", "profissao"],
		power: {
			name: "Secret Ingredient",
			description:
				"During interlude scenes, you can use the eating action to cook a special dish. You, and all members of the party that used the eating action, receive the benefit of two dishes (if the same benefit is chosen twice, the effects are cumulative).",
		},
	},
	civilServant: {
		name: "Civil Servant",
		description:
			"Você possuía carreira em um órgão do governo, lidando com burocracia e atendendo pessoas. Sua rotina foi quebrada quando você viu que o prefeito era um cultista ou que a câmara de vereadores se reunia à noite para realizar rituais. Quando os próprios representantes do povo estão dispostos a sacrificá-lo para entidades malignas, onde reside nossa esperança? Hoje, você sabe a resposta para essa pergunta: na Ordo Realitas.",
		skills: ["intuicao", "vontade"],
		power: {
			name: "Civic Spirit",
			description:
				"Every time you make a roll to help, you can spend 1 EP to increase the bonus given by +2.",
		},
	},
	conspiracyTheorist: {
		name: "Conspiracy Theorist",
		description:
			"A humanidade nunca pisou na lua. Reptilianos ocupam importantes cargos públicos. A Terra é plana... E secretamente governada pelos Illuminati. Você sabe isso tudo, pois investigou a fundo esses importantes assuntos. Quando sua pesquisa esbarrou no Paranormal, você foi recrutado. Na Ordem, sua loucura determinação será usada para um bom propósito.",
		skills: ["investigacao", "ocultismo"],
		power: {
			name: "I Knew It",
			description:
				"You don't get shaken by entities or anomalies. After all, you always knew of their existence. You gain resistance to mental damage equal to your Intellect.",
		},
	},
	criminal: {
		name: "Criminal",
		description:
			"Você vivia uma vida fora da lei, seja como mero batedor de carteiras, seja como membro de uma facção criminosa. Em algum momento, você se envolveu em um assunto da Ordem — talvez tenha roubado um item amaldiçoado? A organização, por sua vez, achou melhor recrutar seus talentos do que ter você como um estorvo.",
		skills: ["crime", "furtividade"],
		power: {
			name: "Crime Pays Off",
			description:
				"At the end of a mission, choose an item found during the mission. On your next mission, you can include that item on your inventory without it counting towards your rank's item limit.",
		},
	},
	engineer: {
		name: "Engineer",
		description:
			"Enquanto os acadêmicos estão preocupados com teorias, você colocar a mão na massa, seja como engenheiro profissional, seja como inventor de garagem. Provavelmente você criou algum dispositivo paranormal que chamou a atenção da Ordem.",
		skills: ["profissao", "tecnologia"],
		power: {
			name: "Favorite Tools",
			description:
				"An item of your choice (excluding weapons) counts as being one category below (for example, an item of category II counts as category I to you).",
		},
	},
	executive: {
		name: "Executive",
		description:
			"Você possuía um trabalho de escritório em uma grande empresa, banco ou corporação. Era um administrador, advogado, contador ou de qualquer outra profissão que lida com papelada e burocracia. Sua vida era bastante normal, até que você descobriu algo que não devia. Talvez o sucesso da empresa residisse em um ritual? Talvez toda a corporação fosse fachada para um culto e o presidente, um líder cultista envolvido com entidades paranormais? Após essa descoberta, você foi recrutado pela Ordem e trocou seu trabalho de escritório por missões de campo — hoje, sua vida é tudo, menos normal.",
		skills: ["diplomacia", "profissao"],
		power: {
			name: "Optimized Process",
			description:
				"Whenever you do a skill check during an extended test, or an action to revise documents (physical or digital), you can spend 2 EP to receive +5 on the roll.",
		},
	},
	fighter: {
		name: "Fighter",
		description:
			"Você pratica uma arte marcial ou esporte de luta, ou cresceu em um bairro perigoso onde aprendeu briga de rua. Já quebrou muitos ossos, tanto seus quanto dos outros. Pode ter conhecido a Ordem após um torneio secreto envolvendo entidades do Outro Lado ou ter sido recrutado pela sua capacidade de luta.",
		skills: ["luta", "reflexos"],
		power: {
			name: "Heavy Hitter",
			description: "You receive +2 on damage rolls on melee attacks.",
		},
	},
	forensicScientist: {
		name: "Forensic Scientist",
		description:
			"Você trabalhava coletando provas para a resolução de crimes, seja para a polícia, seja para uma empresa privada de investigação. Usava métodos e técnicas adquiridos através de uma graduação em uma área científica ou médica, além de cursos específicos. Recrutado para a Ordem por seus conhecimentos técnicos, seu trabalho não mudou muito - mas o tipo de que você investiga, sim.",
		skills: ["ciencias", "investigacao"],
		power: {
			name: "Investigação Científica",
			description:
				"Once per investigation scene, you can use a free action to find clues, using Sciences instead of the skill that would be used instead for the roll.",
		},
	},
	gymnast: {
		name: "Gymnast",
		description:
			"Desde muito jovem, você passou a maior parte de sua vida em ginásios (ou talvez em antigos templos monásticos) praticando as mais difíceis acobracias. Sua preparação foi árdua e dolorosa, mas aprimorou seu corpo, sua técnica e sua disciplina. Recrutado pela Ordo Realitas, essas se tornaram suas principais ferramentas para enfrentar o Outro lado. E com elas, você planeja fazer as criaturas paranormais sofrerem muito mais do que você sofreu em seus treinos.",
		skills: ["acrobacia", "reflexos"],
		power: {
			name: "Acrobatic Mobility",
			description: "You gain +2 Defense and your movement increases by +3m.",
		},
	},
	healthcareWorker: {
		name: "Healthcare Worker",
		description:
			"Você era um profissional da saúde como um enfermeiro, farmacêutico, médico, psicólogo ou socorrista, treinado no atendimento e cuidado de pessoas. Você pode ter sido surpreendido por um evento paranormal durante o trabalho ou mesmo cuidado de um agente da Ordem em uma emergência, que ficou surpreso com o quão bem você lidou com a situação.",
		skills: ["intuicao", "medicina"],
		power: {
			name: "Medicinal Techniques",
			description:
				"Whenever you heal a character, you sum your Intellect to the total healed HP.",
		},
	},
	it: {
		name: "I.T.",
		description:
			"Programador, engenheiro de software ou simplesmente “o cara da T.I.”, você tem treinamento e experiência para lidar com sistemas informatizados. Seu talento (ou curiosidade exagerada) chamou a atenção da Ordem.",
		skills: ["investigacao", "tecnologia"],
		power: {
			name: "Search Engine",
			description:
				"To the GM's discretion, whenever you have access to the internet, you can spend to EP to replace any skill check with a Technology check. ",
		},
	},
	investigator: {
		name: "Investigator",
		description:
			"Você era um investigador do governo, como um perito forense ou policial federal, ou privado, como um detetive particular. Pode ter tido contato com o Paranormal em algum caso ou ter sido recrutado pela Ordem por suas habilidades de resolução de mistérios.",
		skills: ["investigacao", "percepcao"],
		power: {
			name: "Clue Sniffer",
			description:
				"Once per scene, when you make a check to search for clues, you can spend 1 EP to receive +5 on the roll.",
		},
	},
	journalist: {
		name: "Journalist",
		description:
			"Uma espécie ameaçada de extinção, você atuava investigando notícias para um jornal, rede de televisão, blog, canal do YouTube... Você se juntou à Ordem porque descobriu algo relacionado ao paranormal, ou foi recrutado para investigar um caso específico. Seja como for, continua buscando a verdade - não mais para informar as pessoas, mas sim para protegê-las.",
		skills: ["atualidades", "investigacao"],
		power: {
			name: "Trustworthy Sources",
			description:
				"Once per session, you can spend 1 EP to contact your sources - people whom you trust with access to information. This allows you to reroll an already made skill check to search for a clue, with an added +5 bonus, or you receive a different relevent information (to the GM's discretion).",
		},
	},
	magnate: {
		name: "Magnate",
		description:
			"Você possui muito dinheiro ou patrimônio. Pode ser o herdeiro de uma família antiga ligada ao oculto, ter criado e vendido uma empresa e decidido usar sua riqueza para uma causa maior, ou ter ganho uma loteria após inadvertidamente escolher números amaldiçoados que formavam um ritual.",
		skills: ["diplomacia", "pilotagem"],
		power: {
			name: "Sponsor of the Order",
			description:
				"Your credit limit is always considered one stage above the current one.",
		},
	},
	mercenary: {
		name: "Mercenary",
		description:
			"Você é um soldado de aluguel, que trabalha sozinho ou como parte de alguma organização que vende serviços militares. Escoltas e assassinatos fizeram parte de sua rotina por tempo o suficiente para você se envolver em alguma situação com o Paranormal.",
		skills: ["iniciativa", "intimidacao"],
		power: {
			name: "Combat Position",
			description:
				"On the first turn of every action scene, you can spend 2 EP to receive an additional movement action.",
		},
	},
	militar: {
		name: "Militar",
		description:
			"Você serviu em uma força militar, como o exército ou a marinha. Passou muito tempo treinando com armas de fogo, até se tornar um perito no uso delas. Acostumado a obedecer ordens e partir em missões, está em casa na Ordo Realitas. O inimigo é diferente, mas um tiro bem dado continua resolvendo o problema.",
		skills: ["pontaria", "tatica"],
		power: {
			name: "Para Bellum",
			description: "Your receive +2 on damage rolls with firearms.",
		},
	},
	policeman: {
		name: "Policeman",
		description:
			"Você fez parte de uma força de segurança pública, civil ou militar. Em alguma patrulha ou chamado se deparou com um caso paranormal e sobreviveu para contar a história.",
		skills: ["percepcao", "pontaria"],
		power: {
			name: "Patrulha",
			description: "Você recebe +2 em Defesa.",
		},
	},
	professor: {
		name: "Professor",
		description:
			"Você leciona em uma escola ou universidade, ensinando ciências, artes ou outro campo do saber. Sua profissão é uma das mais nobres de todas e o colocou em contato com muitas pessoas e conhecimentos. Em algum momento, o colocou em contato também com o paranormal. Agora, trabalhando na Ordem, seus alunos são criaturas do Outro Lado, e você planeja reprovar todos esse ano.",
		skills: ["ciencias", "intuicao"],
		power: {
			name: "Field Class",
			description:
				"You know how to bring out the best in people. Once per scene, you can use a standard action and 2 EP to give +1 to any attribute of a different character in short range until the end of the scene",
		},
	},
	rebel: {
		name: "Rebel",
		description:
			"Alguma coisa aconteceu em sua juventude que fez com que você se rebelasse contra o mundo ao seu redor. Talvez seus parentes tenham sido ausentes, por escolha ou por algum evento trágico, talvez outra perda tenha marcado seu coração. Qualquer que seja a razão, você possui iguais doses de rebeldia e independência e, acima de tudo, aprendeu a se virar sozinho. Recrutado pela Ordem, você luta por vingança - ou para que outros não passem pelo que você passou.",
		skills: ["furtividade", "vontade"],
		power: {
			name: "Lone Wolf",
			description:
				"You receive +1 to Defense, skill checks, and your EP limit per turn if there are no allies within short range.",
		},
	},
	religious: {
		name: "Religious",
		description:
			"Você é devoto ou sacerdote de uma fé. Independentemente da religião que pratica, se dedica a auxiliar as pessoas com problemas espirituais. A partir disso, teve contato com o paranormal, o que fez com que fosse convocado pela Ordem.",
		skills: ["religiao", "vontade"],
		power: {
			name: "Soothe",
			description:
				"You receive +5 in Religion checks to calm someone down. Furthermore, when you calm someone down, they receive a number of Sanity points equal to 1d6 + your Presence.",
		},
	},
	repentantCultist: {
		name: "Repentant Cultist",
		description:
			"Você fez parte de um culto paranormal. Talvez fossem ignorantes iludidos, que acreditavam estar contatando entidades benevolentes. Talvez soubessem exatamente o que estavam fazendo. Seja como for, algo abriu seus olhos e agora você luta pelo lado certo — embora carregue para sempre traços de sua vida pregressa. Outros membros da Ordem podem desconfiar de sua conversão e você sabe que precisará se esforçar para conquistar a confiança de todos.",
		skills: ["ocultismo", "religiao"],
		power: {
			name: "Remnants of the Other Side",
			description:
				"You receive a paranormal power of your choice. However, you start the game with half the normal Sanity for your class.",
		},
	},
	ruralWorker: {
		name: "Rural Worker",
		description:
			"Você trabalhava no campo ou em áreas isoladas, como fazendeiro, pescador, biólogo, veterinário... Você se acostumou com o convívio com a natureza e os animais e talvez tenha ouvido uma ou outra história de fantasmas ao redor da fogueira. Em algum momento da sua vida, porém, descobriu que muitas dessas histórias são verdadeiras.",
		skills: ["adestramento", "sobrevivencia"],
		power: {
			name: "Pathfinder",
			description:
				"When you make a Animal Handling or Survival check, you can spend 2 EP to receive +5 on the roll. Furthermore, you don't receive a movement penalty when moving in difficult terrain.",
		},
	},
	scoundrelVulture: {
		name: "Scoundrel Vulture",
		description:
			'Você fez parte dos valoros Gaudérios Abutres. Mesmo longe do motoclube, ainda segue o lema "A gente morre por quem a gente ama".',
		skills: ["luta", "pilotagem"],
		power: {
			name: "Scoundrel Fraternity",
			description:
				"Once per round, when an adjacent ally is the target of an attack or effect, you can spend 1 EP to switch places with that ally and become the target of that attack or effect. If you take this action, on your next turn you gain +2 on attack rolls against the attacker.",
		},
	},
	stray: {
		name: "Stray",
		description:
			"Você não vivia de acordo com as normas da sociedade. Podia ser um eremita, uma pessoa em situação de rua ou simplesmente alguém que descobriu o Paranormal e abandonou sua rotina — sabendo o quão frágil era a existência humana, não conseguia simplesmente continuar indo para o trabalho todo o dia. De qualquer forma, a vida sem os confortos modernos o deixou mais forte.",
		skills: ["fortitude", "sobrevivencia"],
		power: {
			name: "Calloused",
			description: "You receive +1 HP for every 5% LPE.",
		},
	},
	stuntDouble: {
		name: "Stunt Double",
		description:
			"Você sempre combinou um gosto por alta velocidade, manobras ousadas e esportes radicais com uma total falta de noção do perigo. Sua busca incessante por adrenalina o fez seguir carreira de dublê, uma profissão que lhe permitiu enfrentar o risco das mais diversas formas. Agora à serviço da Ordem, você enfim enfrentará o Medo verdadeiro e poderá colocar sua coragem - e suas peripécias - à prova como nunca.",
		skills: ["pilotagem", "reflexos"],
		power: {
			name: "Fearless",
			description:
				"When you make a skill check on which a failure will directly result in damage or a negative condition, you receive +5 to that test.",
		},
	},
	swindler: {
		name: "Swindler",
		description:
			"Uma vida digna exige muito trabalho, então é melhor nem tentar. Você vivia de pequenos golpes, jogatina ilegal e falcatruas. Certo dia, enganou a pessoa errada; no dia seguinte, se viu servindo à Ordem. Pelo menos agora tem a chance de usar sua lábia para o bem.",
		skills: ["crime", "enganacao"],
		power: {
			name: "Impostor",
			description:
				"Once per scene, you can spend 2 EP to replace any skill check by a Deception check.",
		},
	},
	universityStudent: {
		name: "University Student",
		description:
			"Você era aluno de uma faculdade. Em sua rotina de estudos, provas e festas, acabou descobrindo algo — talvez um livro amaldiçoado na antiga biblioteca do campus? Por seu achado, foi convocado pela Ordem. Agora, estuda com mais afinco: nesse novo curso, ouviu dizer que as provas podem ser mortais.",
		skills: ["atualidades", "investigacao"],
		power: {
			name: "Dedication",
			description:
				"You receive +1 EP, and 1 additional EP for each odd LPE (15%, 25%...). Furthermore, your EP per turn limit increases by 1 (on LPE 5% your limit is 2, on LPE 10% it's 3 and so on; this does not affect the DC of your effects).",
		},
	},
	victim: {
		name: "Victim",
		description:
			"Em algum momento de sua vida — infância, juventude ou início da vida adulta — você encontrou o Paranormal... E a experiência não foi nada boa. Você viu os espíritos dos mortos, foi atacado por uma entidade ou mesmo foi sequestrado para ser sacrificado em um ritual impedido no último momento. A experiência foi traumática, mas você não se abateu; em vez disso, decidiu lutar para impedir que outros inocentes passem pelo mesmo. E, já tendo sendo vítima do Paranormal, se tornou habilidoso em evitar perigos.",
		skills: ["reflexos", "vontade"],
		power: {
			name: "Psychological Scars",
			description: "You receive +1 Sanity for every 5% LPE.",
		},
	},
	writer: {
		name: "Writer",
		description:
			"Você ganhava a vida inventando mundos, pessoas e histórias - em outra palavras, escrevendo ficção. Em certo momento, seu trabalho tocou ou foi tocado pelo paranormal Talvez as suas histórias tenham gerado Medo, talvez a inspiração para ela viesse do Outro Lado desde o início. Recrutado pela Ordem, você agora luta para que a vida real tenha o final feliz que seus livros não tiveram.",
		skills: ["artes", "atualidades"],
		power: {
			name: "Paper-born Wisdom",
			description:
				"Due to your profession, you have read - and learned - a bit of everything. Once per scene, you can spend 2 EP to become trained in any skill until the end of the ongoing scene.",
		},
	},
}
