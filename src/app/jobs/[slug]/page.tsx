import JobPage from "@/components/JobPage";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import jobs from "@/data/jobs.json";

interface PageProps {
  params: { slug: string };
}

const getJob = (slug: string) => {
  const job = jobs.find((job) => job.slug === slug);
  if (!job) notFound();
  return job;
};

export async function generateStaticParams() {
  const approvedJobs = jobs.filter((job) => job.approved);
  return approvedJobs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const job = {
    ...getJob(slug),
    id: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return {
    title: job.title,
  };
}

export default function Page({ params: { slug } }: PageProps) {
  const job = {
    ...getJob(slug),
    id: 0, // Provide a default or meaningful value
    createdAt: new Date(), // Provide a default or meaningful value
    updatedAt: new Date(), // Provide a default or meaningful value
  };

  const { applicationEmail, applicationUrl } = job;

  const applicationLink = applicationEmail
    ? `mailto:${applicationEmail}`
    : applicationUrl;

  if (!applicationLink) {
    console.error("Job has no application link or email");
    notFound();
  }

  return (
    <main className="m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      <JobPage job={job} />
      <aside>
        <Button asChild>
          <a href={applicationLink} className="w-40 md:w-fit">
            Apply now
          </a>
        </Button>
      </aside>
    </main>
  );
}
