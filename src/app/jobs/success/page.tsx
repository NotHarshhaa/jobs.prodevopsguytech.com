import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Eye,
  Share2,
  Mail,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Job Posted Successfully - DevOps & Cloud Jobs",
  description: "Your job posting has been submitted successfully.",
};

export default function SuccessPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-8 bg-gradient-to-b from-gray-50 to-white px-4 py-16 text-gray-800 dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white">
      {/* Success Message */}
      <div className="relative overflow-hidden rounded-xl border border-indigo-200/60 bg-gradient-to-br from-white to-indigo-50/40 p-8 shadow-lg dark:border-indigo-900/30 dark:bg-gradient-to-br dark:from-gray-900 dark:to-indigo-900/20">
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20"></div>
        <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/20"></div>

        <div className="relative flex flex-col items-center space-y-6 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg dark:from-green-600 dark:to-green-800">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-800 drop-shadow-lg dark:text-white sm:text-4xl md:text-5xl">
              Job Posted Successfully!
            </h1>
            <p className="max-w-2xl text-xl text-gray-600 dark:text-gray-300">
              Your job posting has been submitted and will be reviewed shortly.
              You'll receive a confirmation email once it's approved.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="gap-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:from-blue-600 hover:to-indigo-700 dark:from-blue-600 dark:to-indigo-700 dark:hover:from-blue-700 dark:hover:to-indigo-800"
            >
              <Link href="/jobs">
                View All Jobs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 rounded-full border-purple-300/50 bg-purple-100/30 text-purple-700 shadow-lg backdrop-blur-sm hover:bg-purple-200/40 dark:border-purple-500/50 dark:bg-purple-900/20 dark:text-white dark:hover:bg-purple-900/40"
            >
              <Link href="/dashboard">
                Go to Dashboard
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Next Steps Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-indigo-200/60 bg-gradient-to-br from-white to-indigo-50/20 shadow-lg dark:border-indigo-900/30 dark:bg-gradient-to-br dark:from-gray-900 dark:to-indigo-900/10">
          <CardHeader className="border-b border-indigo-200/60 bg-indigo-50/80 pb-3 dark:border-indigo-900/30 dark:bg-indigo-900/20">
            <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-white">
              <Clock className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
              What Happens Next
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ol className="space-y-4">
              <li className="flex gap-3">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-100/80 text-sm font-medium text-blue-600 shadow-md dark:bg-blue-900/30 dark:text-blue-300">
                  1
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">
                    Review Process
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Our team will review your job posting within 24 hours.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-purple-100/80 text-sm font-medium text-purple-600 shadow-md dark:bg-purple-900/30 dark:text-purple-300">
                  2
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">
                    Job Goes Live
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Once approved, your job will be visible to thousands of
                    qualified candidates.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100/80 text-sm font-medium text-cyan-600 shadow-md dark:bg-cyan-900/30 dark:text-cyan-300">
                  3
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">
                    Receive Applications
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Candidates will apply through your specified channels.
                  </p>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>

        <Card className="border-purple-200/60 bg-gradient-to-br from-white to-purple-50/20 shadow-lg dark:border-purple-900/30 dark:bg-gradient-to-br dark:from-gray-900 dark:to-purple-900/10">
          <CardHeader className="border-b border-purple-200/60 bg-purple-50/80 pb-3 dark:border-purple-900/30 dark:bg-purple-900/20">
            <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-white">
              <Users className="h-5 w-5 text-purple-500 dark:text-purple-400" />
              Maximize Your Reach
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100/80 shadow-md dark:bg-blue-900/30">
                <Share2 className="h-4 w-4 text-blue-500 dark:text-blue-400" />
              </div>
              <div>
                <p className="font-medium text-gray-800 dark:text-white">
                  Share Your Job
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Share your job posting on social media to increase visibility.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100/80 shadow-md dark:bg-purple-900/30">
                <Eye className="h-4 w-4 text-purple-500 dark:text-purple-400" />
              </div>
              <div>
                <p className="font-medium text-gray-800 dark:text-white">
                  Add Job Highlights
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Consider upgrading to a featured listing to get more
                  attention.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100/80 shadow-md dark:bg-cyan-900/30">
                <Mail className="h-4 w-4 text-cyan-500 dark:text-cyan-400" />
              </div>
              <div>
                <p className="font-medium text-gray-800 dark:text-white">
                  Need Help?
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Contact our support team at support@prodevopsguytech.com
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end border-t border-purple-200/60 pt-4 dark:border-purple-900/30">
            <Button
              variant="ghost"
              asChild
              className="text-purple-600 hover:bg-purple-50 hover:text-purple-800 dark:text-purple-400 dark:hover:bg-purple-900/20 dark:hover:text-white"
            >
              <Link href="/contact">
                Contact Support
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
