/*
  Warnings:

  - You are about to drop the column `currentWeigth` on the `CharacterSheet` table. All the data in the column will be lost.
  - You are about to drop the column `maxWeigth` on the `CharacterSheet` table. All the data in the column will be lost.
  - Added the required column `currentWeight` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxWeight` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CharacterSheet" DROP COLUMN "currentWeigth",
DROP COLUMN "maxWeigth",
ADD COLUMN     "currentWeight" INTEGER NOT NULL,
ADD COLUMN     "maxWeight" INTEGER NOT NULL;
