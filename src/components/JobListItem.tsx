import companyLogoPlaceholder from "@/assets/company-logo-placeholder.png";
import { formatMoney, relativeDate } from "@/lib/utils";
import { Banknote, Briefcase, Clock, Globe2, MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
    <article className="flex flex-col sm:flex-row gap-3 rounded-lg border p-5 hover:bg-muted/60 transition">
      <Image
        src={companyLogoPlaceholder}
        alt="Company logo"
        width={100}
        height={100}
        className="self-start rounded-lg object-cover"
      />

      <div className="flex-grow space-y-4">
        {/* Header: title + apply button */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0">
          <div>
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-muted-foreground">{job.companyName}</p>
          </div>
          {applyLink && (
            <Button asChild className="w-full sm:w-auto">
              <a href={applyLink} target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          )}
        </div>

        {/* Meta info */}
        <div className="flex flex-wrap gap-2 text-muted-foreground text-sm">
          <div className="flex items-center gap-1.5">
            <Briefcase size={16} className="shrink-0" />
            {job.type}
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={16} className="shrink-0" />
            {job.locationType}
          </div>
          <div className="flex items-center gap-1.5">
            <Globe2 size={16} className="shrink-0" />
            {job.location || "Worldwide"}
          </div>
          <div className="flex items-center gap-1.5">
            <Banknote size={16} className="shrink-0" />
            {formatMoney(job.salary)}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={16} className="shrink-0" />
            {relativeDate(job.createdAt)}
          </div>
        </div>
      </div>
    </article>
  );
}
