"use client";

// src/components/JobResults.tsx
import { cn } from "@/lib/utils";
import { JobFilterValues } from "@/lib/validation";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  Building2,
  Filter,
  Bookmark,
  ChevronRight,
  Star,
  Tag,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Job } from "@prisma/client";
import JobListItem from "./JobListItem";

interface JobResultsProps {
  filterValues: JobFilterValues;
  page?: number;
  showAll?: boolean;
  jobs: Job[] | undefined;
  isAdmin?: boolean;
}

export default function JobResults({
  filterValues,
  page = 1,
  showAll = false,
  jobs,
  isAdmin = false,
}: JobResultsProps) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white md:text-3xl">
            Available Positions
          </h2>
          <div className="mt-2 flex items-center">
            <Badge
              variant="secondary"
              className="mr-3 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-white"
            >
              {jobs?.length || 0} jobs found
            </Badge>
            {filterValues.q && (
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <span>Results for</span>
                <Badge
                  variant="outline"
                  className="ml-2 rounded-full border-indigo-200/60 bg-white font-normal text-gray-600 dark:border-indigo-900/30 dark:bg-gray-800 dark:text-gray-300"
                >
                  {filterValues.q}
                  <button className="ml-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    ×
                  </button>
                </Badge>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 self-end">
          <Button
            variant="outline"
            size="sm"
            className="h-9 gap-1.5 rounded-full border-indigo-200/60 bg-white px-3 text-gray-600 shadow-md backdrop-blur-sm hover:bg-gray-50 hover:text-gray-900 dark:border-indigo-900/30 dark:bg-gray-900/70 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            <Filter className="h-3.5 w-3.5 text-indigo-500 dark:text-indigo-400" />
            Filter
          </Button>
          <div className="relative flex items-center gap-1 rounded-full border border-indigo-200/60 bg-white p-1 shadow-md backdrop-blur-sm dark:border-indigo-900/30 dark:bg-gray-900/70">
            <Button
              variant="ghost"
              size="sm"
              className="h-7 rounded-full px-3 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              Newest
            </Button>
            <Button
              variant="default"
              size="sm"
              className="h-7 rounded-full bg-indigo-500 px-3 text-xs text-white hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700"
            >
              Relevant
            </Button>
          </div>
        </div>
      </div>

      {jobs && jobs.length > 0 ? (
        <div className="grid gap-4">
          {jobs.map((job) => (
            <JobListItem
              key={job.id}
              job={job}
              hideAdminControls={!showAll || !isAdmin}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-indigo-200/60 bg-white p-12 text-center shadow-lg dark:border-indigo-900/30 dark:bg-gray-900/50">
          <div className="rounded-full bg-indigo-100 p-4 shadow-inner dark:bg-indigo-900/30">
            <Briefcase className="h-10 w-10 text-indigo-500 dark:text-indigo-400" />
          </div>
          <h3 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
            No jobs found
          </h3>
          <p className="mt-2 max-w-sm text-gray-600 dark:text-gray-400">
            Try adjusting your search filters or browse all available positions.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 sm:flex-nowrap">
            <Button
              variant="outline"
              asChild
              className="rounded-lg border-indigo-200/60 bg-indigo-50/50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 dark:border-indigo-900/30 dark:bg-indigo-900/20 dark:text-gray-300 dark:hover:bg-indigo-900/30 dark:hover:text-white"
            >
              <a href="/jobs">View All Jobs</a>
            </Button>
            <Button
              className="rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700"
              asChild
            >
              <a href="/jobs">Browse Categories</a>
            </Button>
          </div>
        </div>
      )}

      {jobs && jobs.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(jobs.length / 10)}
          filterValues={filterValues}
        />
      )}

      {/* Featured jobs section */}
      {jobs && jobs.length > 0 && (
        <div className="mt-12 space-y-6 rounded-xl border border-indigo-200/60 bg-indigo-50/40 p-6 shadow-lg dark:border-indigo-900/30 dark:bg-indigo-900/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Featured Opportunities
              </h3>
            </div>
            <Button
              variant="link"
              size="sm"
              className="gap-1 text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-white"
            >
              View all
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {jobs?.slice(0, 3).map((job) => (
              <Card
                key={job.id}
                className="group overflow-hidden border-indigo-200/60 bg-white backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/60 hover:shadow-lg dark:border-indigo-900/30 dark:bg-gray-900/80"
              >
                <div className="p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-100 text-indigo-500 shadow-inner dark:bg-indigo-900/40 dark:text-indigo-400">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                  <h4 className="line-clamp-1 text-base font-semibold text-gray-800 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                    {job.title}
                  </h4>
                  <p className="mt-1 line-clamp-1 text-sm text-gray-600 dark:text-gray-400">
                    {job.companyName}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <Badge
                      variant="secondary"
                      className="rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-white"
                    >
                      {job.type}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="rounded-full border-indigo-200/60 bg-white text-gray-600 dark:border-indigo-900/30 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {job.locationType}
                    </Badge>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-indigo-200/60 pt-3 dark:border-indigo-900/30">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="mr-1.5 h-3.5 w-3.5" />
                      <span>New</span>
                    </div>
                    <Button
                      size="sm"
                      className="h-8 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700"
                      asChild
                    >
                      <a href={`/jobs/${job.slug}`}>
                        Apply
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  filterValues: JobFilterValues;
}

function Pagination({
  currentPage,
  totalPages,
  filterValues: { q, type, location, remote },
}: PaginationProps) {
  function generatePageLink(page: number) {
    const searchParams = new URLSearchParams({
      ...(q && { q }),
      ...(type && { type }),
      ...(location && { location }),
      ...(remote && { remote: "true" }),
      page: page.toString(),
    });
    return `/jobs?${searchParams.toString()}`;
  }

  return (
    <div className="flex items-center justify-between border-t border-indigo-200/60 pt-6 dark:border-indigo-900/30">
      <Button
        variant="outline"
        asChild
        className={cn(
          "gap-2 rounded-full border-indigo-200/60 bg-white text-gray-600 shadow-md backdrop-blur-sm hover:bg-gray-50 hover:text-gray-900 dark:border-indigo-900/30 dark:bg-gray-900/70 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
          currentPage <= 1 && "invisible",
        )}
      >
        <a href={generatePageLink(currentPage - 1)}>
          <ArrowLeft className="h-4 w-4" />
          Previous
        </a>
      </Button>

      <div className="flex items-center gap-1.5">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <Button
            key={pageNum}
            variant={pageNum === currentPage ? "default" : "outline"}
            size="sm"
            asChild
            className={cn(
              "h-8 min-w-[2rem] rounded-full border-indigo-200/60 px-2.5 dark:border-indigo-900/30",
              pageNum === currentPage
                ? "pointer-events-none bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700"
                : "bg-white text-gray-600 shadow-md backdrop-blur-sm hover:bg-gray-50 hover:text-gray-900 dark:bg-gray-900/70 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
            )}
          >
            <a href={generatePageLink(pageNum)}>{pageNum}</a>
          </Button>
        ))}
      </div>

      <Button
        variant="outline"
        asChild
        className={cn(
          "gap-2 rounded-full border-indigo-200/60 bg-white text-gray-600 shadow-md backdrop-blur-sm hover:bg-gray-50 hover:text-gray-900 dark:border-indigo-900/30 dark:bg-gray-900/70 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
          currentPage >= totalPages && "invisible",
        )}
      >
        <a href={generatePageLink(currentPage + 1)}>
          Next
          <ArrowRight className="h-4 w-4" />
        </a>
      </Button>
    </div>
  );
}
