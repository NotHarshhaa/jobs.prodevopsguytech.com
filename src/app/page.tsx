import JobFilterSidebar from "@/components/JobFilterSidebar";
import JobResults from "@/components/JobResults";
import H1 from "@/components/ui/h1";
import { JobFilterValues } from "@/lib/validation";
import { Metadata } from "next";
import { Search, Briefcase, MapPin, Globe } from "lucide-react";

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
      <div className="w-full max-w-7xl mx-auto space-y-12 pt-8">
        {/* Enhanced Hero Section */}
        <div className="space-y-8 text-center">
          <div className="space-y-6">
            <H1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
              {getTitle(filterValues)}
            </H1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the best DevOps and Cloud opportunities. Find remote work, competitive salaries, and companies that value your expertise.
            </p>
          </div>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Briefcase className="w-4 h-4" />
              <span>1000+ Jobs</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>50+ Locations</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="w-4 h-4" />
              <span>Remote Friendly</span>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <section className="flex flex-col lg:flex-row gap-8 items-stretch justify-center w-full">
          <JobFilterSidebar defaultValues={filterValues} />
          <div className="flex-1">
            <JobResults
              filterValues={filterValues}
              page={page ? parseInt(page) : undefined}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
