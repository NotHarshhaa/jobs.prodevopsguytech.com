"use client";

import { Job } from "@prisma/client";
import JobListItem from "@/components/JobListItem";
import { Button } from "@/components/ui/button";
import { deleteJob } from "./jobs/[slug]/actions";
import { useRouter } from "next/navigation";
import { Pencil, Trash } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import ConfirmDialog from "@/components/ConfirmDialog";

interface AdminJobItemProps {
  job: Job;
}

export default function AdminJobItem({ job }: AdminJobItemProps) {
  const router = useRouter();

  async function handleDelete() {
    try {
      await deleteJob(job.slug);
      router.refresh();
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  }

  return (
    <Card className="relative overflow-hidden">
      <div className="flex flex-col gap-3 p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-muted-foreground">Admin Controls</h2>
          <div className="flex gap-2">
            <Link href={`/admin/jobs/${job.slug}/edit`}>
              <Button 
                variant="outline"
                size="icon"
                className="h-8 w-8 hover:bg-muted"
                title="Edit job"
              >
                <Pencil className="h-4 w-4" />
              </Button>
            </Link>

            <ConfirmDialog
              title="Delete Job"
              description="Are you sure you want to delete this job? This action cannot be undone."
              onConfirm={handleDelete}
              variant="destructive"
            >
              <Button 
                variant="outline"
                size="icon"
                className="h-8 w-8 hover:bg-muted hover:bg-red-100 hover:text-red-600"
                title="Delete job"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </ConfirmDialog>
          </div>
        </div>

        <div className="border-t border-border/40 pt-3 sm:pt-4">
          <JobListItem job={job} hideAdminControls />
        </div>
      </div>
    </Card>
  );
} 