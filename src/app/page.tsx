import JobFilterSidebar from "@/components/JobFilterSidebar";
import JobResults from "@/components/JobResults";
import H1 from "@/components/ui/h1";
import { JobFilterValues } from "@/lib/validation";
import { Metadata } from "next";

interface PageProps {
  searchParams: {
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
    page?: string;
  };
}

function getTitle({ q, type, location, remote }: JobFilterValues) {
  const titlePrefix = q
    ? `${q} jobs`
    : type
      ? `${type} DevOps/Cloud Jobs (Coming Soon)`
      : remote
        ? "Remote DevOps/Cloud Jobs (Coming Soon)"
        : "All DevOps/Cloud Jobs (Coming Soon)";

  const titleSuffix = location ? ` in ${location}` : "";

  return `${titlePrefix}${titleSuffix}`;
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
  };
}

export default async function Home({
  searchParams: { q, type, location, remote, page },
}: PageProps) {
  const filterValues: JobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] w-full px-2 sm:px-4 md:px-6 animate-fadein">
      <div className="w-full max-w-5xl mx-auto space-y-8 pt-8">
        <div className="space-y-4 text-center">
          <H1>{getTitle(filterValues)}</H1>
          <p className="text-lg text-muted-foreground">Find your dream job.</p>
        </div>
        <section className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch justify-center w-full">
          <JobFilterSidebar defaultValues={filterValues} />
          <JobResults
            filterValues={filterValues}
            page={page ? parseInt(page) : undefined}
          />
        </section>
      </div>
    </main>
  );
}
