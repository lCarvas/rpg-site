-- DropForeignKey
ALTER TABLE "CharacterSkills" DROP CONSTRAINT "CharacterSkills_characterId_fkey";

-- AddForeignKey
ALTER TABLE "CharacterSkills" ADD CONSTRAINT "CharacterSkills_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "CharacterSheet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
