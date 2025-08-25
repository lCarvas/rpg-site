/*
  Warnings:

  - Added the required column `Rank` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category1Limit` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category2Limit` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category3Limit` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category4Limit` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creditLimit` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentWeigth` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isPdOn` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isPrivate` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isSepareteNexOn` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxWeigth` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prestige` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ritualDc` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CharacterSheet" ADD COLUMN     "Rank" TEXT NOT NULL,
ADD COLUMN     "category1Limit" TEXT NOT NULL,
ADD COLUMN     "category2Limit" TEXT NOT NULL,
ADD COLUMN     "category3Limit" TEXT NOT NULL,
ADD COLUMN     "category4Limit" TEXT NOT NULL,
ADD COLUMN     "creditLimit" TEXT NOT NULL,
ADD COLUMN     "currentWeigth" TEXT NOT NULL,
ADD COLUMN     "isPdOn" BOOLEAN NOT NULL,
ADD COLUMN     "isPrivate" BOOLEAN NOT NULL,
ADD COLUMN     "isSepareteNexOn" BOOLEAN NOT NULL,
ADD COLUMN     "maxWeigth" TEXT NOT NULL,
ADD COLUMN     "prestige" INTEGER NOT NULL,
ADD COLUMN     "ritualDc" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Items" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "category" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "proficiency" TEXT,
    "weaponType" TEXT,
    "handling" TEXT,
    "damage" TEXT,
    "altDamage" TEXT,
    "crit" INTEGER,
    "critMultiplier" INTEGER,
    "damageType" TEXT,
    "range" TEXT,
    "defense" INTEGER,
    "generalType" TEXT,
    "element" TEXT,
    "isActive" BOOLEAN,
    "characterSheetId" INTEGER NOT NULL,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Items" ADD CONSTRAINT "Items_characterSheetId_fkey" FOREIGN KEY ("characterSheetId") REFERENCES "CharacterSheet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
