import JobFilterSidebar from "@/components/JobFilterSidebar"
import JobResults from "@/components/JobResults"
import { JobFilterValues } from "@/lib/validation"
import { Metadata } from "next"

interface PageProps {
  searchParams: {
    q?: string
    type?: string
    location?: string
    remote?: string
    page?: string
  }
}

function getTitle({ q, type, location, remote }: JobFilterValues) {
  const titlePrefix = q
    ? `${q} jobs`
    : type
      ? `${type} DevOps/Cloud Jobs`
      : remote
        ? "Remote DevOps/Cloud Jobs"
        : "All DevOps/Cloud Jobs"

  const titleSuffix = location ? ` in ${location}` : ""

  return `${titlePrefix}${titleSuffix}`
}

export function generateMetadata({
  searchParams: { q, type, location, remote },
}: PageProps): Metadata {
  return {
    title: `${getTitle({
      q,
      type,
      location,
      remote: remote === "true",
    })} | ProDevOpsGuy Tech`,
  }
}

export default function JobsPage({
  searchParams: { q, type, location, remote, page },
}: PageProps) {
  const filterValues: JobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  }

  return (
    <main className="container py-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">
          {getTitle(filterValues)}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Find your perfect role in DevOps and cloud computing
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[280px_1fr]">
        <JobFilterSidebar defaultValues={filterValues} />
        <JobResults
          filterValues={filterValues}
          page={page ? parseInt(page) : undefined}
        />
      </div>
    </main>
  )
} 