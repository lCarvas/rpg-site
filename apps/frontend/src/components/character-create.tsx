"use client"

import { TabsContent } from "@radix-ui/react-tabs"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip"
import { createCharacter } from "@/dal/dal"
import { backgrounds } from "@/data/backgrounds"
import { classes } from "@/data/classes"
import { skills } from "@/data/skills"
import { authClient } from "@/lib/auth-client"

export default function CharacterCreateComponent() {
	const router = useRouter()
	const { data: session, isPending } = authClient.useSession()

	if (!session && !isPending) {
		router.push("/login")
	}

	const userId = session?.user.id

	const attributes = [
		{ name: "Strength", key: "str" },
		{ name: "Agility", key: "agi" },
		{ name: "Intellect", key: "int" },
		{ name: "Vigor", key: "vig" },
		{ name: "Presence", key: "pre" },
	]
	const [attributeValues, setAttributeValues] = useState<
		Record<string, string | number>
	>({
		str: 1,
		agi: 1,
		int: 1,
		vig: 1,
		pre: 1,
	})
	const [selectedBackground, setSelectedBackground] = useState<string>("")
	const [selectedClass, setSelectedClass] = useState<string>("")
	const canCreateCharacter = selectedBackground !== "" && selectedClass !== ""

	return (
		<Tabs defaultValue="attributes">
			<div className="mb-4 flex items-center justify-between">
				<TabsList>
					<TabsTrigger className="hover:cursor-pointer" value="attributes">
						Attributes
					</TabsTrigger>
					<TabsTrigger className="hover:cursor-pointer" value="background">
						Background
					</TabsTrigger>
					<TabsTrigger className="hover:cursor-pointer" value="class">
						Class
					</TabsTrigger>
				</TabsList>
				{canCreateCharacter ? (
					<Button
						disabled={!canCreateCharacter}
						onClick={() => {
							const classAsKey = selectedClass as keyof typeof classes
							createCharacter({
								userId: userId as string,
								str: Number(attributeValues.str),
								agi: Number(attributeValues.agi),
								int: Number(attributeValues.int),
								vig: Number(attributeValues.vig),
								pre: Number(attributeValues.pre),
								class: selectedClass,
								background: selectedBackground,
								initialHp:
									classes[classAsKey].initialHp + Number(attributeValues.vig),
								initialSan: classes[classAsKey].initialSan,
								initialPe:
									classes[classAsKey].initialPe + Number(attributeValues.pre),
								initialPd:
									classes[classAsKey].initialPd + Number(attributeValues.pre),
								proficiencies: classes[classAsKey].proficiencies,
								skills:
									backgrounds[selectedBackground as keyof typeof backgrounds]
										.skills,
							})
						}}
					>
						Create Character
					</Button>
				) : (
					<Tooltip>
						<TooltipTrigger asChild>
							<Button disabled>Create Character</Button>
						</TooltipTrigger>
						<TooltipContent>
							Please select a background and a class
						</TooltipContent>
					</Tooltip>
				)}
			</div>
			<TabsContent value="attributes">
				<div className="gap-6 md:grid md:grid-cols-2">
					<div className="mb-4 text-justify text-3xl md:mb-0">
						<p>
							When you create a character, all your attributes start at 1 and
							you get 4 points to spread across these however you deem fit. You
							can also reduce one attribute to 0 to receive 1 extra point. The
							maximum initial value you can have on each attribute is 3.
						</p>
					</div>
					<div className="grid grid-cols-1 gap-4">
						{attributes.map((attribute) => (
							<div
								className="rounded-2xl bg-card p-4 shadow"
								key={attribute.key}
							>
								<h3 className="mb-2 font-semibold text-xl">{attribute.name}</h3>
								<Input
									className="w-full"
									inputMode="numeric"
									onBlur={(e) =>
										setAttributeValues((prevState) => ({
											...prevState,
											[attribute.key]: Math.max(0, Number(e.target.value)),
										}))
									}
									onChange={(e) =>
										setAttributeValues((prevState) => ({
											...prevState,
											[attribute.key]: e.target.value,
										}))
									}
									type="number"
									value={
										attributeValues[
											attribute.key as keyof typeof attributeValues
										]
									}
								/>
							</div>
						))}
					</div>
				</div>
			</TabsContent>
			<TabsContent value="background">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					{Object.keys(backgrounds).map((backgroundKey) => {
						const background =
							backgrounds[backgroundKey as keyof typeof backgrounds]
						return (
							<div
								className={`flex flex-col justify-between rounded-2xl bg-card p-6 shadow ${selectedBackground === backgroundKey ? "ring-2 ring-blue-500" : ""}`}
								key={background.name}
							>
								<h3 className="mb-2 font-semibold text-xl">
									{background.name}
								</h3>
								{background.description}
								<p className="mt-2">
									<strong>Trained Skills:</strong>{" "}
									{background.skills
										.map((skill) => skills[skill as keyof typeof skills].name)
										.join(" & ")}
								</p>
								<div className="mt-3">
									<h4 className="font-bold">{background.power.name}</h4>
									<p className="mt-1">{background.power.description}</p>
								</div>
								<div className="mt-4 flex justify-end">
									<Button
										className="mt-4"
										onClick={() => setSelectedBackground(backgroundKey)}
										variant="outline"
									>
										{selectedBackground === backgroundKey
											? "Selected"
											: "Select Background"}
									</Button>
								</div>
							</div>
						)
					})}
				</div>
			</TabsContent>
			<TabsContent value="class">
				<div className="space-y-4">
					{Object.keys(classes).map((classKey) => {
						const cls = classes[classKey as keyof typeof classes]

						return (
							<div
								className={`rounded-2xl bg-card p-6 shadow ${selectedClass === classKey ? "ring-2 ring-blue-500" : ""}`}
								key={cls.name}
							>
								<h3 className="mb-2 font-semibold text-xl">{cls.name}</h3>
								<p className="text-sm">
									{cls.shortDescription || cls.description}
								</p>
								<Button
									className="mt-4"
									onClick={() => setSelectedClass(classKey)}
									variant="outline"
								>
									{selectedClass === classKey ? "Selected" : "Select Class"}
								</Button>
							</div>
						)
					})}
				</div>
			</TabsContent>
		</Tabs>
	)
}
