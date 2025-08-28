// src/components/JobResults.tsx
import { cn } from "@/lib/utils";
import { JobFilterValues } from "@/lib/validation";
import { ArrowLeft, ArrowRight, Search, Briefcase, MapPin } from "lucide-react";
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
    <div className="grow space-y-6">
      {/* Results Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/95 backdrop-blur-md shadow-sm dark:shadow-2xl">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
            Job Results
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {totalResults} {totalResults === 1 ? 'job' : 'jobs'} found
            {q && ` for "${q}"`}
            {type && ` in ${type}`}
            {location && ` in ${location}`}
            {remote && ' (Remote only)'}
          </p>
        </div>
        
        {/* Active Filters Display */}
        {(q || type || location || remote) && (
          <div className="flex flex-wrap gap-2">
            {q && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 text-sm font-medium border border-blue-200 dark:border-blue-800/50">
                <Search className="w-3 h-3" />
                {q}
              </span>
            )}
            {type && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 text-sm font-medium border border-green-200 dark:border-green-800/50">
                <Briefcase className="w-3 h-3" />
                {type}
              </span>
            )}
            {location && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 text-sm font-medium border border-purple-200 dark:border-purple-800/50">
                <MapPin className="w-3 h-3" />
                {location}
              </span>
            )}
            {remote && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-200 text-sm font-medium border border-orange-200 dark:border-orange-800/50">
                Remote
              </span>
            )}
          </div>
        )}
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
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
      </div>

      {/* Enhanced Empty State */}
      {paginatedJobs.length === 0 && (
        <div className="text-center py-16 px-6">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <Search className="w-12 h-12 text-gray-400 dark:text-gray-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No jobs found
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
            Try adjusting your search filters or browse all available positions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => window.location.href = '/'}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
            >
              View All Jobs
            </button>
            <button
              onClick={() => window.location.href = '/?remote=true'}
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-xl transition-colors"
            >
              Remote Jobs
            </button>
          </div>
        </div>
      )}

      {/* Enhanced Pagination */}
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

  // Generate page numbers to show
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/95 backdrop-blur-md shadow-sm dark:shadow-2xl">
      <div className="text-sm text-gray-600 dark:text-gray-300">
        Showing page {currentPage} of {totalPages} ({totalPages * 6} total jobs)
      </div>
      
      <div className="flex items-center gap-2">
        <a
          href={generatePageLink(currentPage - 1)}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all",
            currentPage <= 1 
              ? "text-gray-400 dark:text-gray-500 cursor-not-allowed" 
              : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          )}
        >
          <ArrowLeft size={16} />
          Previous
        </a>

        <div className="flex items-center gap-1">
          {getPageNumbers().map((page, index) => (
            <span key={index}>
              {page === '...' ? (
                <span className="px-3 py-2 text-gray-400 dark:text-gray-500">...</span>
              ) : (
                <a
                  href={generatePageLink(page as number)}
                  className={cn(
                    "px-3 py-2 rounded-lg font-medium transition-all",
                    page === currentPage
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  {page}
                </a>
              )}
            </span>
          ))}
        </div>

        <a
          href={generatePageLink(currentPage + 1)}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all",
            currentPage >= totalPages 
              ? "text-gray-400 dark:text-gray-500 cursor-not-allowed" 
              : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          )}
        >
          Next
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
