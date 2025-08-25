/*
  Warnings:

  - Changed the type of `category1Limit` on the `CharacterSheet` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `category2Limit` on the `CharacterSheet` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `category3Limit` on the `CharacterSheet` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `category4Limit` on the `CharacterSheet` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "CharacterSheet" DROP COLUMN "category1Limit",
ADD COLUMN     "category1Limit" INTEGER NOT NULL,
DROP COLUMN "category2Limit",
ADD COLUMN     "category2Limit" INTEGER NOT NULL,
DROP COLUMN "category3Limit",
ADD COLUMN     "category3Limit" INTEGER NOT NULL,
DROP COLUMN "category4Limit",
ADD COLUMN     "category4Limit" INTEGER NOT NULL;
