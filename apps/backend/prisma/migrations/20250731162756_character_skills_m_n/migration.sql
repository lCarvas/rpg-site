/*
  Warnings:

  - You are about to drop the column `skills` on the `CharacterSheet` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CharacterSheet" DROP COLUMN "skills";

-- CreateTable
CREATE TABLE "Skills" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterSkills" (
    "id" SERIAL NOT NULL,
    "characterId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,

    CONSTRAINT "CharacterSkills_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CharacterSkills_characterId_skillId_key" ON "CharacterSkills"("characterId", "skillId");

-- AddForeignKey
ALTER TABLE "CharacterSkills" ADD CONSTRAINT "CharacterSkills_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "CharacterSheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterSkills" ADD CONSTRAINT "CharacterSkills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
