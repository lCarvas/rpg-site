/*
  Warnings:

  - You are about to drop the column `Rank` on the `CharacterSheet` table. All the data in the column will be lost.
  - Added the required column `rank` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CharacterSheet" DROP COLUMN "Rank",
ADD COLUMN     "rank" TEXT NOT NULL;
