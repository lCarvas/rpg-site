/*
  Warnings:

  - You are about to drop the column `block_dr` on the `CharacterSheet` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `CharacterSheet` table. All the data in the column will be lost.
  - You are about to drop the column `current_hp` on the `CharacterSheet` table. All the data in the column will be lost.
  - You are about to drop the column `current_pd` on the `CharacterSheet` table. All the data in the column will be lost.
  - You are about to drop the column `current_pe` on the `CharacterSheet` table. All the data in the column will be lost.
  - You are about to drop the column `current_san` on the `CharacterSheet` table. All the data in the column will be lost.
  - You are about to drop the column `equip_def` on the `CharacterSheet` table. All the data in the column will be lost.
  - You are about to drop the column `max_hp` on the `CharacterSheet` table. All the data in the column will be lost.
  - You are about to drop the column `max_pd` on the `CharacterSheet` table. All the data in the column will be lost.
  - You are about to drop the column `max_pe` on the `CharacterSheet` table. All the data in the column will be lost.
  - You are about to drop the column `max_san` on the `CharacterSheet` table. All the data in the column will be lost.
  - You are about to drop the column `other_def` on the `CharacterSheet` table. All the data in the column will be lost.
  - You are about to drop the column `turn_pe` on the `CharacterSheet` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `CharacterSheet` table. All the data in the column will be lost.
  - Added the required column `blockDr` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentHp` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentPd` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentPe` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentSan` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `equipDef` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxHp` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxPd` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxPe` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxSan` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `otherDef` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `turnPe` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CharacterSheet" DROP CONSTRAINT "CharacterSheet_user_id_fkey";

-- AlterTable
ALTER TABLE "CharacterSheet" DROP COLUMN "block_dr",
DROP COLUMN "created_at",
DROP COLUMN "current_hp",
DROP COLUMN "current_pd",
DROP COLUMN "current_pe",
DROP COLUMN "current_san",
DROP COLUMN "equip_def",
DROP COLUMN "max_hp",
DROP COLUMN "max_pd",
DROP COLUMN "max_pe",
DROP COLUMN "max_san",
DROP COLUMN "other_def",
DROP COLUMN "turn_pe",
DROP COLUMN "user_id",
ADD COLUMN     "blockDr" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "currentHp" INTEGER NOT NULL,
ADD COLUMN     "currentPd" INTEGER NOT NULL,
ADD COLUMN     "currentPe" INTEGER NOT NULL,
ADD COLUMN     "currentSan" INTEGER NOT NULL,
ADD COLUMN     "equipDef" INTEGER NOT NULL,
ADD COLUMN     "maxHp" INTEGER NOT NULL,
ADD COLUMN     "maxPd" INTEGER NOT NULL,
ADD COLUMN     "maxPe" INTEGER NOT NULL,
ADD COLUMN     "maxSan" INTEGER NOT NULL,
ADD COLUMN     "otherDef" INTEGER NOT NULL,
ADD COLUMN     "turnPe" INTEGER NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "CharacterSheet" ADD CONSTRAINT "CharacterSheet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
