import JobResults from "@/components/JobResults";
import H1 from "@/components/ui/h1";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user.isAdmin) {
    redirect("/");
  }

  return (
    <main className="mx-auto my-4 max-w-5xl space-y-6 px-3 sm:my-10 sm:space-y-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <H1>Admin Dashboard</H1>
        <Link 
          href="/jobs/new"
          className="button button-primary w-full max-w-xs sm:w-auto"
        >
          Create New Job
        </Link>
      </div>
      
      <JobResults filterValues={{}} showAll={true} />
    </main>
  );
}
