-- DropForeignKey
ALTER TABLE "Abilities" DROP CONSTRAINT "Abilities_characterSheetId_fkey";

-- AddForeignKey
ALTER TABLE "Abilities" ADD CONSTRAINT "Abilities_characterSheetId_fkey" FOREIGN KEY ("characterSheetId") REFERENCES "CharacterSheet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
