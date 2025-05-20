// src/components/JobResults.tsx
import { cn } from "@/lib/utils";
import { JobFilterValues } from "@/lib/validation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import JobListItem from "./JobListItem";
import jobs from "@/data/jobs.json";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface JobResultsProps {
  filterValues: JobFilterValues;
  page?: number;
}

export default function JobResults({
  filterValues,
  page = 1,
}: JobResultsProps) {
  const { q, type, location, remote } = filterValues;
  const jobsPerPage = 6;
  const skip = (page - 1) * jobsPerPage;

  let filteredJobs = jobs.filter((job) => job.approved);

  if (q) {
    const keywords = q.toLowerCase().split(" ").filter(Boolean);
    filteredJobs = filteredJobs.filter((job) =>
      keywords.every((word) =>
        [job.title, job.companyName, job.type, job.locationType, job.location]
          .map((s) => s.toLowerCase())
          .some((field) => field.includes(word))
      )
    );
  }

  if (type) filteredJobs = filteredJobs.filter((job) => job.type === type);
  if (location)
    filteredJobs = filteredJobs.filter((job) => job.location === location);
  if (remote)
    filteredJobs = filteredJobs.filter((job) => job.locationType === "Remote");

  const totalResults = filteredJobs.length;
  const paginatedJobs = filteredJobs
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(skip, skip + jobsPerPage);

  return (
    <div className="space-y-6">
      <div className="grid gap-6">
      {paginatedJobs.map((job) => (
          <Card key={job.slug} className="overflow-hidden border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-black/95 dark:border-gray-800">
        <JobListItem
          job={{
            ...job,
            id:
              typeof job.id === "string"
                ? parseInt(job.id, 10)
                : job.id || Math.random(),
            createdAt: new Date(job.createdAt),
            updatedAt: new Date(job.updatedAt || new Date().toISOString()),
          }}
        />
          </Card>
      ))}
      </div>

      {paginatedJobs.length === 0 && (
        <Card className="p-6 text-center text-muted-foreground dark:bg-black/95 dark:border-gray-800 dark:text-gray-400">
          No jobs found. Try adjusting your search filters.
        </Card>
      )}

      {paginatedJobs.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(totalResults / jobsPerPage)}
          filterValues={filterValues}
        />
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
    return `/?${searchParams.toString()}`;
  }

  return (
    <div className="flex items-center justify-between">
      <Button
        variant="ghost"
        asChild
        className={cn(
          "gap-2 dark:hover:bg-gray-800/50 dark:text-gray-300",
          currentPage <= 1 && "invisible"
        )}
      >
        <a href={generatePageLink(currentPage - 1)}>
          <ArrowLeft className="h-4 w-4" />
          Previous
      </a>
      </Button>
      
      <span className="text-sm text-muted-foreground dark:text-gray-400">
        Page {currentPage} of {totalPages}
      </span>
      
      <Button
        variant="ghost"
        asChild
        className={cn(
          "gap-2 dark:hover:bg-gray-800/50 dark:text-gray-300",
          currentPage >= totalPages && "invisible"
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
