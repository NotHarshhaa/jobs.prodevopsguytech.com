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
    <article className="rounded-xl border bg-background p-4 shadow-sm hover:shadow-md hover:bg-muted/50 transition-all space-y-4 sm:space-y-0 sm:flex sm:gap-4">
      {/* Company Logo */}
      <div className="flex-shrink-0">
        <Image
          src={companyLogoPlaceholder}
          alt="Company logo"
          width={64}
          height={64}
          className="rounded-md object-cover sm:w-20 sm:h-20"
        />
      </div>

      {/* Job Content */}
      <div className="flex flex-col justify-between flex-grow">
        {/* Title & Apply Button */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
          <div>
            <h2 className="text-lg font-semibold leading-snug">{job.title}</h2>
            <div className="flex items-center gap-2 flex-wrap text-sm text-muted-foreground">
              <span>{job.companyName}</span>
              <Badge className="capitalize">
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
              className="w-full sm:w-auto sm:ml-4 mt-2 sm:mt-0"
            >
              <a href={applyLink} target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          )}
        </div>

        {/* Meta Info */}
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Briefcase size={14} className="shrink-0" />
            {job.type}
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="shrink-0" />
            {job.location || "Worldwide"}
          </div>
          <div className="flex items-center gap-1.5">
            <Banknote size={14} className="shrink-0" />
            {formatMoney(job.salary)}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="shrink-0" />
            {relativeDate(job.createdAt)}
          </div>
        </div>
      </div>
    </article>
  );
}
