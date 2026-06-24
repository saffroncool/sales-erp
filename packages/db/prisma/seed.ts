import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // minimal seed
  await prisma.team.createMany({ data: [{ name: 'Default' }] })
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect())
