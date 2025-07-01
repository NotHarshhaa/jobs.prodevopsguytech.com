import { Metadata } from "next";
import JobsContent from "./jobs-content";

export const metadata: Metadata = {
  title: "Premium DevOps & Cloud Jobs | ProDevOpsGuy",
  description:
    "Discover elite DevOps, SRE, and cloud computing opportunities from industry-leading companies worldwide. Find remote and on-site positions that match your expertise.",
  keywords:
    "devops jobs, cloud computing careers, SRE positions, remote devops jobs, cloud architect, devops engineer, site reliability engineer, tech jobs",
  openGraph: {
    title: "Elite DevOps & Cloud Jobs | Accelerate Your Career Growth",
    description:
      "Browse curated DevOps and cloud computing job listings from leading tech companies. Premium remote and on-site positions available.",
    images: [
      {
        url: "/images/og-jobs.jpg",
        width: 1200,
        height: 630,
        alt: "Premium DevOps & Cloud Jobs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps & Cloud Jobs | Find Your Next Career Opportunity",
    description:
      "Browse thousands of DevOps and cloud computing job listings from leading companies. Remote and on-site positions available.",
  },
};

interface PageProps {
  searchParams: {
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
    page?: string;
  };
}

export default function JobsPage({ searchParams }: PageProps) {
  return (
    <div className="jobs-page-wrapper bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white">
      <JobsContent searchParams={searchParams} />
    </div>
  );
}
