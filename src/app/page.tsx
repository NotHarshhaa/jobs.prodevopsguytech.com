import Hero from "@/components/Hero";
import Features from "@/components/Features";
import JobCategories from "@/components/JobCategories";
import { Metadata } from "next";
import JobResults from "@/components/JobResults";
import { JobFilterValues } from "@/lib/validation";

interface PageProps {
  searchParams: {
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
    page?: string;
  };
}

export const metadata: Metadata = {
  title: "DevOps & Cloud Jobs Portal | Find Your Next Career Opportunity",
  description:
    "Find the best DevOps and cloud computing jobs. Connect with top companies hiring DevOps engineers, SRE, and cloud professionals.",
};

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
    <main>
      <Hero />
      <Features />
      <JobCategories />
      <div className="container py-16">
        <JobResults
          filterValues={filterValues}
          page={page ? parseInt(page) : undefined}
          jobs={[]}
        />
      </div>
    </main>
  );
}
