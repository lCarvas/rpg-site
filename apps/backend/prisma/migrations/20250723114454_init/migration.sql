-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterSheet" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "str" INTEGER NOT NULL,
    "agi" INTEGER NOT NULL,
    "int" INTEGER NOT NULL,
    "vig" INTEGER NOT NULL,
    "pre" INTEGER NOT NULL,
    "class" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "nex" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "turn_pe" INTEGER NOT NULL,
    "movement" INTEGER NOT NULL,
    "current_hp" INTEGER NOT NULL,
    "max_hp" INTEGER NOT NULL,
    "current_san" INTEGER NOT NULL,
    "max_san" INTEGER NOT NULL,
    "current_pe" INTEGER NOT NULL,
    "max_pe" INTEGER NOT NULL,
    "current_pd" INTEGER NOT NULL,
    "max_pd" INTEGER NOT NULL,
    "equip_def" INTEGER NOT NULL,
    "other_def" INTEGER NOT NULL,
    "block_dr" INTEGER NOT NULL,
    "dodge" INTEGER NOT NULL,
    "armor" TEXT NOT NULL,
    "resistances" TEXT NOT NULL,
    "proficiencies" TEXT NOT NULL,
    "skills" JSONB NOT NULL,

    CONSTRAINT "CharacterSheet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "CharacterSheet" ADD CONSTRAINT "CharacterSheet_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
