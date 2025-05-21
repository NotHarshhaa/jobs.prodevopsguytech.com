// src/components/JobResults.tsx
import { cn } from "@/lib/utils";
import { JobFilterValues } from "@/lib/validation";
import { ArrowLeft, ArrowRight, Briefcase, MapPin, Clock, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getJobs } from "@/app/actions/getJobs";
import { Badge } from "./ui/badge";
import { Job } from "@prisma/client";
import JobListItem from "./JobListItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

interface JobResultsProps {
  filterValues: JobFilterValues;
  page?: number;
  showAll?: boolean;
}

export default async function JobResults({ filterValues, page = 1, showAll = false }: JobResultsProps) {
  const session = await getServerSession(authOptions);
  const jobs = await getJobs(filterValues, showAll);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">
          Available Positions
          <Badge variant="secondary" className="ml-3">
            {jobs.length} jobs
          </Badge>
        </h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Most Recent
          </Button>
          <Button variant="outline" size="sm">
            Most Relevant
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        {jobs.map((job) => (
          <JobListItem 
            key={job.id} 
            job={job} 
            hideAdminControls={!showAll || !session?.user.isAdmin} 
          />
        ))}

        {jobs.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center">
            <Briefcase className="h-12 w-12 text-muted-foreground/50" />
            <h3 className="mt-4 text-lg font-semibold">No jobs found</h3>
            <p className="mt-2 text-muted-foreground">
              Try adjusting your search filters or browse all available positions.
            </p>
            <Button className="mt-6" variant="outline" asChild>
              <a href="/jobs">View All Jobs</a>
            </Button>
          </div>
        )}
      </div>

      {jobs.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(jobs.length / 10)}
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
    return `/jobs?${searchParams.toString()}`;
  }

  return (
    <div className="flex items-center justify-between border-t border-border/40 pt-6">
      <Button
        variant="ghost"
        asChild
        className={cn(
          "gap-2 hover:bg-background/80 dark:hover:bg-gray-800/50 dark:text-gray-300",
          currentPage <= 1 && "invisible"
        )}
      >
        <a href={generatePageLink(currentPage - 1)}>
          <ArrowLeft className="h-4 w-4" />
          Previous
        </a>
      </Button>
      
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <Button
            key={pageNum}
            variant={pageNum === currentPage ? "default" : "ghost"}
            size="sm"
            asChild
            className={cn(
              "min-w-[2.5rem] rounded-full",
              pageNum === currentPage && "pointer-events-none"
            )}
          >
            <a href={generatePageLink(pageNum)}>
              {pageNum}
            </a>
          </Button>
        ))}
      </div>
      
      <Button
        variant="ghost"
        asChild
        className={cn(
          "gap-2 hover:bg-background/80 dark:hover:bg-gray-800/50 dark:text-gray-300",
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
