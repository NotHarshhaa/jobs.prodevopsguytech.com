import { Metadata } from "next";
import NewJobForm from "./NewJobForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { Briefcase, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Post a Job - DevOps & Cloud Jobs",
  description:
    "Post your job listing and reach thousands of DevOps and cloud professionals.",
};

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login?callbackUrl=/jobs/new");
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-16 dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 py-12 shadow-2xl dark:from-indigo-900 dark:via-purple-900 dark:to-blue-900">
        <div className="bg-grid-white/[0.12] absolute inset-0 bg-[length:20px_20px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent dark:from-gray-900/50 dark:to-transparent"></div>
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-500/30"></div>
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-3xl dark:bg-purple-500/30"></div>
        <div className="container relative mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-5xl">
              Post a New Job Opportunity
            </h1>
            <p className="mt-4 text-xl text-white/90 drop-shadow">
              Connect with top DevOps and cloud talent from around the world
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 rounded-full bg-blue-500/40 px-4 py-2 shadow-lg backdrop-blur-sm dark:bg-blue-900/40">
                <Users className="h-5 w-5 text-blue-100 dark:text-blue-300" />
                <span className="text-sm font-medium text-white">
                  5,000+ Professionals
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-purple-500/40 px-4 py-2 shadow-lg backdrop-blur-sm dark:bg-purple-900/40">
                <Briefcase className="h-5 w-5 text-purple-100 dark:text-purple-300" />
                <span className="text-sm font-medium text-white">
                  500+ Companies
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-cyan-500/40 px-4 py-2 shadow-lg backdrop-blur-sm dark:bg-cyan-900/40">
                <CheckCircle2 className="h-5 w-5 text-cyan-100 dark:text-cyan-300" />
                <span className="text-sm font-medium text-white">
                  Fast Approval
                </span>
              </div>
            </div>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="mt-8 border-purple-300/50 bg-purple-500/20 text-white shadow-lg backdrop-blur-sm hover:bg-purple-500/30 dark:border-purple-500/50 dark:bg-purple-900/20 dark:hover:bg-purple-900/40"
            >
              <Link href="/jobs">
                Browse Current Listings
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="mx-auto max-w-5xl space-y-8 px-4 py-12">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
            Enter Job Details
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Complete the form below to create your job listing
          </p>
        </div>
        <NewJobForm />
      </div>
    </main>
  );
}
