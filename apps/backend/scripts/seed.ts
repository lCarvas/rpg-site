import { PrismaClient } from "../src/generated/prisma"

const prisma = new PrismaClient()

async function seed() {}

seed()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
