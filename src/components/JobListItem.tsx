import companyLogoPlaceholder from "@/assets/company-logo-placeholder.png";
import { formatMoney, relativeDate } from "@/lib/utils";
import { Banknote, Briefcase, Clock, Globe2, MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Badge from "./Badge";
import { cn } from "@/lib/utils";

export interface JobListItemProps {
  job: {
    id?: number;
    slug: string;
    title: string;
    companyName: string;
    type: string;
    locationType: string;
    location: string;
    salary: number;
    applicationUrl?: string;
    applicationEmail?: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export default function JobListItem({ job }: JobListItemProps) {
  const applyLink = job.applicationEmail
    ? `mailto:${job.applicationEmail}`
    : job.applicationUrl;

  return (
    <article className="relative flex flex-col sm:flex-row gap-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-transparent backdrop-blur-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-5 overflow-hidden group">

      {/* Company Logo */}
      <div className="flex-shrink-0 flex items-center justify-center z-10">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-black flex items-center justify-center overflow-hidden shadow-sm">
          <Image
            src={companyLogoPlaceholder}
            alt="Company logo"
            width={64}
            height={64}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Job Content */}
      <div className="flex flex-col justify-between flex-grow z-10">
        {/* Title & Apply Button */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-snug mb-1">
              {job.title}
            </h2>
            <div className="flex items-center gap-2 flex-wrap text-sm text-gray-500 dark:text-gray-300">
              <span className="font-medium">{job.companyName}</span>
              <Badge className="capitalize bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                {job.locationType}
              </Badge>
              <Badge
                className={cn(
                  "capitalize",
                  job.type === "Full-time"
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                    : job.type === "Part-time"
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                    : job.type === "Contract"
                    ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {job.type}
              </Badge>
            </div>
          </div>

          {applyLink && (
            <Button
              asChild
              className="w-full sm:w-auto sm:ml-4 mt-2 sm:mt-0 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 font-semibold shadow-sm px-6 py-2 transition-all"
            >
              <a href={applyLink} target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          )}
        </div>

        {/* Meta Info */}
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-300 font-medium">
          <div className="flex items-center gap-1.5">
            <Briefcase size={15} className="shrink-0 text-gray-400 dark:text-gray-500" />
            {job.type}
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={15} className="shrink-0 text-gray-400 dark:text-gray-500" />
            {job.location || "Worldwide"}
          </div>
          <div className="flex items-center gap-1.5">
            <Banknote size={15} className="shrink-0 text-gray-400 dark:text-gray-500" />
            {formatMoney(job.salary)}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={15} className="shrink-0 text-gray-400 dark:text-gray-500" />
            {relativeDate(job.createdAt)}
          </div>
        </div>
      </div>
    </article>
  );
}
