import JobResults from "@/components/JobResults"
import JobSearchFilter from "@/components/JobSearchFilter"
import { jobFilterSchema } from "@/lib/validation"
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

export const metadata: Metadata = {
  title: "Browse Jobs | DevOps & Cloud Jobs",
  description: "Find the latest DevOps and cloud computing job opportunities.",
}

export default function JobsPage({ searchParams }: PageProps) {
  const filterValues = jobFilterSchema.parse(searchParams)
  const page = searchParams.page ? parseInt(searchParams.page) : 1

  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Browse Jobs</h1>
        <JobSearchFilter />
      </div>

      <JobResults filterValues={filterValues} page={page} />
    </main>
  )
} 