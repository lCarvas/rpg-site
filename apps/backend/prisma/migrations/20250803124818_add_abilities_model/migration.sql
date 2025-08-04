-- CreateTable
CREATE TABLE "Abilities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "characterSheetId" INTEGER NOT NULL,

    CONSTRAINT "Abilities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Abilities" ADD CONSTRAINT "Abilities_characterSheetId_fkey" FOREIGN KEY ("characterSheetId") REFERENCES "CharacterSheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
