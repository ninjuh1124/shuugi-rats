/*
  Warnings:

  - Changed the type of `rules` on the `Game` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `rules` on the `Session` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."Game" DROP COLUMN "rules",
ADD COLUMN     "rules" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "public"."Session" DROP COLUMN "rules",
ADD COLUMN     "rules" JSONB NOT NULL;
