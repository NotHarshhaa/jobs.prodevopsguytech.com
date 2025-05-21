import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import EditJobForm from "./EditJobForm";

interface PageProps {
  params: { slug: string };
}

export default async function EditJobPage({ params: { slug } }: PageProps) {
  const session = await getServerSession(authOptions);

  if (!session?.user.isAdmin) {
    redirect("/");
  }

  const job = await prisma.job.findUnique({
    where: { slug },
  });

  if (!job) notFound();

  return (
    <main className="mx-auto max-w-5xl space-y-8 px-4 py-8">
      <div className="space-y-3 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Edit Job</h1>
        <p className="text-xl text-muted-foreground">
          Edit the job posting details
        </p>
      </div>
      <EditJobForm job={job} />
    </main>
  );
} 