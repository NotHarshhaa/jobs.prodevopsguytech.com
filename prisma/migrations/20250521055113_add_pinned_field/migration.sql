-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "pinned" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE INDEX "Job_pinned_idx" ON "Job"("pinned");
