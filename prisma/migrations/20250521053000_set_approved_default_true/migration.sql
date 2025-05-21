/*
  Warnings:

  - You are about to drop the column `description` on the `Job` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "description",
ALTER COLUMN "approved" SET DEFAULT true;
