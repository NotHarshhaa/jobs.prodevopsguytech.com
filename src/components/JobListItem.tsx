"use client";

import { formatMoney, relativeDate, cn } from "@/lib/utils";
import {
  ArrowRight,
  Banknote,
  Briefcase,
  Clock,
  MapPin,
  Pencil,
  Trash,
  Building2,
  BookmarkPlus,
  Zap,
  Globe,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import { Job } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteJob } from "@/app/admin/jobs/[slug]/actions";
import ConfirmDialog from "./ConfirmDialog";
import { useState } from "react";

export interface JobListItemProps {
  job: Job;
  hideAdminControls?: boolean;
}

function JobListItem({ job, hideAdminControls }: JobListItemProps) {
  const router = useRouter();
  const [isSaved, setIsSaved] = useState(false);

  // Function to format the posted date
  const getPostedDate = () => {
    const postedDate = job.createdAt ? new Date(job.createdAt) : new Date();
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - postedDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 1) return "Today";
    if (diffDays <= 2) return "Yesterday";
    if (diffDays <= 7) return `${diffDays} days ago`;
    if (diffDays <= 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  // Function to get job type badge styling
  const getJobTypeBadgeClass = (type: string) => {
    switch (type) {
      case "Full-time":
        return "border-blue-200/60 bg-blue-50/80 text-blue-700 dark:border-blue-800/30 dark:bg-blue-950/30 dark:text-blue-400";
      case "Part-time":
        return "border-yellow-200/60 bg-yellow-50/80 text-yellow-700 dark:border-yellow-800/30 dark:bg-yellow-950/30 dark:text-yellow-400";
      case "Contract":
        return "border-purple-200/60 bg-purple-50/80 text-purple-700 dark:border-purple-800/30 dark:bg-purple-950/30 dark:text-purple-400";
      case "Internship":
        return "border-green-200/60 bg-green-50/80 text-green-700 dark:border-green-800/30 dark:bg-green-950/30 dark:text-green-400";
      default:
        return "border-gray-200/60 bg-gray-50/80 text-gray-700 dark:border-gray-800/30 dark:bg-gray-950/30 dark:text-gray-400";
    }
  };

  async function handleDelete() {
    try {
      await deleteJob(job.slug);
      router.refresh();
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  }

  return (
    <Card className="group overflow-hidden border-indigo-200/60 bg-white backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/60 hover:shadow-lg dark:border-indigo-900/30 dark:bg-gray-900/80">
      <CardContent className="p-0">
        {!hideAdminControls && (
          <div className="flex items-center justify-between bg-gray-100 px-4 py-2 dark:bg-gray-800/70">
            <h2 className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Admin Controls
            </h2>
            <div className="flex gap-2">
              <Link href={`/admin/jobs/${job.slug}/edit`}>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
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
                  className="h-8 w-8 text-gray-600 hover:bg-red-100 hover:text-red-600 dark:text-gray-300 dark:hover:bg-red-900/30 dark:hover:text-red-400"
                  title="Delete job"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </ConfirmDialog>
            </div>
          </div>
        )}

        <div className="flex flex-col p-5 sm:p-6">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            {/* Company Logo/Icon */}
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border border-indigo-200/60 bg-indigo-50 shadow-md dark:border-indigo-900/30 dark:bg-gray-800">
              <Building2 className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
              {(job as any).featured && (
                <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-white shadow-md">
                  <Zap className="h-3 w-3" />
                </div>
              )}
            </div>

            {/* Job Title & Company */}
            <div className="flex-1 space-y-1.5">
              <h3 className="text-xl font-semibold tracking-tight text-gray-800 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400 sm:text-2xl">
                {job.title}
              </h3>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Building2 className="h-4 w-4 flex-shrink-0 text-indigo-500 dark:text-indigo-400" />
                  <span className="font-medium text-gray-800 dark:text-white">
                    {job.companyName}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-purple-500 dark:text-purple-400" />
                  <span>{job.location || job.locationType}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Globe className="h-4 w-4 flex-shrink-0 text-blue-500 dark:text-blue-400" />
                  <span>{job.locationType}</span>
                </div>
                {(job as any).salary && (
                  <div className="flex items-center gap-1">
                    <Banknote className="h-4 w-4 flex-shrink-0 text-green-500 dark:text-green-400" />
                    <span>{formatMoney((job as any).salary)}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right side buttons */}
            <div className="flex w-full flex-row items-center justify-between sm:w-auto sm:flex-col sm:items-end sm:gap-3">
              <div className="flex items-center gap-1.5">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400"
                  onClick={() => setIsSaved(!isSaved)}
                >
                  <BookmarkPlus
                    className={cn(
                      "h-4 w-4",
                      isSaved &&
                        "fill-indigo-600 text-indigo-600 dark:fill-indigo-400 dark:text-indigo-400",
                    )}
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>

              <Button
                className="relative mt-2 overflow-hidden rounded-full bg-indigo-500 px-5 py-2.5 font-medium text-white shadow-md transition-all duration-300 hover:bg-indigo-600 hover:shadow-lg dark:bg-indigo-600 dark:hover:bg-indigo-700 sm:mt-0"
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
          </div>

          {/* Job details section */}
          <div className="mt-5 space-y-4">
            {/* Badge row */}
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className={cn(
                  "rounded-full border capitalize",
                  getJobTypeBadgeClass(job.type),
                )}
              >
                {job.type}
              </Badge>
              <Badge
                variant="secondary"
                className="rounded-full bg-gray-800/80 text-gray-300 backdrop-blur-sm"
              >
                {job.experience}
              </Badge>

              {/* Add featured badge if the job is featured */}
              {(job as any).featured && (
                <Badge
                  variant="outline"
                  className="rounded-full border-amber-800/30 bg-amber-900/30 text-amber-400"
                >
                  <Zap className="mr-1 h-3 w-3" />
                  Featured
                </Badge>
              )}
            </div>

            {/* Short description */}
            {(job as any).description && (
              <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                {(job as any).description.substring(0, 200)}
                {(job as any).description.length > 200 ? "..." : ""}
              </p>
            )}

            {/* Bottom metadata row */}
            <div className="flex flex-wrap items-center justify-between border-t border-indigo-200/60 pt-4 text-sm text-gray-600 dark:border-indigo-900/30 dark:text-gray-400">
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center">
                  <Clock className="mr-1.5 h-3.5 w-3.5" />
                  <span>{getPostedDate()}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="mr-1.5 h-3.5 w-3.5" />
                  <span>Applicants: {Math.floor(Math.random() * 100)}</span>
                </div>
              </div>

              <Button
                variant="link"
                className="h-auto p-0 text-sm font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-white"
                asChild
              >
                <Link href={`/jobs/${job.slug}`}>
                  View Details
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default JobListItem;
