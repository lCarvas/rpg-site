/*
  Warnings:

  - Added the required column `attribute` to the `CharacterSkills` table without a default value. This is not possible if the table is not empty.
  - Added the required column `otherBonus` to the `CharacterSkills` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trainingBonus` to the `CharacterSkills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CharacterSkills" ADD COLUMN     "attribute" CHAR(3) NOT NULL,
ADD COLUMN     "otherBonus" INTEGER NOT NULL,
ADD COLUMN     "trainingBonus" INTEGER NOT NULL;
