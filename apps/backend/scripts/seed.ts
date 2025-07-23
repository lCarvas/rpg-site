import { PrismaClient } from "../src/generated/prisma"

const prisma = new PrismaClient()

async function seed() {
	await prisma.user.upsert({
		where: { email: "diogo@chungus.com" },
		update: {},
		create: {
			email: "diogo@chungus.com",
			password: await Bun.password.hash("1234568"),
		},
	})

	await prisma.user.upsert({
		where: { email: "chungus@chungus.com" },
		update: {},
		create: {
			email: "chungus@chungus.com",
			password: await Bun.password.hash("12345678"),
		},
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
