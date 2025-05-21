"use client";

import { formatMoney, relativeDate, cn } from "@/lib/utils";
import { ArrowRight, Banknote, Briefcase, Clock, MapPin, Pencil, Trash, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import { Job } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteJob } from "@/app/admin/jobs/[slug]/actions";
import ConfirmDialog from "./ConfirmDialog";

export interface JobListItemProps {
  job: Job;
  hideAdminControls?: boolean;
}

export default function JobListItem({ job, hideAdminControls }: JobListItemProps) {
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
    <Card className="group overflow-hidden border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-black/95 dark:border-gray-800 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-4">
            {!hideAdminControls && (
              <div className="flex items-center justify-between mb-4">
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
            )}

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                {job.title}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-4 text-sm sm:text-base text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Building2 className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{job.companyName}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{job.location || job.locationType}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 flex-shrink-0" />
                  <span>{job.type}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="rounded-full">
                {job.experience}
              </Badge>
              <Badge variant="secondary" className="rounded-full">
                {job.locationType}
              </Badge>
              <Badge
                variant="outline"
                className={cn(
                  "capitalize rounded-full",
                  job.type === "Full-time" && "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300",
                  job.type === "Part-time" && "border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-300",
                  job.type === "Contract" && "border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-300"
                )}
              >
                {job.type}
              </Badge>
            </div>
          </div>

          <Button 
            className="w-full sm:w-auto relative overflow-hidden bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105" 
            size="lg" 
            asChild
          >
            <a 
              href={job.applicationUrl || `/jobs/${job.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
