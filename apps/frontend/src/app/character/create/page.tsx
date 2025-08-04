import CharacterCreateComponent from "@/components/character-create"

export default function CreateCharacterPage() {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="font-bold text-2xl">Create Character</h1>
			<CharacterCreateComponent />
		</div>
	)
}
