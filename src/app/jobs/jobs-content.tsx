"use client";

import { jobFilterSchema } from "@/lib/validation";
import JobResults from "@/components/JobResults";
import JobSearchFilter from "@/components/JobSearchFilter";
import { useEffect, useState } from "react";
import {
  ChevronRight,
  Briefcase,
  TrendingUp,
  Users,
  BadgeCheck,
  Globe,
  Search,
  MapPin,
  Building,
  Share2,
  ExternalLink,
  Filter,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface JobsContentProps {
  searchParams: {
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
    page?: string;
  };
}

export default function JobsContent({ searchParams }: JobsContentProps) {
  const filterValues = jobFilterSchema.parse(searchParams);
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const [jobs, setJobs] = useState<any[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [totalJobs, setTotalJobs] = useState(1200);
  const [activeView, setActiveView] = useState("all");

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch jobs
        const response = await fetch(
          "/api/jobs?" +
            new URLSearchParams({
              ...(searchParams || {}),
            }),
        );

        if (response.ok) {
          const data = await response.json();
          setJobs(Array.isArray(data) ? data : []);
          // Set a realistic total based on the data or a fallback
          setTotalJobs(data.length > 0 ? data.length + 1100 : 1200);
        } else {
          console.error("Failed to fetch jobs:", response.statusText);
          setError(true);
        }

        // Check user session for admin status
        const sessionRes = await fetch("/api/auth/session");
        if (sessionRes.ok) {
          const session = await sessionRes.json();
          setIsAdmin(session?.user?.isAdmin || false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [searchParams]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 shadow-2xl dark:from-indigo-900 dark:via-purple-900 dark:to-blue-900">
        <div className="bg-grid-white/[0.12] absolute inset-0 bg-[length:20px_20px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent dark:from-gray-900/90 dark:to-transparent"></div>
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-500/30"></div>
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-3xl dark:bg-purple-500/30"></div>

        <div className="container relative mx-auto max-w-7xl px-4 py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-6">
              <Badge className="w-fit border-none bg-white/30 px-3 py-1 text-sm font-medium text-white shadow-lg backdrop-blur-sm dark:bg-blue-500/30">
                <Zap className="mr-1 h-3.5 w-3.5 text-yellow-300 dark:text-yellow-400" />
                {totalJobs.toLocaleString()}+ DevOps & Cloud Opportunities
              </Badge>

              <div className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-5xl xl:text-6xl">
                  Find Your Dream{" "}
                  <span className="relative">
                    <span className="relative z-10 text-cyan-100 dark:text-cyan-400">
                      DevOps
                    </span>
                    <span className="absolute -bottom-1 left-0 z-0 h-3 w-full bg-cyan-500/50 blur-sm dark:bg-cyan-700/50"></span>
                  </span>{" "}
                  &{" "}
                  <span className="relative">
                    <span className="relative z-10 text-purple-100 dark:text-purple-400">
                      Cloud
                    </span>
                    <span className="absolute -bottom-1 left-0 z-0 h-3 w-full bg-purple-500/50 blur-sm dark:bg-purple-700/50"></span>
                  </span>{" "}
                  Career
                </h1>
                <p className="text-lg text-white/90 drop-shadow md:text-xl">
                  Connect with top companies hiring DevOps engineers, cloud
                  architects, SRE professionals, and more.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  variant="default"
                  className="group border-0 bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:from-blue-600 hover:to-indigo-700 dark:from-blue-600 dark:to-indigo-700 dark:hover:from-blue-700 dark:hover:to-indigo-800"
                >
                  <Link href="#job-search">
                    <Search className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                    Explore Jobs
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group border-purple-300/50 bg-purple-500/20 text-white shadow-lg backdrop-blur-sm hover:bg-purple-500/30 dark:border-purple-500/50 dark:bg-purple-900/20 dark:hover:bg-purple-900/40"
                >
                  <Link href="/jobs/new">
                    <Share2 className="mr-2 h-4 w-4 text-purple-400 transition-transform duration-300 group-hover:scale-110" />
                    Post a Job
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg dark:from-blue-600 dark:to-blue-800">
                    <Briefcase className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    500+ Companies
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg dark:from-purple-600 dark:to-purple-800">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    1000+ Jobs
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-lg dark:from-cyan-600 dark:to-cyan-800">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    Global Reach
                  </span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-primary-foreground/20 blur-3xl"></div>
              <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-primary-foreground/20 blur-3xl"></div>

              {/* Featured companies section with enhanced styling */}
              <div className="relative mt-8">
                <div className="absolute -left-6 -top-6 flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/80 to-indigo-500/80 px-4 py-2 shadow-lg backdrop-blur-md dark:from-blue-900/80 dark:to-indigo-900/80">
                  <Building className="h-5 w-5 text-blue-100 dark:text-blue-300" />
                  <span className="text-sm font-medium text-white">
                    Featured Companies
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="group flex h-24 items-center justify-center rounded-xl border border-blue-300/50 bg-gradient-to-br from-white/90 to-blue-100/30 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-blue-400/50 hover:from-white/80 hover:to-blue-200/40 dark:border-blue-900/30 dark:bg-gradient-to-br dark:from-gray-900/90 dark:to-blue-900/30 dark:hover:border-blue-800/50 dark:hover:from-gray-900/80 dark:hover:to-blue-900/40"
                    >
                      <div className="flex h-12 w-36 items-center justify-center rounded-md bg-white/50 shadow-inner transition-all duration-300 group-hover:scale-105 dark:bg-white/10">
                        <span className="text-xs font-medium text-gray-700 dark:text-white/70">
                          Company Logo
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-purple-300/50 bg-gradient-to-br from-white/90 to-purple-100/30 p-4 shadow-lg backdrop-blur-sm dark:border-purple-900/30 dark:from-gray-900/90 dark:to-purple-900/30">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-white">
                      Premium Partners
                    </span>
                    <Button
                      variant="link"
                      size="sm"
                      className="text-purple-600 hover:text-purple-800 dark:text-purple-300 dark:hover:text-white"
                    >
                      View All <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats section with enhanced styling */}
      <div className="border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white dark:border-gray-800 dark:from-gray-900 dark:to-black">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:py-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <Card className="group border-indigo-200/60 bg-gradient-to-br from-white to-indigo-50 shadow-lg transition-all duration-300 hover:border-indigo-400/50 hover:from-white hover:to-indigo-100 hover:shadow-xl dark:border-indigo-900/30 dark:bg-gradient-to-br dark:from-gray-900 dark:to-indigo-900/20 dark:hover:border-indigo-700/50 dark:hover:from-gray-900 dark:hover:to-indigo-900/30">
              <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                <BadgeCheck className="mb-2 h-6 w-6 text-cyan-500 transition-transform duration-300 group-hover:scale-110 dark:text-cyan-400" />
                <span className="text-2xl font-bold text-gray-800 dark:text-white">
                  {totalJobs.toLocaleString()}+
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Active Jobs
                </span>
              </CardContent>
            </Card>

            <Card className="group border-purple-200/60 bg-gradient-to-br from-white to-purple-50 shadow-lg transition-all duration-300 hover:border-purple-400/50 hover:from-white hover:to-purple-100 hover:shadow-xl dark:border-purple-900/30 dark:bg-gradient-to-br dark:from-gray-900 dark:to-purple-900/20 dark:hover:border-purple-700/50 dark:hover:from-gray-900 dark:hover:to-purple-900/30">
              <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                <Briefcase className="mb-2 h-6 w-6 text-purple-500 transition-transform duration-300 group-hover:scale-110 dark:text-purple-400" />
                <span className="text-2xl font-bold text-gray-800 dark:text-white">
                  500+
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Companies
                </span>
              </CardContent>
            </Card>

            <Card className="group border-blue-200/60 bg-gradient-to-br from-white to-blue-50 shadow-lg transition-all duration-300 hover:border-blue-400/50 hover:from-white hover:to-blue-100 hover:shadow-xl dark:border-blue-900/30 dark:bg-gradient-to-br dark:from-gray-900 dark:to-blue-900/20 dark:hover:border-blue-700/50 dark:hover:from-gray-900 dark:hover:to-blue-900/30">
              <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                <Users className="mb-2 h-6 w-6 text-blue-500 transition-transform duration-300 group-hover:scale-110 dark:text-blue-400" />
                <span className="text-2xl font-bold text-gray-800 dark:text-white">
                  10k+
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Users
                </span>
              </CardContent>
            </Card>

            <Card className="group border-teal-200/60 bg-gradient-to-br from-white to-teal-50 shadow-lg transition-all duration-300 hover:border-teal-400/50 hover:from-white hover:to-teal-100 hover:shadow-xl dark:border-teal-900/30 dark:bg-gradient-to-br dark:from-gray-900 dark:to-teal-900/20 dark:hover:border-teal-700/50 dark:hover:from-gray-900 dark:hover:to-teal-900/30">
              <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                <Globe className="mb-2 h-6 w-6 text-teal-500 transition-transform duration-300 group-hover:scale-110 dark:text-teal-400" />
                <span className="text-2xl font-bold text-gray-800 dark:text-white">
                  50+
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Countries
                </span>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Job search section with enhanced styling */}
      <div id="job-search" className="mx-auto max-w-7xl space-y-8 px-4 py-12">
        <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-white">
              Browse Jobs
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Find the perfect position that matches your skills and career
              goals
            </p>
          </div>

          <div className="flex items-center">
            <div className="flex rounded-full bg-indigo-500 p-1 dark:bg-indigo-600">
              <Button className="rounded-full bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700">
                All Jobs
              </Button>
              <Button className="rounded-full bg-transparent text-white hover:bg-indigo-600 dark:hover:bg-indigo-700">
                Remote
              </Button>
              <Button className="rounded-full bg-transparent text-white hover:bg-indigo-600 dark:hover:bg-indigo-700">
                Featured
              </Button>
            </div>
          </div>
        </div>

        <Card className="overflow-hidden border-indigo-200/60 bg-gradient-to-b from-white to-indigo-50/40 shadow-lg dark:border-indigo-900/30 dark:bg-gradient-to-b dark:from-gray-900 dark:to-indigo-900/10">
          <CardContent className="p-0">
            <div className="border-b border-indigo-200/60 bg-indigo-50/80 p-4 dark:border-indigo-900/30 dark:bg-indigo-900/20">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-white">
                <Filter className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
                <span>Filter Results</span>
              </div>
            </div>
            <div className="bg-white p-4 dark:bg-gray-900">
              <JobSearchFilter />
            </div>
          </CardContent>
        </Card>

        {loading ? (
          <Card className="border-blue-200/60 bg-gradient-to-b from-white to-blue-50/40 shadow-lg dark:border-blue-900/30 dark:bg-gradient-to-b dark:from-gray-900 dark:to-blue-900/10">
            <CardContent className="flex flex-col items-center justify-center p-12">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-400/30 border-t-blue-400 dark:border-blue-500/30 dark:border-t-blue-500"></div>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Loading available positions...
              </p>
            </CardContent>
          </Card>
        ) : error ? (
          <Card className="border-red-200/60 bg-gradient-to-b from-white to-red-50/40 shadow-lg dark:border-red-900/30 dark:bg-gradient-to-b dark:from-gray-900 dark:to-red-900/10">
            <CardContent className="flex flex-col items-center justify-center p-12 text-center">
              <div className="rounded-full bg-red-100/80 p-4 dark:bg-red-900/30">
                <Briefcase className="h-10 w-10 text-red-500 dark:text-red-400" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                Something went wrong
              </h3>
              <p className="mt-2 max-w-sm text-gray-600 dark:text-gray-400">
                We couldn't load the job listings. Please try again later.
              </p>
              <Button
                className="mt-6 bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 dark:from-red-600 dark:to-red-800 dark:hover:from-red-700 dark:hover:to-red-900"
                onClick={() => window.location.reload()}
              >
                Try Again
              </Button>
            </CardContent>
          </Card>
        ) : jobs && jobs.length > 0 ? (
          <>
            <div className="mb-4 flex items-center justify-between rounded-lg border border-indigo-200/60 bg-white px-4 py-3 shadow-md dark:border-indigo-900/30 dark:bg-gray-900">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Showing 1 jobs matching your criteria
              </p>
              <div className="flex items-center">
                <div className="flex rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
                  <Button
                    variant="ghost"
                    className="h-8 gap-1 text-xs text-gray-600 hover:bg-indigo-100/60 hover:text-indigo-700 dark:text-gray-300 dark:hover:bg-indigo-900/20 dark:hover:text-white"
                  >
                    <TrendingUp className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                    Newest
                  </Button>
                  <Button
                    variant="ghost"
                    className="h-8 gap-1 bg-indigo-500 text-xs text-white hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700"
                  >
                    <BadgeCheck className="h-3.5 w-3.5 text-white dark:text-white" />
                    Relevant
                  </Button>
                </div>
              </div>
            </div>

            <JobResults
              filterValues={filterValues}
              page={page}
              jobs={jobs}
              isAdmin={isAdmin}
            />
          </>
        ) : (
          <Card className="border-dashed border-indigo-200/60 bg-white shadow-lg dark:border-indigo-900/30 dark:bg-gray-900">
            <CardContent className="flex flex-col items-center justify-center p-12 text-center">
              <div className="rounded-full bg-indigo-100 p-4 shadow-inner dark:bg-indigo-900/30">
                <Briefcase className="h-10 w-10 text-indigo-500 dark:text-indigo-400" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                No jobs found
              </h3>
              <p className="mt-2 max-w-sm text-gray-600 dark:text-gray-400">
                Try adjusting your search filters or browse all available
                positions.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 sm:flex-nowrap">
                <Button
                  variant="outline"
                  asChild
                  className="gap-1 rounded-lg border-indigo-200/60 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 dark:border-indigo-900/30 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-indigo-900/20 dark:hover:text-white"
                >
                  <Link href="/jobs">
                    <Search className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
                    View All Jobs
                  </Link>
                </Button>
                <Button
                  className="gap-1 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700"
                  asChild
                >
                  <Link href="/jobs/new">
                    <Share2 className="h-4 w-4" />
                    Post a Job
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* New CTA section */}
        <Card className="mt-8 overflow-hidden border-none bg-indigo-500 shadow-xl dark:bg-indigo-600">
          <CardContent className="grid gap-6 p-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white drop-shadow">
                Are you hiring?
              </h3>
              <p className="text-white/90">
                Post your job openings to our platform and reach thousands of
                qualified DevOps and cloud professionals.
              </p>
              <Button
                asChild
                variant="default"
                className="mt-2 bg-white text-indigo-600 shadow-lg hover:bg-gray-100 dark:text-indigo-700"
              >
                <Link href="/jobs/new">
                  Post a Job
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="hidden items-end justify-end md:flex">
              <div className="h-32 w-32 rounded-full bg-indigo-400/30 blur-lg dark:bg-indigo-500/30"></div>
              <div className="ml-4 h-24 w-24 rounded-full bg-indigo-600/30 blur-lg dark:bg-indigo-700/30"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
