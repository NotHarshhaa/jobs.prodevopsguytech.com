import JobPage from "@/components/JobPage";
import { notFound } from "next/navigation";
import jobs from "@/data/jobs.json";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params: { slug } }: PageProps) {
  const job = jobs.find((job) => job.slug === slug);

  if (!job) notFound();

  return (
    <main className="m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      <JobPage job={job} />
    </main>
  );
}
