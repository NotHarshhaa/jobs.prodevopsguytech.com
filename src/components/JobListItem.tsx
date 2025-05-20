import companyLogoPlaceholder from "@/assets/company-logo-placeholder.png";
import { formatMoney, relativeDate } from "@/lib/utils";
import { Banknote, Briefcase, Clock, Globe2, MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CardContent } from "@/components/ui/card";

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
    <CardContent className="p-6">
      <div className="flex flex-col sm:flex-row gap-6">
      {/* Company Logo */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-muted/10 border border-border/40 dark:bg-gray-900 dark:border-gray-800 flex items-center justify-center overflow-hidden">
          <Image
            src={companyLogoPlaceholder}
            alt="Company logo"
            width={64}
            height={64}
              className="object-cover"
          />
        </div>
      </div>

      {/* Job Content */}
        <div className="flex-grow space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="space-y-1.5">
              <h2 className="text-xl font-semibold tracking-tight dark:text-white">
              {job.title}
            </h2>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-muted-foreground dark:text-gray-400 font-medium">
                  {job.companyName}
                </span>
                <Badge variant="secondary" className="capitalize dark:bg-gray-800 dark:text-gray-200">
                {job.locationType}
              </Badge>
              <Badge
                  variant="outline"
                className={cn(
                  "capitalize",
                    job.type === "Full-time" && "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300",
                    job.type === "Part-time" && "border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-300",
                    job.type === "Contract" && "border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-300"
                )}
              >
                {job.type}
              </Badge>
            </div>
          </div>

          {applyLink && (
              <Button asChild size="sm" className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
              <a href={applyLink} target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          )}
        </div>

        {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground dark:text-gray-400">
          <div className="flex items-center gap-1.5">
              <Briefcase className="h-4 w-4" />
            {job.type}
          </div>
          <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
            {job.location || "Worldwide"}
          </div>
          <div className="flex items-center gap-1.5">
              <Banknote className="h-4 w-4" />
            {formatMoney(job.salary)}
          </div>
          <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
            {relativeDate(job.createdAt)}
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  );
}
