// src/components/JobResults.tsx
import { cn } from "@/lib/utils";
import { JobFilterValues } from "@/lib/validation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import JobListItem from "./JobListItem";
import jobs from "@/data/jobs.json";

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
    <div className="grow space-y-4">
      {paginatedJobs.map((job) => (
        <JobListItem
          key={job.slug}
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
      ))}

      {paginatedJobs.length === 0 && (
        <p className="m-auto text-center">
          No jobs found. Try adjusting your search filters.
        </p>
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
    <div className="flex justify-between">
      <a
        href={generatePageLink(currentPage - 1)}
        className={cn(
          "flex items-center gap-2 font-semibold",
          currentPage <= 1 && "invisible"
        )}
      >
        <ArrowLeft size={16} />
        Previous page
      </a>
      <span className="font-semibold">
        Page {currentPage} of {totalPages}
      </span>
      <a
        href={generatePageLink(currentPage + 1)}
        className={cn(
          "flex items-center gap-2 font-semibold",
          currentPage >= totalPages && "invisible"
        )}
      >
        Next page
        <ArrowRight size={16} />
      </a>
    </div>
  );
}
