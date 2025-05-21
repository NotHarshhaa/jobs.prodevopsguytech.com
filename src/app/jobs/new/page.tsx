import { Metadata } from "next";
import NewJobForm from "./NewJobForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Post a Job - DevOps & Cloud Jobs",
  description: "Post your job listing and reach thousands of DevOps and cloud professionals.",
};

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login?callbackUrl=/jobs/new");
  }

  return (
    <main className="mx-auto max-w-5xl space-y-8 px-4 py-8">
      <div className="space-y-3 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Post a New Job</h1>
        <p className="text-xl text-muted-foreground">
          Reach thousands of qualified DevOps and cloud professionals
        </p>
      </div>
      <NewJobForm />
    </main>
  );
}
