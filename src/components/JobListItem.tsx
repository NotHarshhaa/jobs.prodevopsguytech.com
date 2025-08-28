import companyLogoPlaceholder from "@/assets/company-logo-placeholder.png";
import { formatMoney, relativeDate } from "@/lib/utils";
import { Banknote, Briefcase, Clock, Globe2, MapPin, ExternalLink, Star } from "lucide-react";
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

  const isNew = (new Date().getTime() - job.createdAt.getTime()) < (7 * 24 * 60 * 60 * 1000); // 7 days

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/95 backdrop-blur-md shadow-sm hover:shadow-xl dark:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6">
      {/* New Job Badge */}
      {isNew && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900/60 dark:text-green-200 text-xs font-medium px-2 py-1 rounded-full border border-green-200 dark:border-green-800/50">
            <Star className="w-3 h-3 mr-1" />
            New
          </Badge>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Company Logo */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-2xl border-2 border-gray-200 dark:border-gray-600 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
            <Image
              src={companyLogoPlaceholder}
              alt={`${job.companyName} logo`}
              width={96}
              height={96}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Job Content */}
        <div className="flex flex-col justify-between flex-grow min-w-0">
          {/* Header Section */}
          <div className="space-y-4">
            {/* Title & Company */}
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {job.title}
              </h2>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  {job.companyName}
                </span>
                <div className="flex items-center gap-2">
                  <Badge className="capitalize bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800/50">
                    {job.locationType}
                  </Badge>
                  <Badge
                    className={cn(
                      "capitalize border",
                      job.type === "Full-time"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200 border-green-200 dark:border-green-800/50"
                        : job.type === "Part-time"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800/50"
                        : job.type === "Contract"
                        ? "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200 border-red-200 dark:border-red-800/50"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700"
                    )}
                  >
                    {job.type}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Meta Info Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Briefcase className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                <span className="font-medium">{job.type}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <MapPin className="w-4 h-4 text-green-500 dark:text-green-400" />
                <span className="font-medium">{job.location || "Worldwide"}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Banknote className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                <span className="font-medium">{formatMoney(job.salary)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Clock className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                <span className="font-medium">{relativeDate(job.createdAt)}</span>
              </div>
            </div>
          </div>

          {/* Action Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span>Posted {relativeDate(job.createdAt)}</span>
              {job.updatedAt && job.updatedAt.getTime() !== job.createdAt.getTime() && (
                <span>• Updated {relativeDate(job.updatedAt)}</span>
              )}
            </div>

            {applyLink && (
              <Button
                asChild
                className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 px-8 py-3"
              >
                <a href={applyLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Apply Now
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Hover Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/0 to-blue-50/0 dark:from-blue-950/0 dark:via-blue-950/0 dark:to-blue-950/0 group-hover:from-blue-50/30 group-hover:via-blue-50/20 group-hover:to-blue-50/10 dark:group-hover:from-blue-950/20 dark:group-hover:via-blue-950/10 dark:group-hover:to-blue-950/5 transition-all duration-300 pointer-events-none" />
    </article>
  );
}
