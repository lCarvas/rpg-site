import { skills } from "../../frontend/src/data/skills"
import { PrismaClient } from "../src/generated/prisma"

const prisma = new PrismaClient()

async function seed() {
	await prisma.skills.createMany({
		data: Object.keys(skills).map((id) => ({ name: id })),
	})
}

seed()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
